import React, { useEffect } from 'react';
// import { Autocomplete } from '@react-google-maps/api';
// import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';
// { onPlaceChanged, onLoad }
import './Receipt.css';
import Dashboard from "./Dashboard";
let endpoint = "http://localhost:8080";

const Receipt = (props) => {
  const [userData,setData]=React.useState({});
  const [DashboardIsOpen, setDashboardIsOpen] = React.useState(false);
  function DashboardPage() {
    setDashboardIsOpen(true);
    //get_data()
  }

  useEffect(()=>{
    if(props.id==userData._id)return;
    fetch(endpoint + "/api/getUserData",)
        .then(response => response.json())
        .then((data)=>{
            //const data =response.json();
            
            console.log(JSON.stringify(data));
            for(let i=0;i<data.length;i++){
              if(props.id==data[i]._id){
                setData(data[i]);
                break;
              }
            }
        })
        .catch(error => {
           
            console.error('There was an error!', error);
        });
  })




   
  return(
      <div className='receipt' >
  <div className="container bootstrap snippets bootdey">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <div className="col-md-6 col-sm-6 text-left text-dark">
                <h4><strong>Client</strong> Details</h4>
                <ul className="list-unstyled">
                  <li><strong>Full Name:</strong> {userData.fullname}</li>
                  <li><strong>Mail ID:</strong> {userData.email}</li>
                  <li><strong>Phone Number:</strong> {userData.phonenumber}</li>
                  {/* <li><strong>DOB:</strong> YYYY/MM/DD</li> */}
                </ul>
              </div>
              {/* <div className="col-md-6 col-sm-6 text-right">
                <h4><strong>Payment</strong> Details</h4>
                <ul className="list-unstyled">
                  <li><strong>Bank Name:</strong> 012345678901</li>
                  <li><strong>Account Number:</strong> 012345678901</li>
                  <li><strong>SWIFT Code:</strong> SWITCH012345678CODE</li>
                  <li><strong>V.A.T Reg #:</strong> VAT5678901CODE</li>
                </ul>
              </div> */}
            </div>
            <div className="table-responsive">
              <table className="table table-condensed nomargin">
                <thead>
                  <tr>
                    <th></th>
                    {/* <th>Quantity</th> */}
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr>
                    <td>
                      <div><strong>Total Distance</strong></div>
                    </td>
                    
                    <td>{props.distance.toFixed(2)}km</td>
                  </tr>
                  <tr>
                    <td>
                      <div><strong>Disel Rate</strong></div>
                    </td>
                    <td>₹95.31 per Litre</td>
                  </tr>
                  <tr>
                    <td>
                      <div><strong>Average Truck Milage</strong></div>
                    </td>
                    <td>3.8 km/l</td>
                  </tr>
                  <tr>
                    <td>
                      <div><strong>Fuel Used</strong></div>
                    </td>
                    <td>{(props.distance/(3.8)).toFixed(2)} Litres</td>
                  </tr>
                  <tr>
                    <td>
                      <div><strong>Fuel Cost</strong></div>
                    </td>
                    <td>₹{((props.distance/(3.8))*(95.31)).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>
                      <div><strong>Extra charges</strong></div>
                    </td>
                    <td>₹700.20</td>
                  </tr>
                  
                </tbody>
                <tr>
                    <td>
                      <div><strong>Total Amount</strong></div>
                    </td>
                    <td>₹{((props.distance/(3.8))*(95.31)+700.20).toFixed(2)}</td>
                  </tr>
              </table>
            </div>
            <hr className="nomargin-top" />
            <div className="row">
              <div className="col-sm-6 text-left-dark text-dark" >
                {/* <h4><strong>Contact</strong> Details</h4>
                <p className="nomargin nopadding">
                  <strong>Note:</strong> 
                  Lid est laborum dolo rumes fugats.
                </p><br />no P margin for printing - use <br> instead */}
                <address>
                  <b>Move n Earn</b><br/>
                  IND MH Pune <br />
                  Pune 43<br />
                  Phone: 7350416562 <br />
                  Fax: 7350416562 <br />
                  Email:movenearn@gmail.com
                </address>
              </div>
              
            </div>
          </div>
        </div>
        
        <div className="panel panel-default text-right ">
          <div className="panel-body">
            
            <a className="btn btn-warning " href="#" id='btnn'
            ><i className="fa fa-pencil-square-o" /> EDIT</a>
            
            <a className="btn btn-primary " href="#" id='btnn'><i className="fa fa-check" id='save' /> SAVE</a>
            
            <a className="btn btn-success " onClick={()=>{window.print()}} href="#" ><i className="fa fa-print" id='btnn' /> PRINT INVOICE</a>
            {/* <input
                        id="buttonSubmit"
                        className="btn btn-primary btn-lg "
                        type="submit"
                        defaultValue="Search Vehicle"
                        // onClick={(e)=>{handleSubmit(e);}}
                        onClick={setDashboardIsOpen}
                        
                      /> */}
                      <button type="submit" id='btnn' className="billingbtn" onClick={()=>setDashboardIsOpen(true)} >Receipt</button>
          </div>
        </div>
        {DashboardIsOpen && <Dashboard onClick={DashboardPage} />}
      </div>
      </div>
  );
}


export default Receipt;





