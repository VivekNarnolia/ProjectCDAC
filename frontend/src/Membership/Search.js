import React, { useState } from "react";
import "./SearchFeature.css";
import { Table } from "react-bootstrap";
import Axios from "axios";
import Header from "../Header/Header"

function Search() {

  //debugger;
  const [searchList, setSearchList] = useState([]);
  
  async function search(name) {
    Axios.get("http://localhost:3333/search?key=" + name).then((response) => {
      console.log(response);
      setSearchList(response.data);
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
      <Header></Header>
          {/* className="col-sm-6 offset-sm-3" */}
        <h3>Search Products</h3>
        <input
          type="text"
          className="form-control"
          placeholder="Search For Products"
          name="search"
          onChange={(event) => search(event.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={search}
        >
          <i class="fa fa-search"></i>
        </button>
        {/* <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <td>Name</td>
            <td>Category</td>
            <td>Price</td>
            <td>Image</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody> */}
          {/* { */}
          {searchList.map((item) => (
        <div>
          <div class="col-sm-3 col-md-3">
            <div class="thumbnail ">
              <img
                src={"~/../images/" + item.file}
                alt="..."
                class="img-responsive"
              />
              <div class="caption">
                <h3>{item.name}</h3>
                <p class="description">{item.description}</p>
                <div class="clearfix">
                  <div class="btn btn-success pull-left">₹ {item.price}</div>
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

export default Search;
