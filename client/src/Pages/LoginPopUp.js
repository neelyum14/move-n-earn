import React from 'react';
import Transportation from "./Transportation";
// import SignInPage from './SignInPage';
import './LoginPopUP.css';
import SignUpPage from './SignUpPage';

function LoginPopUpPage(){
    const [TransportIsOpen, setTransportIsOpen]= React.useState(false);
    const [SignUpIsOpen, setSignUpIsOpen]= React.useState(false);


        function TransportLogin(){
            setTransportIsOpen(true);
            
        }
        function SignUp(){
            setSignUpIsOpen(true);
        }
    return(
        <div className="blur">
        <div className="Popcontainer">
            <button id='user' onClick={()=>setSignUpIsOpen(true)}>USER SIGNUP</button>
            <button id='trans' onClick={()=>setTransportIsOpen(true)}>TRANSPORTER 
            SIGNUP</button>
        </div>
        {TransportIsOpen && <Transportation onClick={TransportLogin}/>}  
        {SignUpIsOpen && <SignUpPage onClick={SignUp}/>}    
        </div>
    );
}
export default LoginPopUpPage;