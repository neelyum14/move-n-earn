import React,{useState} from 'react';
import './Transportation.css';
import axios from "axios";

let endpoint = "http://localhost:8080";


const Transportation = () => {

  

    const[fullname,setFullName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmpass,setConfirmPassword]=useState('');
    const[vownername,setVOwnerName]=useState('');
    const[vname,setVname]=useState(''); 
    const[vtype,setVtype]=useState('');
    const [rno, setRno] = useState('');
    const [vnumber, setVnumber] = useState('');
    const [rcid, setRCId] = useState('');
    const [ownerlicience, setOwnerLicience] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    


    const handleFullName = (e) => {
      setFullName(e.target.value);
      setSubmitted(false);
      };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
      }
    const handlePass = (e) =>{
        setPassword(e.target.value);
        setSubmitted(false);
    }
    const handleConfirmPass = (e) =>{
      setConfirmPassword(e.target.value);
      setSubmitted(false);
  }

    const handleOwnerName = (e) => {
          setVOwnerName(e.target.value);
          setSubmitted(false);
      };
    const handleVehicleName = (e) =>{
              setVname(e.target.value);
              setSubmitted(false);
          }
    const handleVehicletype = (e) =>{
      setVtype(e.target.value);
            setSubmitted(false);
        }
    const handleVehicleNumber = (e) =>{
          setVnumber(e.target.value);
            setSubmitted(false);
        }
    const handleRegistrationNo = (e) =>{
      setRno(e.target.value);
      setSubmitted(false);
    }

    const handleRcID = (e) =>{
      setRCId(e.target.value);
      setSubmitted(false);
    }

    const handleOwnerLicience = (e) =>{
      setOwnerLicience(e.target.value);
      setSubmitted(false);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if (fullname === '' || email === '' || password === '' || vownername=== '' ||vname==='' || vtype==='' ||rno === '' || vnumber ==='' || rcid ==='' || ownerlicience==='' ) {
      setError(true);
      } else {
      setSubmitted(true);
      setError(false);
     
       
      let json = {
        fullname:fullname,
        email:email,
        password:password,
        passwordconfirm:confirmpass,
        ownername:vownername,
        vehicleownername:vname,
        vehicletype:vtype,
        registrationno:rno,
        vehiclenumber:vnumber,
        rcid:rcid,
        ownerlicience:ownerlicience
        // uploadfile:""
      };

      console.log(json)

      axios
            .post(
            endpoint + "/api/transporterSignup",
            json,
            {
                headers: {
                "Content-Type": "application/json",
                },
            }
            )
            .then((res) => {
          
            console.log("Tansporter Registered Successfully!");
            });
        

    }   

    };

    const successMessage = () => {
      return (
      <div
      

      className="success"
      style={{
        alignItems:'stretch',
        backgroundColor:'cornflowerblue',
      display: submitted ? '' : 'none',
      }}>
      <h4> {fullname } Signin Successfully!!</h4>
      </div>
      );
      };


      const errorMessage = () => {
        return (
        <div
        
        className="error"
          
        style={{
          alignItems:'stretch',
        backgroundColor:'cornflowerblue',
        display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1> 
        </div>
        );
        };



    return (
        <form action="" onSubmit={handleSubmit}>
           <div className='transportcontainer' id='body1'> 
            <div className='Background' id='background'></div>
            <p id="heading1">Transport Registration</p>
            <p id="heading2">For the purpose of your ride, details are required</p>


            <div className="messages">
{errorMessage()}
{successMessage()}
</div>




            <p id="firstn">Full Name</p>
            <input type="text" name="fullname" id="txtfirst" placeholder="Enter your full name" value={fullname}
            onChange={handleFullName} />
            {/* <p id="lastn">Last Name</p>
            <input type="text" name="lastname" id="txtlast" placeholder="Enter your last name"/> */}
            <p id="transportemailid">Email Id</p>
            <input type="email" name="emailbox" id="emailbox" placeholder="Enter your email" value={email} onChange={handleEmail}/>
            <p id="createpass1">Create password*</p>
            <input type="password" name="passbox" id="passbox1" placeholder="Password" value={password} onChange={handlePass} />
            <p id="pass2" >Confirm password*</p>
            <input type="password" name="passwordconfirm" id="confirmpassbox" placeholder="Confirm password" value={confirmpass} onChange={handleConfirmPass}/>
            <p id="ownername">Vehicle Owner’s Name </p>
            <input type="text" name="ownername" id="vehicleownername" placeholder="Enter your vehicle owner’s name " 
            value={vownername} onChange={handleOwnerName} />
            <p id="vehname">Vehicle Name</p>
            <input type="text" name="vehiclename" id="vehiclenamebox" placeholder="Enter your vehicle name " value={vname} onChange={handleVehicleName}/>
            <p id="vehtype">Vehicle Type</p>
            <input type="text" name="vehicletype" id="vehicletypebox" placeholder="Enter your vehicle type" value={vtype} onChange={handleVehicletype}/>
            <p id="vehregno">Vehicle Registration Number</p>
            <input type="number" name="vehicleregno" id="vehicleregnobox"  value={rno} onChange={handleRegistrationNo}/>
            <p id="vehno" >Vehicle Number</p>
            <input type="text" name="vehicleno" id="vehiclenobox" placeholder="Enter your vehicle number " value={vnumber} onChange={handleVehicleNumber}/>
            <p id="rcbookid">RC Book ID</p>
            <input type="number" name="rcid" id="rcidbox" placeholder="Enter your RC Book Id" value={rcid} onChange={handleRcID}/>
            <p id="ownlicence" >Owner’s Licence</p>
            <input type="text" name="ownerlicience" id="ownerliciencebox" placeholder='Enter your licesnce' onChange={handleOwnerLicience}/>
            {/* <p id="attachments">Attachments</p> */}
            <div id='uploadfilebox'><input type="file" name="uploadfile" id="uploadfile"   /></div>
            <p id='legalDoc'>Documents required Licence Copy, Pan card Copy, RC Book Copy, Vehicle Legal Documents*</p>
            <button type="submit" id="registeracc"> Register Account </button>
        </div>
        </form>
     );
}
 
export default Transportation;

// onChange={handleInputTransport}