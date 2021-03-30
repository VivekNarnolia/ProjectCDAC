import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import "./ProductCatalog/Products.js";
import List from "./ProductCatalog/List";
import Login from "./Membership/Login";
import Signup from "./Membership/Signup";
import Admin from "./Membership/Admin";
import Search from "./Membership/Search";
import Slidebar from "./Slidebar/Slidebar";
import AddProduct from "./ProductCatalog/AddProduct";
import GetProduct from "./ProductCatalog/GetProduct";
import UpdateProduct from "./ProductCatalog/UpdateProduct";

import Dashboard from "./ProductCatalog/Dashboard";
import { Navbar, nav, NavDropdown } from "react-bootstrap";
import AboutUs from "./Footer/AboutUs";
import ContactUs from "./Footer/ContactUs";
import ProductList from "./ProductCatalog/ProductList";
import Cart from "./ShoppingCart/Cart";
import Payment from "./ShoppingCart/Payment";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import UserLoginScreen from "./Membership/UserLoginScreen";
import AdminLoginScreen from "./Membership/AdminLoginScreen";
import Category from "./ProductCategory/Category";
import Success from "./ShoppingCart/Success";
//import "bootstrap/dist/bootstrap.min.css";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return <BasicRouting></BasicRouting>;
}
export default App;

function BasicRouting() {

 

  return (
    <div>
      <Router>
         
        
<div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
            <Route exact path="/flowers">
              {" "}
              <ProductList />{" "}
            </Route>
            <Route exact path="/catalog">
              <Catalog />
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/contact">
              <ContactUs />
            </Route>
            <Route exact path="/addproduct">
              <AddProduct />
            </Route>
            <Route exact path="/getproduct">
              <GetProduct />
            </Route>
            <Route exact path="/updateProduct/:id">
              <UpdateProduct />
            </Route>
            <Route exact path="/category/:category">
              <Category />
            </Route>

            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>

            <Route exact path="/userloginscreen/:role">
              <UserLoginScreen />
            </Route>
            <Route exact path="/adminloginscreen/:role">
              <AdminLoginScreen />
            </Route>
            <Route exact path="/payment">
              <Payment />
            </Route>
            <Route exact path="/success">
              <Success />
            </Route>
            {/* <Route exact path="/adminloginscreen">
              <AdminLoginscreen />
            </Route> */}

          </Switch>
        </div>
      </Router>
    </div>
  );
}
function Home() {
// var user = JSON.parse(localStorage.getItem("user-info"));
// alert(""+user)

  
  return (
    <div>
      
      <div>
      <Header></Header> 
        {/* <Slidebar></Slidebar> */}
      </div>
      <b>
        <hr></hr>
      </b>

      <ProductList></ProductList>
      <b>
        <hr></hr>
      </b>
      {/* <Footer></Footer> */}
    </div>
  );
}

function Catalog() {
  return <div></div>;
}
