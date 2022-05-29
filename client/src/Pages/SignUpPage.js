// import Signup from '../Images/Signup.png';
import './SignUpPage.css'
import React,{useState} from 'react'
import axios from "axios";

let endpoint = "http://localhost:8080";
function SignUpPage(){
    const[firstname,setFirstName]=useState('');
    const[lastname,setLastName]=useState('');
    const[contact,setContact]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmpass,setConfirmPass]=useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);


    // Handling the name change
const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
    };
    const handleLastName = (e) => {
        setLastName(e.target.value);
        setSubmitted(false);
        };
    const contactHandle = (e) =>{
            setContact(e.target.value);
            setSubmitted(false);
        }
    
    // Handling the email change
    const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
    }

    const handlePass = (e) =>{
        setPassword(e.target.value);
        setSubmitted(false);
    }
    const handleConfirmPass = (e) =>{
        setConfirmPass(e.target.value);
        setSubmitted(false);
    }

    // Handling the form submission
const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname === '' ||lastname === '' ||contact === '' || email === '' || password === '' ||confirmpass === '' ) {
    setError(true);
    } else {
    setSubmitted(true);
    setError(false);
   
    
    let json = {
       firstname:firstname,
       lastname:lastname,
       contact:contact,
       email:email,
       password:password
    };

    console.log(json)
    // let json ="a"

        
        // console.log("pRINTING task", this.state.task);
        
        axios
            .post(
            endpoint + "/api/signup",
            json,
            {
                headers: {
                "Content-Type": "application/json",
                },
            }
            )
            .then((res) => {
          
            console.log("User Registered Successfully!");
            });
        

    }   

    };
// Showing success message
const successMessage = () => {
    return (
    <div
    className="success"
    style={{
    display: submitted ? '' : 'none',
    }}>
    <h4>User {firstname }  { lastname} successfully registered!!</h4>
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


    // const HandleSubmit =()=>{
    //     const newRecord ({...SignUpPage,})
    // }
    // const HandleSubmit = (e) =>{
    //     e.preventDefault();
    //     console.log(signUpPage)
    // }

    // onSubmit={HandleSubmit}
     return(
         <form action="" >
         <body className='SignupBody'>
         {/* <form className="form"> */}
        <div className="signuppagebg">

            {/* <img id='Signupimg' src={Signup} alt='Background' /> */}

    
        <p id="signupmsg">Sign Up Your Account!</p>
        {/* Calling to the methods */}
<div className="messages">
{errorMessage()}
{successMessage()}
</div>

        <div>

            <p id="msg">For the purpose of transportation and ride, your details are required.</p>
            
            <p id="already">Already have a account ? <span> </span>  </p> 
            
            <p id="first">First Name</p>
            <input id="firstname" name='FirstName' type="text" placeholder='Enter your name' value={firstname}
            onChange={handleFirstName} />

            <p id="last">Last Name</p>
            <input id="lastname" name='LastName' type="text" placeholder='Last Name' value={lastname} 
             onChange={handleLastName} />
            <p id="contact1">Contact Number</p>
            <input type="number" name="contact" id="Contactno" maxLength={10} placeholder='Contact Number' value={contact}
            onChange={contactHandle}  />{/*need to put limit to phone number */}

            <p id="email">E-mail Id</p>
            <input type="email" name="email" id="emailid" placeholder='Enter your email Id' value={email}
             onChange={handleEmail}/>

            <p id="password">Password</p>
            <input type="password" name="password" id="pass" placeholder='Password' value={password}
             onChange={handlePass} />

            <p id="repassword">Confirm Password</p>
            <input type="password" name="pass1" id="pass1" placeholder='Confirm Password' value={confirmpass}
            o onChange={handleConfirmPass}/>

            {/* <input type="checkbox" name="agree" id="agree" />
            <p id="terms">I agree to terms and conditions</p> */}

            <button type="submit" onClick={handleSubmit} id="submit"> Sign Up </button>

         {/* sign up with google left */}
         </div>
        </div>
        </body>
        </form>
        
        
     );
 }
 export default SignUpPage;