package middleware

import (
	"context"
	"encoding/json"
	"fmt"
	"go-server/models"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// collection object/instance
var collectionUser *mongo.Collection
var collectionTransporter *mongo.Collection
var collectionMainPage *mongo.Collection
var collectionTask *mongo.Collection

// create connection with mongo db
func init() {
	loadTheEnv()
	createDBInstance()
}

func loadTheEnv() {
	// load .env file
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}
}

func createDBInstance() {
	// DB connection string
	connectionString := os.Getenv("DB_URI")

	// Database Name
	dbName := os.Getenv("DB_NAME")

	// Collection name
	collName := os.Getenv("DB_COLLECTION_NAME")

	// Set client options
	clientOptions := options.Client().ApplyURI(connectionString)

	// connect to MongoDB
	client, err := mongo.Connect(context.TODO(), clientOptions)

	if err != nil {
		log.Fatal(err)
	}

	// Check the connection
	err = client.Ping(context.TODO(), nil)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to MongoDB!")

	collectionUser = client.Database(dbName).Collection(collName)
	collectionTransporter = client.Database(dbName).Collection("Transporter")
	collectionMainPage = client.Database(dbName).Collection("MainPage")
	collectionTask = client.Database(dbName).Collection(collName)

	fmt.Println("Collection instance created!")
}

// GetAllTask get all the task route
func GetAllTask(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	payload := getAllTask()
	json.NewEncoder(w).Encode(payload)
}

// CreateTask create task route
func CreateTask(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	var task models.ToDoList
	_ = json.NewDecoder(r.Body).Decode(&task)
	// fmt.Println(task, r.Body)
	insertOneTask(task)
	json.NewEncoder(w).Encode(task)
}

// TaskComplete update task route
func TaskComplete(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "PUT")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	params := mux.Vars(r)
	taskComplete(params["id"])
	json.NewEncoder(w).Encode(params["id"])
}

// UndoTask undo the complete task route
func UndoTask(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "PUT")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	params := mux.Vars(r)
	undoTask(params["id"])
	json.NewEncoder(w).Encode(params["id"])
}

// DeleteTask delete one task route
func DeleteTask(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	params := mux.Vars(r)
	deleteOneTask(params["id"])
	json.NewEncoder(w).Encode(params["id"])
	// json.NewEncoder(w).Encode("Task not found")

}

// DeleteAllTask delete all tasks route
func DeleteAllTask(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	count := deleteAllTask()
	json.NewEncoder(w).Encode(count)
	// json.NewEncoder(w).Encode("Task not found")

}

// get all task from the DB and return it

func getAllTask() []primitive.M {
	cur, err := collectionTask.Find(context.Background(), bson.D{{}})
	if err != nil {
		log.Fatal(err)
	}

	var results []primitive.M
	for cur.Next(context.Background()) {
		var result bson.M
		e := cur.Decode(&result)
		if e != nil {
			log.Fatal(e)
		}
		// fmt.Println("cur..>", cur, "result", reflect.TypeOf(result), reflect.TypeOf(result["_id"]))
		results = append(results, result)

	}

	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}

	cur.Close(context.Background())
	return results
}

// Insert one task in the DB
func insertOneTask(task models.ToDoList) {
	insertResult, err := collectionTask.InsertOne(context.Background(), task)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Inserted a Single Record ", insertResult.InsertedID)
}

// task complete method, update task's status to true
func taskComplete(task string) {
	fmt.Println(task)
	id, _ := primitive.ObjectIDFromHex(task)
	filter := bson.M{"_id": id}
	update := bson.M{"$set": bson.M{"status": true}}
	result, err := collectionTask.UpdateOne(context.Background(), filter, update)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("modified count: ", result.ModifiedCount)
}

// task undo method, update task's status to false
func undoTask(task string) {
	fmt.Println(task)
	id, _ := primitive.ObjectIDFromHex(task)
	filter := bson.M{"_id": id}
	update := bson.M{"$set": bson.M{"status": false}}
	result, err := collectionTask.UpdateOne(context.Background(), filter, update)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("modified count: ", result.ModifiedCount)
}

// delete one task from the DB, delete by ID
func deleteOneTask(task string) {
	fmt.Println(task)
	id, _ := primitive.ObjectIDFromHex(task)
	filter := bson.M{"_id": id}
	d, err := collectionTask.DeleteOne(context.Background(), filter)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Deleted Document", d.DeletedCount)
}

// delete all the tasks from the DB
func deleteAllTask() int64 {
	d, err := collectionTask.DeleteMany(context.Background(), bson.D{{}}, nil)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Deleted Document", d.DeletedCount)
	return d.DeletedCount
}

