import React, { Component,useState } from "react";
import { Link,useHistory } from "react-router-dom";
import Cart from "./../ShoppingCart/Cart";
import Axios from "axios";
import Slidebar from "./../Slidebar/Slidebar";
import './Header.css';
function Header(props) {
  
  const history=useHistory();
  var role = localStorage.getItem("user-role");
  var user = localStorage.getItem("user-info");
  


 
 if( user==null)
 {

 user={status:true,email:"admin",role:""};
 }
  else if(user.email==undefined)
  {
    //alert("already undefined");
    user={status:true,email:"admin",role:""};
  }
  else
  {
  //  alert("set")
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

   
  }

  //debugger;
  const [searchList, setSearchList] = useState([]);
  //const history = useHistory();
// function showcategoryproduct(category){
//   alert(category);
//   Axios.get("http://localhost:3333/category/" + category).then((response) => {
   
//     //console.log(response);
//     setSearchList(response.data);
    
//   });
//  // debugger;
//   //history.push("/category/"+category);
// }
  
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
            {/* <img src="~/../images/download.jpg"></img> */}
            <a class="navbar-brand" href="/"> 
              Tulsi Shopping
            </a>
           
          </div>

          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul class="nav navbar-nav navbar-right">
              <li>
              <a class="navbar-brand">
              {/* <Link to="/search">
                    <i class="fa fa-search"></i>
              </Link> */}
              </a>
              </li>
              { role!="admin"?
              <li>
              <Link to={"/cart"}>
                <a>
                  <i
                    class="fa fa-shopping-cart"
                    aria-hidden="true"
                    // onClick={showcart}
                  ></i>{" "}
                  Shopping Cart
                  <span class="badge"></span>
                </a></Link>
              </li>:null}



               { role=="admin"?
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
                  Management <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a>
                      <Link to="/adminloginscreen/admin">Show Product</Link>
                    </a>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <a>
                      <Link to="/addproduct">Add Product</Link>
                    </a>
                  </li>
                </ul>
              </li>
:null} 





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
                  <Link to={"/category/Electronic"}><a>Electronic</a></Link>
                  
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                  <Link to={"/category/Fashion"}><a>Fashion</a></Link>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                  <Link to={"/category/Grocery"}><a>Grocery</a></Link>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                  <Link to={"/category/Home"}><a>Home</a></Link>
                  </li>
                  <li role="separator" class="divider"></li>

                  <li>
                  <Link to={"/category/Car Accessories"}><a>Car Accessories</a></Link>
                
                  </li>
                  <li role="separator" class="divider"></li>

                  <li>
                  <Link to={"/category/Mobile Accessories"}><a>Mobile Accessories</a></Link>
                  
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
                  <i class="fa fa-user" aria-hidden="true"></i> {role}
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                {role==null?
                  <li>
                    <a>
                      <Link to="/login">User Login</Link>
                    </a>
                  </li>:null}
                  {/* <li role="separator" class="divider"></li> */}
                   {role==null?
                  <li>
                    <a>
                      <Link to="/admin">Admin Login</Link>
                    </a>
                  </li>
                  
                  
                  :null}
                   {role=="admin" || role=="user"?
                  <div>
                  {/* <li role="separator" class="divider"></li> */}
                  <li>
                    <a onClick={logout} style={{cursor:'pointer'}}>Logout</a>
                  </li></div>
                  :null}
                </ul>
              </li>

              <li>
              <a class="" aria-hidden="true">
              <Link to="/signup">
                    Signup
                  </Link>
              </a>
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
      <Slidebar></Slidebar>
    </div>
  );
}
export default Header;
