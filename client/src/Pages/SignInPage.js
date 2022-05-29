import './SignInPage.css';
import UserPart from './UserPart.js';
import React,{useState} from 'react';
import axios from "axios";


let endpoint = "http://localhost:8080";

const SignInPage = (props) => {
  console.log("signup page opened");
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const logindetail=props.logindetail;
    const setLoginDetails=props.setLoginDetails;

    const handlePass = (e) =>{
      setPassword(e.target.value);
      setSubmitted(false);
    }
    
    const handleEmail = (e) => {
      setEmail(e.target.value);
      setSubmitted(false);
      }


const handleSubmit = (e) => {
  console.log("Submitted");
  e.preventDefault();
  if ( email === '' || password === '')
   {
  setError(true);
  } 
  else {
  setSubmitted(true);
  setError(false);




  
  let json = {
     email:email,
     password:password
  };


  console.log(json)

      axios
          .post(
          endpoint + "/api/signin",
          json,
          {
              headers: {
              "Content-Type": "application/json",
              },
          }
          )
          .then((res) => {

            console.log("Check Response" , res)
            if(res.statusText == "Accepted"){
                // setLoginDetails(true);
                setUserPartIsOpen(true);
               console.log("User Login Successfully!");
            }
            else if(res.statusText == "OK"){
              
               if(res.data.setText == "Unauthorized"){
                console.log("OK")
                    //  setLoginDetails(false);
                     console.log("Invalid user!");
               }
            }
            else{
              console.log("May be another error!");
            }
          
        
         
          })
          .catch((err)=>{
            console.log("error found" ,err);
          });

  }   

  };
const successMessage = () => {
  return (
  <div
  className="success"
  style={{
  display: submitted ? '' : 'none',
  }}>
  <h4>{ email } Enter Valid crediential</h4>
  </div>
  );
  };

  // Showing error message if error is true
const errorMessage = () => {
  return (
  <div
  className="error"
  style={{
  display: error ? '' : 'none',
  }}>
  <h1>Please enter all the fields</h1>
  </div>
  );
  };

  const [UserPartIsOpen, setUserPartIsOpen]= React.useState(0);
      function UserPartPage(){
        setUserPartIsOpen(true);
    }
    return ( 
      <div >
        <div className='body' id='body'>
        <div className="signup-form">

        <div className="messages">
{errorMessage()}
{successMessage()}
</div>
        <form>
          <h2>LOG IN</h2>
          <p className="hint-text">Create your account. It's free and only takes a minute.</p>
          <div className="form-group">
          </div>
          <div className="form-group">
            <p>Email Id</p>
            <input type="email" className="form-control" id='Email' name="email" placeholder="Email" required={true}  value={email} onChange={handleEmail} />
          </div>
          <div className="form-group">
            <p>Password*</p>
            <input type="password" className="form-control" id='Pass' name="password" placeholder="Password" required  onChange={handlePass} value={password} /> 
          </div>
          <div className="form-group">
            <button type="submit" onClick={(e)=>{handleSubmit(e);}}
              className="btn btn-success btn-lg btn-block" >Log In</button>
            {/* onClick={()=>setUserPartIsOpen(true)} */}
            
          </div>
        </form>
      </div>
      {UserPartIsOpen && <UserPart onClick={UserPartPage}/>}
      </div>
      </div>
     );
        }  
 
export default SignInPage;