import Footer from "../Footer/Footer";
import GetProduct from "../ProductCatalog/GetProduct";
import UserHeader from "../Header/UserHeader"
import Header from "../Header/Header"
import AdminHeader from "../Header/AdminHeader"
import { withRouter,useHistory } from "react-router-dom";
function AdminLoginScreen(props){

    var role=props.match.params.role;
localStorage.setItem("user-role",role);





   // alert(localStorage.getItem("user-info"))

    return(
        <div>
            {/* <h1>AdminLoginscreen</h1> */}
            <Header></Header>
            <hr></hr>
            {/* <AdminHeader></AdminHeader> */}
            <GetProduct></GetProduct>
            <hr></hr>
            {/* <Footer></Footer> */}
        </div>
    );
}

export default withRouter(AdminLoginScreen);