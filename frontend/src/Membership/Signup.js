import React from "react";
import "./Signup.css";
import { useState } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Header from "../Header/Header";
// export default class Signup extends Component {
//     render() {
function Signup() {
  const history = useHistory();
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");

  async function addUser() {
    // debugger;
    let result = await Axios.post("http://localhost:3333/userRegistration", {
      fname: fname,
      lname: lname,
      phone: phone,
      email: email,
      dob: dob,
      gender: gender,
      address: address,
      state: state,
      password: password,
    });

    if (!result.data.error) {
      history.push("/userloginscreen/user");
      alert("Signup successful");
    } else {
      if (result.data.error.email) alert(result.data.error.email.message);
      else if(result.data.error.password)
        alert(result.data.error.password.message);
        else if(result.data.error.gender)
        alert(result.data.error.gender.message);
    }

   
    //result = await result.json();
    if (result.status == true) {
      // .then(()=> {

      //   history.push("/userloginscreen");
      //   alert("Signup successful");
      // });
    }
  }
  return (
    <div>
      <Header></Header>
      {/* <div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="box">
                    <h1>Sign Up</h1>
                    <p class="text-muted"> Please fill in this form to create an account.</p> 
                    <input  type="text" required  
          
          placeholder="First Name" 
          onChange={(event) => {
            setfName(event.target.value);
          }}/> 
          <input type="text" required 
         
          placeholder="Last Name"
          onChange={(event) => {
            setlName(event.target.value);
          }}/> 
          <input type="text" required
          
          placeholder="Mobile Number"
          onChange={(event) => {
            setPhone(event.target.value);
          }}/>
          <input type="email" required
          placeholder="Enter email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}/>
          <input type="password" 
          placeholder="Password"  
          onChange={(event) => {
            setPassword(event.target.value);
          }}/> 
          <hr></hr>
      
      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> */}
      {/* <a class="forgot text-muted" href="#">Forgot password?</a>  */}
      {/* <input type="submit" value="Sign Up"  className="registerbtn"  */}
      {/* // onClick={addUser} /> */}
      {/* <div>
        Already have an account?
        <input type="submit" value="Login"  className="loginbtn">
         <b><Link to="/login">Login</Link></b>
        </input></div> */}

      {/* <div class="col-md-12">
                        <ul class="social-network social-circle">
                            <li><a href="http://www.facebook.com" class="icoFacebook" title="Facebook" target="_blank"><i class="fa fa-facebook-f"></i></a></li>
                            <li><a href="http://www.twitter.com" class="icoTwitter" title="Twitter" target="_blank"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="https://www.gmail.com" class="icoGoogle" title="Google +" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */}

      <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <div className="form-group" required>
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(event) => {
              setfName(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(event) => {
              setlName(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Mobile Number"
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            className="form-control"
            placeholder="Enter DOB"
            onChange={(event) => {
              setDOB(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Gender"
            onChange={(event) => {
              setGender(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Address"
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter State"
            onChange={(event) => {
              setState(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="(6 characters minimum)"
            autoComplete="on"
            minLength="6"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <hr></hr>

        <p>
          By creating an account you agree to our{" "}
          <a href="#">Terms & Privacy</a>.
        </p>

        <button type="submit" className="registerbtn" onClick={addUser}>
          Sign Up
        </button>
        <p className="container login">
          Already have an account?{" "}
          <b>
            <Link to="/login">Login</Link>
          </b>
        </p>
      </div>
    </div>
  );
}
export default Signup;
