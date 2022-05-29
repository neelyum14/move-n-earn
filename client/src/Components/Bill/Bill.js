import React,{useState} from 'react';

const Bill =()=>
{
    return(
<div className="container bootstrap snippets bootdey">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <div className="col-md-6 col-sm-6 text-left">
                <h4><strong>Client</strong> Details</h4>
                <ul className="list-unstyled">
                  <li><strong>First Name:</strong> John </li>
                  <li><strong>Last Name:</strong> Doe </li>
                  <li><strong>Country:</strong> INDIA </li>
                  <li><strong>DOB:</strong> YYYY/MM/DD </li>
                </ul>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-condensed nomargin">
                <thead>
                  <tr>
                    <th></th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div><strong>Distance</strong></div>
                    </td>
                    <td>23,78 km</td>
                  </tr>
                  <tr>
                    <td>
                      <div><strong>Total Distance</strong></div>
                    </td>
                    
                    <td>₹68.80</td>
                  </tr>
                  <tr>
                    <td>
                      <div><strong>Disel Rate</strong></div>
                    </td>
                    <td>₹435.20</td>
                  </tr>
                  <tr>
                    <td>
                      <div><strong>Truck Milage</strong></div>
                    </td>
                    <td>₹100.20</td>
                  </tr>
                  <tr>
                    <td>
                      <div><strong>Fuel Used</strong></div>
                    </td>
                    <td>₹700.20</td>
                  </tr>
                  <tr>
                    <td>
                      <div><strong>Fuel Cost</strong></div>
                    </td>
                    <td>₹700.20</td>
                  </tr>
                  
                </tbody>
                <tr>
                    <td>
                      <div><strong>Total Amount</strong></div>
                    </td>
                    <td>₹2162.00</td>
                  </tr>
              </table>
            </div>
            <hr className="nomargin-top" />
            <div className="row">
              <div className="col-sm-6 text-left">
                <address>
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
        <div className="panel panel-default text-right">
          <div className="panel-body">
          </div>
        </div>
      </div>
  );
}
export default Bill;