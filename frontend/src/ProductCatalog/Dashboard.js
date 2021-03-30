import React, { Component,useState } from 'react'
import AddProduct from './AddProduct'
import GetProduct from './GetProduct'
import UpdateProduct from './UpdateProduct'
import Axios from "axios";

function Dashboard() {
    const [dashboard, setDashboard] = useState([]);
    async function dash(name) {
    Axios.get("http://localhost:3333/dashboard").then((response) => {
      console.log(response);
      setDashboard(response.data);
    });
    //     console.warn(name);
    //     let result=fetch("http://localhost:3333/search?key="+name);
    //    // result=await result.json;
    //     console.warn(result);
    //     setData(result);
    //     console.warn(data);
  }
   
        return (
            <div>
                <GetProduct></GetProduct>
                <AddProduct></AddProduct>
                {/* <UpdateProduct></UpdateProduct> */}
            </div>
        )
    
}
export default Dashboard;