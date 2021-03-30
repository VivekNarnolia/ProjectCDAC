import "./payment.css";

import React, { useState, useEffect } from "react";
import { withRouter,useHistory,Link } from "react-router-dom";
import Header from "../Header/Header";
function Cart() {
    const [data, setData] = useState([]);
    useEffect(async () => {
      let result = await fetch("http://localhost:3333/cart");
      result = await result.json();
     console.log(result);
      setData(result);
      console.log(data);
    }, []);
  

  return (

<div>
<Header></Header>


{/* <div>
<div class="container">           
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Image</th>
        <th>Price</th>

      </tr>
    </thead>
    <tbody>
    {data.products.map((item) => 
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.qty}</td>
        <td>{item.file}</td>
        <td>{item.price}</td>


      </tr>
    )}
    </tbody>
  </table>
</div>
</div> */}









    <div>
    {data.length!=0?data.products.map((item) => (


      <div class="row">
      
        <div class="col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3">
          <ul class="list-group">
            <li class="list-group-item">
            
            <img width="150" height="250"
                src={"~/../../images/" + item.item[0].file}
                alt="..."
                class="img-responsive"
              />
            
            
            
            <div class="btn btn-success pull-right">{item.qty}</div>
              {/* <span class="badge ">{item.qty}</span> */}
            <div class="btn btn-success pull-left">Name: {item.item[0].name}</div>
              {/* <strong>{item.item[0].name}</strong> */}
            <div class="btn btn-success pull-left">Price: ₹ {item.price}</div>

              {/* <span class="labe1 label-success">₹ {item.price}</span> */}
              <div class="btn-group">
                <button
                  class="btn btn-success pull-left btn-primary dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  Action <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#">Reduce by 1</a>
                  </li>
                  <li>
                    <a href="#">Remove All</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      )):<div class="row">
      <div class="col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3">
        <h2>No Items In Cart</h2>
      </div>
      </div>}

      <div class="row">
        <div class="col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3">
        <div class="btn btn-success pull-left">Total Price: {data.totalPrice}</div>

          {/* <strong>Total: {data.totalPrice}</strong> */}
        </div>
      </div><hr></hr>
      <div class="row">
        <div class="col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3">
          <Link to="/payment"><button class="btn btn-success"> Place Order</button></Link>
        </div>
      </div>
      


    </div>

</div>
  );
}

export default withRouter(Cart);