// Register User route
func RegisterUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	var user models.User
	json.NewDecoder(r.Body).Decode(&user)

	// // fmt.Println(task, r.Body)

	insertResult, err := collectionUser.InsertOne(context.Background(), user)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Inserted a Single Record ", insertResult.InsertedID)
	json.NewEncoder(w).Encode(user)

}
func RegisterTransporterUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	var transporter models.Transporter
	json.NewDecoder(r.Body).Decode(&transporter)

	fmt.Println(transporter, r.Body)

	insertResult, err := collectionTransporter.InsertOne(context.Background(), transporter)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Inserted a Single Record ", insertResult.InsertedID)
	json.NewEncoder(w).Encode(transporter)

}

// var store = session.NewCookieStore([]byte("mysession"))

func Login(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	decoder := json.NewDecoder(r.Body)
	var t models.Login
	err := decoder.Decode(&t)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println("LOGIN CREDENTIALS", t.Email, t.Password)
	var dbUser models.User
	// var result bson.M
	err1 := collectionUser.FindOne(context.TODO(), bson.M{"email": t.Email}).Decode(&dbUser)
	if err1 != nil {
		// ErrNoDocuments means that the filter did not match any documents in the collection
		if err1 == mongo.ErrNoDocuments {
			return
		}
		log.Fatal(err1)
	}
	fmt.Printf("found document %v", dbUser)
	if t.Password == dbUser.Password {
		fmt.Printf("Valid User")
		w.WriteHeader(http.StatusAccepted)
	} else {
		fmt.Printf("Invalid User")
		w.Write([]byte(`{"setText": "Unauthorized"}`))
	}

}

func MainPage(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	var m models.MainPage
	if err := json.NewDecoder(r.Body).Decode(&m); err != nil {
		fmt.Println("ERROR GETING WHILE RECIEVING REQUEST", err)
	} else {
		fmt.Println("DATA", m)
		insertResult, err1 := collectionMainPage.InsertOne(context.Background(), m)
		if err1 != nil {
			log.Fatal(err)
		} else {
			fmt.Println("Inserted the record", insertResult.InsertedID)
			json.NewEncoder(w).Encode(insertResult.InsertedID)
		}

	}

}

// var mainPage models.MainPage
// json.NewDecoder(r.Body).Decode(&mainPage)

// fmt.Println(MainPage, r.Body)

// insertResult, err := collectionMainPage.InsertOne(context.Background(), MainPage)

// if err != nil {
// 	log.Fatal(err)
// 	w.WriteHeader(http.StatusInternalServerError)
// }

// fmt.Println("Inserted a Single Record ", insertResult.InsertedID)
// json.NewEncoder(w).Encode(MainPage)

// fmt.Println("RIDE DETAILS", t.FullName, t.Email, t.PhoneNo, t.PickUpLocation, t.DropOffLocation, t.PickUpDate, t.
// 	DropOffDate, t.PickUpTime)

// , t.TruckType(how to access data from dropdown list)

// var dbMainPage models.MainPage
// var result bson.M
// err1 := collectionUser.FindOne(context.TODO(), bson.M{"email": t.Email}).Decode(&dbUser)
// if err1 != nil {
// 	// ErrNoDocuments means that the filter did not match any documents in the collection
// 	if err1 == mongo.ErrNoDocuments {
// 		return
// 	}
// 	log.Fatal(err1)
// }
// fmt.Printf("found document %v", dbUser)
// if t.Password == dbUser.Password {
// 	fmt.Printf("Valid User")
// 	w.WriteHeader(http.StatusAccepted)
// } else {
// 	fmt.Printf("Invalid User")
// 	w.Write([]byte(`{"setText": "Unauthorized"}`))
// }

// }

func TaskEstimate(w http.ResponseWriter, r *http.Request) {
	//

	var task models.Task
	json.NewDecoder(r.Body).Decode(&task)
	fmt.Println(task)

	var taskEstimate models.TaskEstimate
	w.Header().Set("Access-Control-Allow-Origin", "*")

	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	json.NewEncoder(w).Encode("OKOK")
	//hey billing cha calculation ahe
	taskEstimate.DiselUsed = task.Distance / task.Milage
	taskEstimate.FuelCost = 105 * taskEstimate.DiselUsed
	taskEstimate.Price = taskEstimate.FuelCost * taskEstimate.DiselUsed
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(taskEstimate)
	// json.NewEncoder(w).Encode(taskEstimate.DiselUsed)
	// json.NewEncoder(w).Encode(taskEstimate.FuelCost)
	// json.NewEncoder(w).Encode(taskEstimate.Price)

}

func getAllData() []primitive.M {
	cur, err := collectionMainPage.Find(context.Background(), bson.D{})
	if err != nil {
		log.Fatal(err)
	}

	var results []primitive.M
	for cur.Next(context.Background()) {
		var result bson.M
		e := cur.Decode(&result)
		if e != nil {
			log.Fatal(e)
		}
		// fmt.Println("cur..>", cur, "result", reflect.TypeOf(result), reflect.TypeOf(result["_id"]))
		results = append(results, result)

	}
	fmt.Println("RESULT===>", results)

	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}

	cur.Close(context.Background())
	return results
}

func GetUserData(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	payload := getAllData()
	json.NewEncoder(w).Encode(payload)
}
