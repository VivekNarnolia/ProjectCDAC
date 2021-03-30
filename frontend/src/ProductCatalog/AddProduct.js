import React, { useState, useEffect } from "react";
//import './AddProduct.css'
import Axios from "axios";
import Header from "../Header/Header"

function AddProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  debugger;
  // alert(name);
  // alert(file);
  async function addProduct() {
    console.log(name + category + price);
    Axios.post("http://localhost:3333/addProduct", {
      name: name,
      category: category,
      price: price,
      file: file,
      description: description,
    }).then(() => {
      console.log("success");
    });

    // console.warn(name,file,price,description);
    // const formData=new FormData();
    // formData.append('name',name);
    // formData.append('category',category);
    // formData.append('price',price);
    // formData.append('file',file);
    // formData.append('description',description);
    // let result=await fetch("http://localhost:3333/addproduct",{
    //     method:'POST',
    //     body:formData
    // });

    console.log(file);
    alert("Data has been inserted");
  }

  return (
    <div class="form-horizontal">
                <Header></Header>

      <legend>Add Products</legend>
      <div class="form-group">
        <label class="col-md-4 control-label" for="name">
          NAME
        </label>
        <div class="col-md-4">
          <input
            id="name"
            name="name"
            placeholder="NAME"
            class="form-control input-md"
            required=""
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
      </div>

      <div class="form-group">
        <label class="col-md-4 control-label" for="category">
        CATEGORY
        </label>
        <div class="col-md-4">
          <input
            id="category"
            name="category"
            placeholder="CATEGORY"
            class="form-control input-md"
            required=""
            type="text"
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          />
        </div>
      </div>


      <div class="form-group">
        <label class="col-md-4 control-label" for="price">
        PRICE
        </label>
        <div class="col-md-4">
          <input
            id="price"
            name="price"
            placeholder="PRICE"
            class="form-control input-md"
            required=""
            type="text"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </div>
      </div>

      <div class="form-group">
        <label class="col-md-4 control-label" for="upload_image">
        Upload Image
        </label>
        <div class="col-md-4">
          <input
            id="upload_image"
            name="upload_image"
            placeholder="FILE"
            class="form-control input-md"
            required=""
            type="file"
            onChange={(event) => {
              setFile(event.target.files[0]["name"]);
            }}
          />
        </div>
      </div>

      <div class="form-group">
        <label class="col-md-4 control-label" for="description">
        DESCRIPTION
        </label>
        <div class="col-md-4">
          <input
            id="description"
            name="description"
            placeholder="DESCRIPTION"
            class="form-control input-md"
            required=""
            type="text"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>
      </div>

      <div class="form-group">
      <label class="col-md-4 control-label" for="singlebutton"></label>
  <div class="col-md-4">
    <button id="add" name="add" class=" col-md-4  btn btn-primary" onClick={addProduct}>Add Product</button>
  </div>
  </div>

    
    </div>
  );
}
export default AddProduct;
