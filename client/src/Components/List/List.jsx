// import React from 'react';
import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from '../List/style'
const List = () => {
  const classes = useStyles();
  const [type, setType] = useState('Trucks');
  const [rating, setRating] = useState('Trucks');
  return(



    // <div className='d-flex justify-content-center'>
    //   <div className='col-lg-8 col-md-6 mt-3 mt-md-5 d-flex  bg-dark' id='maincontainer'>
    //      <div className="col-lg-20 col" id='mincontainer'/>
    //      <div className="col-lg-9 col-md-7 mt-0 mt-md-5 d-flex">
    //      <div id='formcontainer'>
    //        <form action="#" className=" request-form ftco-animate text-light bg-dark ">
    //         <h2>Make Your Trip!</h2>
    //          <div className="form-group">
    //            <label htmlFor className="label">Full Name</label>
    //            <input type="text"  className="form-control" placeholder="" />
    //          </div>
    //         <div className="form-group">
    //            <label htmlFor className="label">E-mail</label>
    //            <input type="email"  className="form-control" placeholder="ex: myname@gmail.com" />
    //          </div>
    //          <div className="form-group">
    //            <label htmlFor className="label">Phone Number</label>
    //            <input type="number" id='phonenumber' className="form-control" placeholder="" pattern="[0-9]{10}" required/>
    //          </div>
    //          <div className="form-group">
    //           <label htmlFor className="label">Pick-up location</label>

    //            <input type="text"  className="form-control" placeholder="City, Airport, Station, etc" />
    //          </div>
    //          <div className="form-group">
    //            <label htmlFor className="label">Drop-off location</label>
    //            <input type="text" className="form-control" placeholder="City, Airport, Station, etc" />
    //          </div>
    //          <div className="d-flex">
    //            <div className='dateContainer'>
    //            <div className="form-group mr-2">
    //              <label htmlFor className="label">Pick-up date</label>
    //              <input type="date" className="form-control" id="book_pick_date" placeholder="Date" />
    //            </div>
    //            <div className="form-group ml-2">
    //              <label htmlFor className="label">Drop-off date</label>
    //              <input type="date" className="form-control" id="book_off_date" placeholder="Date" />
    //            </div>
    //            </div>
    //          </div>
    //          <div className="form-group">
    //            <label htmlFor className="label">Pick-up time</label>
    //           <input type="time" className="form-control" id="time_pick" placeholder="Time" />
    //          </div>
    //          <div className="form-group">
    //          <label htmlFor className="label">Truck Type</label>
    //      <select className="form-control" id="inputGroupSelect01">
    //        <option selected>Select Truck Type</option>
    //        <option value={1}>ACE / DOST / PICKUP (1.5 TON)</option>
    //        <option value={2}>TATA 407 / EICHER 14FT (4 TON)</option>
    //        <option value={3}>EICHER 17FT (5 TON)</option>
    //        <option value={4}>EICHER 19FT (7 TON)</option>
    //        <option value={5}>20FT CONTAINER (6.5 TON)</option>
    //        <option value={6}>TATA TRUCK (10 TON)</option>
    //        <option value={7}>32FT CONTAINER (7 TON)</option>
    //        <option value={8}>32FT CONTAINER (14 TON)</option>
    //        <option value={9}>32 / 40 FEET OPEN TRAILER</option>
    //        <option value={10}>TAURUS  (18 TON)  N.A</option>
    //        <option value={11}>PARCEL SERVICE NOT AVAILABLE</option>
    //       <option value={12}>SELECT TRUCK LATER</option>
    //      </select>
    //    </div>
    //          <div className="form-group ">
    //            <input id='buttonSubmit' className='btn btn-primary btn-lg ' type="submit" defaultValue="Search Vehicle" />
    //           </div>
            
            
    //        </form>
    //        </div>
    //      </div>
    //   </div>





        <div className={classes.container}>
    <Typography variant="h4">Book your ride</Typography>
    <FormControl className={classes.formControl}>
      <InputLabel>Type</InputLabel>
      <Select value={type} onChange={(e)=>setType(e.target.value)}>
        <MenuItem value="Trucks">Trucks</MenuItem>
      </Select>

      <InputLabel>Rating</InputLabel>
      <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
        <MenuItem value={1}>All</MenuItem>
        <MenuItem value={3}>Above 3.0</MenuItem>
        <MenuItem value={4}>Above 4.0</MenuItem>
        <MenuItem value={4.5}>Above 4.5</MenuItem>
      </Select>

    </FormControl>
    </div>
  );
}

export default List;


