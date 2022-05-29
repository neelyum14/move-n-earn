import React,{useState} from "react";
import truck from "../Images/truck.png"
import Backdrop from "../Components/BackDropPopup";
import LoginPopUp from "../Pages/LoginPopUp";
// import SignUpPage from "../Pages/SignUpPage";
import SignInPage from "./SignInPage";
import './Home.css';


function HomePage(props){
   const [popUpIsOpen, setPopUpIsOpen]= useState(false);
   const[signInIsOpen,setSignInIsOpen]=useState(false);
function Popup(){
setPopUpIsOpen(true);
}
function closePopup() {
    setPopUpIsOpen(false);
  }

 function SignIn(){
     setSignInIsOpen(true);
 }

 if(props.logindetail){
     window.location.path=+'/SignUpPage';
     return;
 }
return (
    <div className="Homebody">
    <div className="nav">
        
        <div>
            <img id="loginimg" src={truck} alt="Background" />
            
        </div>

        <div className="title">
        <p id='h1'>Move n Earn</p>
            <h8 id="h2"> <br/> <i> Make sure you move smoothly!<br/> Move and Earn's outposts put budget-friendly intercity and interstate logistics at your fingertips.</i></h8>
        </div>
        <div className="login">
            <button id='login' onClick={Popup}>SIGN UP</button>
        </div>
        <div className='signup'>
            <button id='transporter' onClick={SignIn}>LOGIN</button>
        </div>
        <h8 id="start">Start Your Journey!</h8>


        {/* <div className="register">
            <button id="regvehicle">Register Vehicle</button>
        </div> */}
        {popUpIsOpen && <LoginPopUp/>}
        {popUpIsOpen && <Backdrop onClick={closePopup}/>}   
        {signInIsOpen && <SignInPage/> }

        </div>
    </div>


);

}
export default HomePage;

