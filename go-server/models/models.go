package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type ToDoList struct {
	ID     primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Task   string             `json:"task,omitempty"`
	Status bool               `json:"status,omitempty"`
}

type User struct {
	// ID        primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	FirstName string `json:"firstname"`
	LastName  string `json:"lastname"`
	Contact   string `json:"contact"`
	Email     string `json:"email"`
	Password  string `json:"password"`
}

type Transporter struct {
	FullName         string `json:"fullname"`
	Email            string `json:"email"`
	Password         string `json:"password"`
	VehicleOwnerName string `json:"vehicleownername"`
	VehicleName      string `json:"vehiclename"`
	VehicleType      string `json:"vehicletype"`
	RegistrationNo   string `json:"registrationno"`
	VehicleNumber    string `json:"vehiclenumber"`
	RcId             string `json:"rcID"`
	OwnerLicience    string `json:"ownerlicience"`
}

type Login struct {
	// Id       int64  `json:"id"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

type MainPage struct {
	Dropoffdate     string `json:"dropoffdate"`
	Dropofflocation string `json:"dropofflocation"`
	Email           string `json:"email"`
	Fullname        string `json:"fullname"`
	Phonenumber     string `json:"phonenumber"`
	Pickupdate      string `json:"pickupdate"`
	Pickuplocation  string `json:"pickuplocation"`
	Pickuptime      string `json:"pickuptime"`
	Trucktype       string `json:"trucktype"`
}

type Task struct {
	Distance float64 `json:"distance"`
	Fuel     float64 `json:"fuel"`
	Milage   float64 `json:"milage"`
}

type TaskEstimate struct {
	Price     float64 `json:"price"`
	DiselUsed float64 `json:"diselused"`
	FuelCost  float64 `json:"fuelcost"`
}
