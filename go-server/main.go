package main

import (
	"fmt"
	"log"
	"net/http"

	"go-server/router"
)

func main() {
	r := router.Router()
	// fs := http.FileServer(http.Dir("build"))
	// http.Handle("/", fs)
	fmt.Println("Starting server on the port 8080...")

	log.Fatal(http.ListenAndServe(":8080", r))

	// 	url := "https://daily-fuel-prices-india.p.rapidapi.com/api/HP/allstates"

	// 	req, _ := http.NewRequest("GET", url, nil)

	// 	req.Header.Add("X-RapidAPI-Host", "daily-fuel-prices-india.p.rapidapi.com")
	// 	req.Header.Add("X-RapidAPI-Key", "SIGN-UP-FOR-KEY")

	// 	res, _ := http.DefaultClient.Do(req)

	// 	defer res.Body.Close()
	// 	body, _ := ioutil.ReadAll(res.Body)

	// 	fmt.Println(res)
	// 	fmt.Println(string(body))
}
