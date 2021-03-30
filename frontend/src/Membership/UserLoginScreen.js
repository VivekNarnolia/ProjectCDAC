import Footer from "../Footer/Footer";
import ProductList from "../ProductCatalog/ProductList";
import UserHeader from "../Header/UserHeader"
import Header from "../Header/Header"
import { withRouter,useHistory } from "react-router-dom";
function UserLoginScreen(props){
    debugger;
var role=props.match.params.role;
localStorage.setItem("user-role",role);

   // alert(localStorage.getItem("user-info"))

    return(
        <div>
            {/* <h1>Loginscreen</h1> */}
            <Header></Header>
            <hr></hr>
            {/* <UserHeader></UserHeader> */}
            <ProductList></ProductList>
            <hr></hr>
            {/* <Footer></Footer> */}
        </div>
    );
}

export default withRouter(UserLoginScreen);