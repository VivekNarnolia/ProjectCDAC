import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import "./Slidebar.css";

const Slidebar = () => {
  return (<div className="container" > 
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <div className="carousel-inner">
      <div className="item active">
        <img src="~/../../images/slider1.jpg" alt="Los Angeles" class="slider"/>
      </div>

      <div className="item">
        <img src="~/../../images/slider2.jpg" alt="Chicago" class="slider"/>
      </div>
    
      <div className="item">
        <img src="~/../../images/slider3.jpg" alt="New york" class="slider"/>
      </div>
    </div>

    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
  )
};

export default Slidebar;