import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { Card ,Row , Col} from 'react-bootstrap';
// import "go-to-do-app/client/src/Pages/Dashboard.css";
// import "./Pages/Dashboard.css"
import "../Pages/Dashboard.css";
import Receipt from "./Receipt.js";




const Dashboard = ()=> {



  const [ReceiptIsOpen, setReceiptIsOpen] = React.useState(false);
  function ReceiptPage() {
    setReceiptIsOpen(true);
  }





    return ( 
        <div className='Dashboard' >
     
    
  
  <Row xs={1} md={3} className="g-4">
    <Col>
  <Card text={ 'dark'  } border="info" style={{ width: '35rem' , padding:'15px', margin:'15px'}}>
    <Card.Header text={'dark'} as="h5">Current Fuel Index</Card.Header>
    <Card.Body text={ 'dark'  }>
      <Card.Title>Petrol Price</Card.Title>
      <Table>
        <tr>
        <td> ₹ </td>
          <td> Price </td>
          <td>Average</td>
        </tr>
      </Table>
  
      <Card.Title text={"dark"}>Disel Price</Card.Title>
      <Table>
        <tr>
        <td> ₹ </td>
          <td> Price </td>
          <td>Average</td>
        </tr>
      </Table>
  
    </Card.Body>
  </Card>
  
  
  
  <Card text={ 'dark'  } border="info" style={{ width: '35rem' , padding:'15px' , margin:'15px'}}>
    <Card.Header as="h5">Financial Overview</Card.Header>
    <Card.Body>
      <Card.Title text={ 'dark'  }></Card.Title>
  
      <Table responsive>
      <tr>
          <th></th>
          <span></span>
          <th>  Last 7 Days  </th>
          <th>  Last 30 Days  </th>
          <th>  Last 90 Days  </th>
          <th>  Year to date  </th>
        </tr>
  
        <tr>
        <td> Total Income</td>
        <span></span>
        <td> ₹122 </td>
        <td> ₹122 </td>
        <td> ₹122 </td>
        <td> ₹122 </td>
        </tr>
  
        <tr>
        <td> Total Loss</td>
        <span></span>
        <td> ₹122 </td>
        <td> ₹122 </td>
        <td> ₹122 </td>
        <td> ₹122 </td>
        </tr>
      </Table>
    </Card.Body>
  </Card>
  
  
  
  </Col>
  
  
  <Col varient="top" aligment="right">
 
  <Card text={ 'dark'  }  border="info" className='scrollbar scrollbar-night-fade' style={{ width: '65rem' ,height:'50rem', padding:'5px' , margin:'15px'}}>
  
    <Card.Header text={ 'dark'  } as="h5">Current Rates</Card.Header>
    <div className="DAsh">
    <ReactBootStrap.Container scrollable={true}>
    <Card.Body responsive="sm">
      {/* <Card.Title>Petrol Price</Card.Title> */}
      
      
      <Card style={{padding:'5px',margin:'2px'}}>
        
      <Card.Header as="h6">ACE / DOST / PICKUP (1.5 TON)</Card.Header>
      <Table responsive="sm">
      <tr>
          <th></th>
          <span></span>
          <th> Line haul with surcharge</th>
          <th>  Balance </th>
          
        </tr>
      
        <tr >
        <td></td>
        <span></span>
        <td>₹ 233</td>
        <td>₹ 45</td>      
        </tr>
  
        <tr>
        <td></td>
        <span></span>
        <span></span>
        <td>₹ 233</td>
        <td>₹ 45</td>      
        </tr>
      </Table>
      </Card>
   
  {/* Second truck */}
  <Card style={{padding:'5px',margin:'2px'}}>
      <Card.Header as="h6">TATA 407 / EICHER 14FT (4 TON)</Card.Header>
      <Table>
      <tr>
          <th></th>
          <span></span>
          <th> Line haul with surcharge</th>
          <th>  Balance </th>
        </tr>
      
        <tr >
        <td></td>
        <span></span>
        <td>₹ 233</td>
        <td>₹ 45</td>      
        </tr>
  
        <tr>
        <td></td>
        <span></span>
        <span></span>
        <td>₹ 233</td>
        <td>₹ 45</td>      
        </tr>
      </Table>
      </Card>
      {/* 3 truck */}
  <Card style={{padding:'5px',margin:'2px'}}>
      <Card.Header as="h6">EICHER 17FT (5 TON)</Card.Header>
      <Table>
      <tr>
          <th></th>
          <span></span>
          <th> Line haul with surcharge</th>
          <th>  Balance </th>
          
        </tr>
      
        <tr >
        <td></td>
        <span></span>
        <td>₹ 233</td>
        <td>₹ 45</td>      
        </tr>
  
        <tr>
        <td></td>
        <span></span>
        <span></span>
        <td>₹ 233</td>
        <td>₹ 45</td>      
        </tr>
      </Table>
      </Card>
  {/* 4 truck */}
  <Card style={{padding:'5px',margin:'2px'}}>
      <Card.Header as="h6">EICHER 19FT (7 TON)</Card.Header>
      <Table>
      <tr>
          <th></th>
          <span></span>
          <th> Line haul with surcharge</th>
          <th>  Balance </th>
          
        </tr>
      
        <tr >
        <td></td>
        <span></span>
        <td>₹ 233</td>
        <td>₹ 45</td>      
        </tr>
  
        <tr>
        <td></td>
        <span></span>
        <span></span>
        <td>₹ 233</td>
        <td>₹ 45</td>      
        </tr>
      </Table>
      </Card>
      {/* 5 truck */}
  <Card style={{padding:'5px',margin:'2px'}}>
      <Card.Header as="h6">20FT CONTAINER (6.5 TON)</Card.Header>
      <Table>
      <tr>
          <th></th>
          <span></span>
          <th> Line haul with surcharge</th>
          <th>  Balance </th>
          
        </tr>
      
        <tr >
        <td></td>
        <span></span>
        <td>₹ 233</td>
        <td>₹ 45</td>      
        </tr>
  
        <tr>
        <td></td>
        <span></span>
        <span></span>
        <td>₹ 233</td>
        <td>₹ 45</td>      
        </tr>
      </Table>
      </Card>
  
  {/* 6 truck */}
  <Card style={{padding:'5px',margin:'2px'}}>
      <Card.Header as="h6">TATA TRUCK (10 TON)</Card.Header>
      <Table>
      <tr>
          <th></th>
          <span></span>
          <th> Line haul with surcharge</th>
          <th>  Balance </th>
          
        </tr>
      
        <tr >
        <td></td>
        <span></span>
        <td>₹ 233</td>
        <td>₹ 45</td>      
        </tr>
  
        <tr>
        <td></td>
        <span></span>
        <span></span>
        <td>₹ 233</td>
        <td>₹ 45</td>      
        </tr>
      </Table>
      </Card>
  
  
  {/* 7 truck */}
  <Card style={{padding:'5px',margin:'2px'}}>
      <Card.Header as="h6">32FT CONTAINER (7 TON)</Card.Header>
      <Table>
      <tr>
          <th></th>
          <span></span>
          <th> Line haul with surcharge</th>
          <th>  Balance </th>
          
        </tr>
      
        <tr >
        <td></td>
        <span></span>
        <td>₹ 233</td>
        <td>₹ 45</td>      
        </tr>
  
        <tr>
        <td></td>
        <span></span>
        <span></span>
        <td>₹ 233</td>
        <td>₹ 45</td>      
        </tr>
      </Table>
      </Card>
  
  {/* 8 truck */}
  <Card style={{padding:'5px',margin:'2px'}}>
      <Card.Header as="h6">32FT CONTAINER (14 TON)</Card.Header>
      <Table>
      <tr>
          <th></th>
          <span></span>
          <th> Line haul with surcharge</th>
          <th>  Balance </th>
          
        </tr>
      
        <tr >
        <td></td>
        <span></span>
        <td>₹ 233</td>
        <td>₹ 45</td>      
        </tr>
  
        <tr>
        <td></td>
        <span></span>
        <span></span>
        <td>₹ 233</td>
        <td>₹ 45</td>      
        </tr>
      </Table>
      </Card>
      
  
      {/* 9 truck */}
  <Card style={{padding:'5px',margin:'2px'}}>
      <Card.Header as="h6">32 / 40 FEET OPEN TRAILER</Card.Header>
      <Table>
      <tr>
          <th></th>
          <span></span>
          <th> Line haul with surcharge</th>
          <th>  Balance </th>
          
        </tr>
      
        <tr >
        <td></td>
        <span></span>
        <td>₹ 233</td>
        <td>₹ 45</td>      
        </tr>
  
        <tr>
        <td></td>
        <span></span>
        <span></span>
        <td>₹ 233</td>
        <td>₹ 45</td>      
        </tr>
      </Table>
      </Card>
    
  
  
  
    {/* 10 truck */}
  <Card style={{padding:'5px',margin:'2px'}}>
      <Card.Header as="h6">TAURUS  (18 TON)  N.A</Card.Header>
      <Table>
      <tr>
          <th></th>
          <span></span>
          <th> Line haul with surcharge</th>
          <th>  Balance </th>
          
        </tr>
      
        <tr >
        <td></td>
        <span></span>
        <td>₹ 233</td>
        <td>₹ 45</td>      
        </tr>
  
        <tr>
        <td></td>
        <span></span>
        <span></span>
        <td>₹ 233</td>
        <td>₹ 45</td>      
        </tr>
      </Table>
      </Card>
      </Card.Body>
      </ReactBootStrap.Container>
      
      </div>
  </Card>
  
    </Col>
  </Row>
  {/* <button type="submit" className="billingbtn" onClick={()=>setReceiptIsOpen(true)} >Receipt</button> */}
  <div>
  {ReceiptIsOpen && <Receipt onClick={ReceiptPage} />}
  </div>
  </div>
  
      );




}
export default Dashboard