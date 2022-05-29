package router

import (
	"go-server/middleware"

	"github.com/gorilla/mux"
)

// Router is exported and used in main.go
func Router() *mux.Router {

	router := mux.NewRouter()

	// router.HandleFunc("/api/task", middleware.GetAllTask).Methods("GET", "OPTIONS")
	// router.HandleFunc("/api/task", middleware.CreateTask).Methods("POST", "OPTIONS")
	// router.HandleFunc("/api/task/{id}", middleware.TaskComplete).Methods("PUT", "OPTIONS")
	// router.HandleFunc("/api/undoTask/{id}", middleware.UndoTask).Methods("PUT", "OPTIONS")
	// router.HandleFunc("/api/deleteTask/{id}", middleware.DeleteTask).Methods("DELETE", "OPTIONS")
	// router.HandleFunc("/api/deleteAllTask", middleware.DeleteAllTask).Methods("DELETE", "OPTIONS")

	router.HandleFunc("/api/signup", middleware.RegisterUser).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/transporterSignup", middleware.RegisterTransporterUser).Methods("POST", "OPTIONS")
	// router.HandleFunc("/api/login", middleware.Login).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/signin", middleware.Login).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/mainpage", middleware.MainPage).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/task/estimate", middleware.TaskEstimate).Methods("POST", "OPTIONS")

	router.HandleFunc("/api/getUserData", middleware.GetUserData).Methods("GET", "OPTIONS")

	return router
}
