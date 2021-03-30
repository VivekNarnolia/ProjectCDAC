import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withRouter,useHistory } from "react-router-dom";

function UpdateProduct(props) {
  debugger;
  const history=useHistory();

  //console.log("props",props.match.params.id);
  const [id, setId] = useState([]);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  //console.log(props);
  useEffect(async () => {
    let result = await fetch(
      "http://localhost:3333/getProduct/"+props.match.params.id);
    result = await result.json();
    debugger;
    console.log(result);
    setData(result);
     setName(result[0].name);
    setCategory(result[0].category);
     setPrice(result[0].price);
    setFile(result[0].file);
     setDescription(result[0].description);
     setId(props.match.params.id);

    // const formData=new FormData();
    // formData.append('name',name);
    // formData.append('category',category);
    // formData.append('price',price);
    // formData.append('file',file);
    // formData.append('description',description);
    // console.log("xxxxxxxxxxxxxxxx");
  }, []);



  async function editProduct(id) {

    const formData=new FormData();
    formData.append('name',name);
    formData.append('category',category);
    formData.append('price',price);
    formData.append('file',file);
    formData.append('description',description);
    console.log("xxxxxxxxxxxxxxxx");
    console.log(name,price);
    let result = await fetch(
      "http://localhost:3333/updateProduct/"+id+"?_method-PUT",{
      method:'PUT',
      body:formData
      });
      history.push('/getproduct');

    alert("Product "+name+" updated");
  }

  return (
    <div className="AddProduct">

      <h3>Update Products</h3>

      <div className="col-sm-6 offset-sm-3">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          defaultValue={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        /><br/><br/>
        <label>Category</label>
        <input
          type="text"
          // className="form-control"
          placeholder="category"
          defaultValue={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        /><br/><br/>
        <label>Price</label>
        <input
          type="text"
          // className="form-control"
          placeholder="price"
          defaultValue={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        /><br/><br/>
        <label>Upload Image</label>
        <input
          type="file"
          // className="form-control"
          placeholder="file"
          defaultValue={file}
          onChange={(event) => {
            setFile(event.target.files[0]["name"]);
          }}
        /><br/><br/>
        
        <img
                         width="200"
                         height="100"
                        src={"~/../../images/"+file}
                       
                      /><br/><br/>


                      
        <label>Product Description</label>
        <input
          type="text"
          className="form-control"
          placeholder="description"
          defaultValue={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        /><br/><br/>

        <button onClick={()=>editProduct(id)}>Update Product</button>
      </div>
    </div>
  );
}
export default withRouter(UpdateProduct);
