import React, { useState } from "react";
import "../Pages/UserPart.css";
import Maps from "../Components/Maps/Maps";
import Receipt from "./Receipt";
import axios from "axios";
import { Button } from "react-bootstrap";
// import { Autocomplete } from "@react-google-maps/api";

let endpoint = "http://localhost:8080";
// import Header from '../Components/Header/Header';

const UserPart = (props) => {




  const [fullname, setFullname] = useState("");
  const [id,setId] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [pickuplocation, setPickuplocation] = useState("");
  const [dropofflocation, setDropofflocation] = useState("");
  const [pickupdate, setPickupdate] = useState("");
  const [dropoffdate, setDropoffdate] = useState("");
  const [pickuptime, setPickuptime] = useState("");
  const [trucktype, setTrucktype] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [error, setError] = useState("");
  const [pickupcoord,setpickupcoord]=useState([72.8777, 19.0760]);
  const [dropoffcoord,setdropoffcoord]=useState([]);
  const [distance,setDistance]=useState();

  const retirveDistance=(dist)=>{
    setDistance(dist);
  }


  // Handling the name change
  const handleFullName = (e) => {
    setFullname(e.target.value);
    setSubmitted(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  const handlePhoneNumber = (e) => {
    setPhonenumber(e.target.value);
    setSubmitted(false);
  };
  const HandlePickupLocation = (e) => {
    setPickuplocation(e.target.value);
    setSubmitted(false);
  };
  const HandlePickupCoord = (e)=>{
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json?limit=1&access_token=pk.eyJ1IjoibWl0YWxlZWtvbmRlIiwiYSI6ImNsMm45Ym42dzBvZ2ozYmt6MDd4ZTA5NmUifQ.J4YXTtkSlSwZfOwX0ztdyw`,{ method: 'GET' })
    .then(resp=>resp.json())
    .then(respdata=>{
        respdata.features.map((place,index)=>{
          setpickupcoord(place.center);
        })
    })
  }
  // Handling the email change
  const handleDropoffLocation = (e) => {
    setDropofflocation(e.target.value);
    setSubmitted(false);
  };
  const HandleDropoffCoord = (e)=>{
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json?limit=1&access_token=pk.eyJ1IjoibWl0YWxlZWtvbmRlIiwiYSI6ImNsMm45Ym42dzBvZ2ozYmt6MDd4ZTA5NmUifQ.J4YXTtkSlSwZfOwX0ztdyw`,{ method: 'GET' })
    .then(resp=>resp.json())
    .then(respdata=>{
        respdata.features.map((place,index)=>{
          setdropoffcoord(place.center);
        })
    })
  }
  const handlePickupDate = (e) => {
    setPickupdate(e.target.value);
    setSubmitted(false);
  };
  const handleDropOffDate = (e) => {
    setDropoffdate(e.target.value);
    setSubmitted(false);
  };
  const handlePickUpTime = (e) => {
    setPickuptime(e.target.value);
    setSubmitted(false);
  };
  const handleTruckType = (e) => {
    setTrucktype(e.target.value);
    setSubmitted(false);
  };
  const handleSubmitMain = (e) => {
    e.preventDefault();
    // if (
    //   fullname === "" ||
    //   email === "" ||
    //   phonenumber === "" ||
    //   pickuplocation === "" ||
    //   dropofflocation === "" ||
    //   pickupdate === "" ||
    //   dropoffdate === "" ||
    //   pickuptime === "" ||
    //   trucktype === ""
    // ) {
    //   setError(true);
    // } else {
    //   setSubmitted(true);
    //   setError(false);
     
    
    let json = {
      fullname: fullname,
      email: email,
      phonenumber: phonenumber,
      pickuplocation: pickuplocation,
      dropofflocation: dropofflocation,
      pickupdate: pickupdate,
      dropoffdate: dropoffdate,
      pickuptime: pickuptime,
      trucktype: trucktype,
    };

    console.log(json);
    axios
          .post(
          endpoint + "/api/mainpage",
          json,
          {
              headers: {
              "Content-Type": "application/json",
              },
          }
          )
          .then((res) => {
              console.log(res)
              setReceiptIsOpen(true);
              setId(res.data);
          })
          .catch((err)=>{
            console.log("error found" ,err);
          });

    // axios
    //   .post(
    //     endpoint + "/api/mainpage",
    //      json, 
    //      {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((res) => {

    //     console.log("Check Response" , res)
    //     if(res.statusText === "OK"){
    //       // console.log(res.statusText)
    //       setReceiptIsOpen(true)
    //     console.log("MainPage opened Successfully!");
    //   }
    // //   else if(res.statusText == "OK"){
              
    // //     if(res.data.setText == "Unauthorized"){
    // //      console.log("OK")
    // //          //  setLoginDetails(false);
    // //           console.log("Invalid user!");
    // //     }
    // //  }
    // //  else{
    // //    console.log("May be another error!");
    // //  }
   
    //   })
    //   .catch((err)=>{
    //     console.log("error found")//it is giving this error msg
        
    //   });
    }
  // };
  const successMessage = () => {
    return (
      <div
        // className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h4>Ride Confirm !!</h4>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        // className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h5>Please Fill out all the required fields</h5>
      </div>
    );
  };

 
  const [receiptIsOpen, setReceiptIsOpen] = React.useState(false);
  function ReceiptPage() {
    setReceiptIsOpen(true);
  }
  return (
    <div className="UserPlainBg">
      <div>
        <div>
          <div id="UserPartBody" className="UserPartBody">
            <div className="col-sm-3 col-md-6 col-lg-4">
              <div className="messages">
                {errorMessage()}
                {successMessage()}
              </div>
              <div id="formcontainer">
                <form
                  className="request-form ftco-animate text-light bg-dark "
                >
                  <div className="BlackContainer">
                    <br />
                    <h2>Make Your Trip!</h2>

                    <div className="form-group">
                      <label  className="label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        value={fullname}
                        onChange={(e)=> handleFullName(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label  className="label">
                        E-mail
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="ex: myname@gmail.com"
                        value={email}
                        onChange={(e)=>handleEmail(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="label">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        id="phonenumber"
                        className="form-control"
                        placeholder=""
                        pattern="[0-9]{10}"
                        required
                        value={phonenumber}
                        onChange={(e)=>handlePhoneNumber(e)}
                      />
                    </div>
                    {/* <Autocomplete> */}
                      <div className="form-group">
                        <label  className="label">
                          Pick-up location
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="City, Airport, Station, etc"
                          value={pickuplocation}
                          onChange={(e)=>HandlePickupLocation(e)}
                          onInput={(e)=>HandlePickupCoord(e)}
                        />
                      </div>

                      <div className="form-group">
                        <label  className="label">
                          Drop-off location
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          // placeholder="City, Airport, Station, etc"
                          placeholder="City, Airport, Station,etc"
                          value={dropofflocation}
                          onChange={(e)=>handleDropoffLocation(e)}
                          onInput={(e)=>HandleDropoffCoord(e)}
                        />
                      </div>
                    {/* </Autocomplete> */}

                    <div className="d-flex">
                      <div className="dateContainer">
                        <div className="form-group mr-2">
                          <label htmlFor className="label">
                            Pick-up date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="book_pick_date"
                            placeholder="Date"
                            value={pickupdate}
                            onChange={(e)=>handlePickupDate(e)}
                          />
                        </div>
                        <div className="form-group ml-2">
                          <label  className="label">
                            Drop-off date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="book_off_date"
                            placeholder="Date"
                            value={dropoffdate}
                            onChange={(e)=>handleDropOffDate(e)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label  className="label">
                        Pick-up time
                      </label>
                      <input
                        type="time"
                        className="form-control"
                        id="time_pick"
                        placeholder="Time"
                        value={pickuptime}
                        onChange={(e)=>handlePickUpTime(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label  className="label">
                        Truck Type
                      </label>
                      <select
                        className="form-control"
                        id="inputGroupSelect01"
                        value={trucktype}
                        onChange={(e)=>handleTruckType(e)}
                      >
                        <option selected>Select Truck Type</option>
                        <option value={1}>ACE / DOST / PICKUP (1.5 TON)</option>
                        <option value={2}>
                          TATA 407 / EICHER 14FT (4 TON)
                        </option>
                        <option value={3}>EICHER 17FT (5 TON)</option>
                        <option value={4}>EICHER 19FT (7 TON)</option>
                        <option value={5}>20FT CONTAINER (6.5 TON)</option>
                        <option value={6}>TATA TRUCK (10 TON)</option>
                        <option value={7}>32FT CONTAINER (7 TON)</option>
                        <option value={8}>32FT CONTAINER (14 TON)</option>
                        <option value={9}>32 / 40 FEET OPEN TRAILER</option>
                        <option value={10}>TAURUS (18 TON) N.A</option>
                        <option value={11}>PARCEL SERVICE NOT AVAILABLE</option>
                        <option value={12}>SELECT TRUCK LATER</option>
                      </select>
                    </div>
                    <div className="form-group" style={{marginBottom:"2em",padding:"2em"}}>
                      {/* <button
                      type="submit"
                        id="buttonSubmit1"
                        className="btn btn-primary btn-lg "
                        
                        defaultValue="Search Vehicle"
                        onClick={(e)=>{handleSubmit(e);}}
                        // onClick={setReceiptIsOpen(true)}
                        
                      /> */}

                       <button 
                       type="submit" 
                       style={{width:"4em",height:"2em",margin:"0.5em",marginBottom:"2em",padding:"auto"}}
                       onClick={(e)=>{handleSubmitMain(e);}}
                       className="btn btn-success btn-lg btn-block" 
                       id="buttonSubmit1" >Submit</button>
                      
                    </div>
                    <br />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="MapsContainer">
          <div className="col-sm-9 col-md-2 col-lg-8" class>
            <Maps pickupcoord={pickupcoord} dropoffcoord={dropoffcoord} retirveDistance={retirveDistance}/>  
            <div></div>
          </div>
        </div> 
        {receiptIsOpen && <Receipt onClick={ReceiptPage} id={id} pickupcoord={pickupcoord} dropoffcoord={dropoffcoord} distance={distance}/>}
      </div>
    </div>
  );
};
export default UserPart;
