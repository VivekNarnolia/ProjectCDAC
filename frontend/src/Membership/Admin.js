import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./New Login.css";
import { useHistory, Link } from "react-router-dom";
import Axios from "axios";
import Header from "../Header/Header";

function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  // useEffect(() => {
  //   if (localStorage.getItem("user-info")) {
  //     //history.push("/");
  //   }
  // }, []);

  async function loginAdmin() {
    console.warn(email, password);
    let item = { email, password }
    debugger;
    let result1 = await fetch("http://localhost:3333/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(item),
    });
    result1 = await result1.json();
    if(result1.status==true){
      debugger;
      history.push("/adminloginscreen/admin");
      localStorage.setItem("user-name",email);
      // Axios.get("http://localhost:3333/adminloginscreen?role=admin").then((response) => {
      //   console.log(response);
      //   //setSearchList(response.data);
      // });

      
    }
    else{
      console.log("Invalid data")
      alert("Invalid data")
    }
    localStorage.setItem("user-info", JSON.stringify(result1));
    //history.push("/add");
  }

  return (//<form>
<div>
<Header></Header>

<div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="box">
                    <h1>Login</h1>
                    <p class="text-muted"> Please enter your login and password!</p> 
                    <input type="text" placeholder="Email" onChange={(event) => {
          setEmail(event.target.value);
        }}/> 
                    <input type="password" name="" placeholder="Password"  onChange={(event) => {
            setPassword(event.target.value);
          }}/> 
          <a class="forgot text-muted" href="#">Forgot password?</a> 
          <input type="submit" value="Login" className="loginbtn"  onClick={loginAdmin} />
                    <div class="col-md-12">
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
    </div>























  {/* <div className="container">
      <h3>Admin Login</h3>
      
      <label>Email</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
    

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="password"
          autoComplete="on"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <button
        type="submit"
        className="loginbtn"
        onClick={loginAdmin}
      >
        Login
      </button>

      
      
    </div> */}
    </div>
    
  );
}

export default Admin;
