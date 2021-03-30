import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table } from "react-bootstrap";
import './GetProduct.css';
import {Link} from 'react-router-dom'

import AdminHeader from "../Header/AdminHeader"


function GetProduct() {
  const [productList, setProductList] = useState([]);
  //async function getProduct() {
    // Axios.get("http://localhost:3333/getProduct").then((response) => {
    //   console.log(response);
    //   setProductList(response.data);
    //   console.log(productList)
    // });
  //}
  useEffect(() => {
    getData();
  }, []);
    async function deleteOperation(productid){
      let result=await fetch("http://localhost:3333/deleteProduct/"+productid,{
        method:'DELETE'
      });
      result=await result.json();
      console.log(result);
      getData();
      (alert("Deleted"))
    }
    async function getData(){
      let result = await fetch("http://localhost:3333/getProduct");
      result = await result.json();
      setProductList(result);
      
    }
//   return (


//     <div className="GetProduct">


//       {/* <button onClick={getProduct}>Show Products</button> */}






      
//       <Table striped bordered hover variant="dark">
//         <thead>
//         <tr>
//           <th>Id</th>
//           <th>Name</th>
//           <th>Category</th>
//           <th>Price</th>
//           <th>Image</th>
//           <th>Description</th>
//           <th>Operations</th>
//         </tr>
//         </thead>
//         <tbody>
//         {productList.map((val, key) => {
          
          
//           return (
            
//             // <div className="product">
//               <tr>
//                 <td>{val.productid}</td>
//                 <td>{val.name}</td>
//                 <td>{val.category}</td>
//                 <td>{val.price}</td>
//                 <img
//                 width="200"
//                 height="100"
//                         // style={{ width: 100 }}
//                         //src={"://localhohttpst:3333/" + val.file}
//                         src={"~/../images/"+val.file}
//                       />
                
//                 <td>{val.description}</td>
                
//                 <td>
//                                             {/* <!-- Call to action buttons --> */}
//                                             <ul class="list-inline m-0">
//                                                 {/* <li class="list-inline-item">
//                                                     <button class="btn btn-primary btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add"><i class="fa fa-table"></i></button>
//                                                 </li> */}
//                                                 <li class="list-inline-item">
//                                                     <Link to={"updateProduct/"+val.productid}><button class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i class="fa fa-edit"></i></button></Link>
//                                                 </li>
//                                                 <li class="list-inline-item">
//                                                     <button onClick={()=>deleteOperation(val.productid)} class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i class="fa fa-trash"></i></button>
//                                                 </li>
//                                             </ul>
//                                         </td>



//               </tr>
//             // </div>
//           );
//         })}
//         </tbody>
//       </Table>
//     </div>
//   );
// }




return (
  <div>
    
    {productList.map((item, key)  => (
      <div>
        <div class="col-sm-3 col-md-3">
          <div class="thumbnail">
            <img
              src={"~/../../images/" + item.file}
              alt="..."
              class="img-responsive"
            />
            <div class="caption">
              <h3>{item.name}</h3>
              <p class="description">{item.description}</p>
              <div class="clearfix">
                <div class="price pull-left">₹ {item.price}</div>
                
                
                                                 <ul class="list-inline m-0">
                                              
                                                <li class="list-inline-item">
                                                    <Link to={"updateProduct/"+item.productid}><button class="btn btn-success btn-sm rounded-0 pull-right" type="button" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i class="fa fa-edit"></i></button></Link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <button onClick={()=>deleteOperation(item.productid)} class="btn btn-danger btn-sm rounded-0 pull-right" type="button" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i class="fa fa-trash"></i></button>
                                                </li>
                                            </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
}
export default GetProduct;
