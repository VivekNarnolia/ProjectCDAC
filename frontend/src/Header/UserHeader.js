import React, { Component } from "react";
import { Link,useHistory } from "react-router-dom";
import Cart from "../ShoppingCart/Cart";

function UserHeader() {
  const history=useHistory();
  //debugger;
  var user = localStorage.getItem("user-info");
 //alert(user)
 if( user==null)
 user={status:true,email:"admin"};
  else if(user.email==undefined)
  {

    user={status:true,email:"admin"};
  }
  else
  {
   
    user = JSON.parse(localStorage.getItem("user-info"));
  }
  //localStorage.setItem("user-info", JSON.stringify(user));
  
  //alert(user)
    //var user = JSON.parse(localStorage.getItem("user-info"));
    //alert(user)
   // if(user==null){user={status:true,email:"admin"};}
  // console.log("-----------xxxxxxxxxx---------");
  // console.log(user);
  // export default class Header extends Component {
  //   render() {
  function showcart() {
    // Axios.get("http://localhost:3333/search?key=" + name).then((response) => {
    //   console.log(response);
    //   setSearchList(response.data);
    // });

    alert("Hi");
  }


  function logout(){
    localStorage.clear();
    history.push('/');
  }



  return (
    <div>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">
            tulsi
            </a>
          </div>

          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul class="nav navbar-nav navbar-right">
              <li>
              <a class="navbar-brand">
              <Link to="/search">
                    <i class="fa fa-search"></i>
              </Link>
              </a>
                <a>
                  <i
                    class="fa fa-shopping-cart"
                    aria-hidden="true"
                    onClick={showcart}
                  ></i>{" "}
                  Shopping Cart
                  <span class="badge"></span>
                </a>
              </li>
              <li class="dropdown">
                {/* <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-list-alt" aria-hidden="true"></i> Product
                  Management <span class="caret"></span>
                </a> */}
                {/* <ul class="dropdown-menu">
                  <li>
                    <a>
                      <Link to="/getproduct">Show Product</Link>
                    </a>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <a>
                      <Link to="/addproduct">Add Product</Link>
                    </a>
                  </li>
                </ul> */}
              </li>

              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-list-alt" aria-hidden="true"></i> Product
                  Category <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#">Electronics</a>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <a href="#">Fashion</a>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <a href="#">Grocery</a>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <a href="#">Home</a>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-user" aria-hidden="true"></i> User
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a>
                      <Link to="/login">User Login</Link>
                    </a>
                  </li>
                  <li role="separator" class="divider"></li>
                  {/* <li>
                    <a>
                      <Link to="/admin">Admin Login</Link>
                    </a>
                  </li> */}
                  {localStorage.getItem("user-info")?
                  <div>
                  {/* <li role="separator" class="divider"></li> */}
                  <li>
                    <a onClick={logout}>Logout</a>
                  </li>
                  </div>
                   :null}
                </ul>
              </li>
                 
              <li>
                <div class="input-group">
                  <div class="form-outline">
                    <input
                      id="search-focus"
                      type="search"
                      id="form1"
                      class="form-control"
                    />
                  </div>
                </div>
              </li>
              <li>
                <button type="button" class="btn btn-primary">
                  <Link to="/search">
                    <i class="fa fa-search"></i>
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default UserHeader;
