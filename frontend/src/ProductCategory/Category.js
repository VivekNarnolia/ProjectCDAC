import React, { useEffect, useState } from "react";
import { withRouter,useHistory } from "react-router-dom";
import Header from "../Header/Header"
import {Link} from 'react-router-dom'
function Category(props) {
  debugger;
  //alert(props);
  //const history=useHistory();
  const [data, setData] = useState([]);

  useEffect(async () => {
    let result = await fetch("http://localhost:3333/category/"+props.match.params.category);
    result = await result.json();
    setData(result);
  
  },[props.match.params.category]);

  console.log("data", data);

  return (
    <div>
      <Header></Header>
      {data.map((item) => (
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
                  <a
                    href={"http://localhost:3333/add-to-cart/" + item.productid}
                    class="btn btn-success pull-right"
                    role="button"
                  >
                    Add To Cart
                  </a>

                  {/* <button class="btn btn-success pull-left" type="button" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i class="fa fa-edit"></i></button>
                                                  
                                                      <button  class="btn btn-danger rounded-0  pull-middle" type="button" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i class="fa fa-trash"></i></button>
                                                   */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
//export default Category;
export default withRouter(Category);
