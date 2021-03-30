import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./New Login.css";
import { useHistory, Link } from "react-router-dom";
import Header from "../Header/Header";

import Axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 

  const history = useHistory();
  // useEffect(() => {
  //   if (localStorage.getItem("user-info")) {
  //    // history.push("/add");
  //   }
  // }, []);

  async function loginUser() {
    
    //console.warn(email, password);
    let item = { email, password };
    //localStorage.setItem("user-info", JSON.stringify(item));
    let result = await fetch("http://localhost:3333/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    if(result.status==true){
    
    //  localStorage.setItem("user-info", JSON.stringify(item));
      //localStorage.setItem("user-info", JSON.stringify(result));
      history.push("/userloginscreen/user");
   

      // Axios.get("http://localhost:3333/userloginscreen?role=user").then((response) => {
      //   console.log(response);
      //   //setSearchList(response.data);
      // });



    }
    else{
      
      console.log("Invalid data")
      alert("Invalid data")

    }
    localStorage.setItem("user-info", JSON.stringify(result));
    
    //history.push("/add");
  }

  
//React Route Guarding
  return (

    
  <div>
    <Header></Header>
    
    <div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="box">
                    <h1>Login</h1>
                    <p class="text-muted"> Please enter your Email and password!</p> 
                    <input type="text" placeholder="Email" onChange={(event) => {
          setEmail(event.target.value);
        }}/> 
                    <input type="password" name="" placeholder="Password"  onChange={(event) => {
            setPassword(event.target.value);
          }}/> 
          <a class="forgot text-muted" href="#">Forgot password?</a> 
          <input type="submit" value="Login" className="loginbtn"  onClick={loginUser} />
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
      
      <h3>Login</h3>
      
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
       onClick={loginUser}
      
      >
        Login
      </button>

      <p className="container signup">
        Not a user <Link to="/signup">Signup</Link>
      </p>
     
    </div> */}




    </div>
    //</form>









  );
}

export default Login;
// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className="Login">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button block size="lg" type="submit" disabled={!validateForm()}>
//           Login
//         </Button>
//       </Form>
//     </div>
//   );
// }
