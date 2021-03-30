import "./Products.css";
import React from "react";
import Counter from "./Counter";

class Products extends React.Component {
  render() {
    return (
      <div class="d">
        {/* <h3>Flower Details</h3> */}

        <img
          class="img-circle"
          src={this.props.imageurl}
          width="200"
          height="200"
        />
        <p>
          Title:<b>{this.props.title}</b>{" "}
        </p>
        <p>
          <b>Description: {this.props.description}</b>
        </p>
        <p>₹ {this.props.unitprice}</p>
        {/* <p><b>Quantity: {this.props.quantity}</b></p> */}
        <p>
          <b>Likes: {this.props.likes}</b>
        </p>

        <Counter count={this.props.likes}></Counter>
      </div>
    );
  }
}

export default Products;
