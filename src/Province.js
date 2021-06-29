import React, {Component} from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Province.css";

export default class Province extends Component {

  //Set selected province and generate response
  handlingOnClick = (e, provinceName) => {
    this.props.setProvince(provinceName);

    //Creating containers for "Latitud"
      const latImg = React.createElement(
          "div", 
          {className: "col-md-4 text-center bg-ic px-2 d-flex align-items-center"}, 
          React.createElement("img", {src: "latitude.svg", alt:"", width: "100px", className: "py-2"})
      );
      const latContent = React.createElement(
        "div", 
        {className: "col-md-8 text-center card-body m-3"}, 
        React.createElement(
          "h6", 
          {}, 
          "Latitud de " + provinceName + ": ",
          React.createElement("br",  {}),
          React.createElement("strong",  {}, this.props.lat)
        )
      );

      const latCard = React.createElement(
        "div",  
        {className:"card d-flex flex-row bg-body-card my-2"}, 
        latImg, latContent);


    //Creating containers for "Longitud"
      const longImg = React.createElement(
        "div", 
        {className: "col-md-4 text-center bg-ic px-2 d-flex align-items-center"}, 
        React.createElement("img", {src: "longitude.svg", alt:"", width: "100px"})
      );
      const longContent = React.createElement(
        "div", 
        {className: "col-md-8 text-center card-body m-3"}, 
        React.createElement(
          "h6", 
          {}, 
          "Longitud de " + provinceName + ": ",
          React.createElement("br",  {}),
          React.createElement("strong",  {}, this.props.long)
        )
      );

      const longCard = React.createElement(
        "div",  
        {className:"card d-flex flex-row bg-body-card my-2"}, 
        longImg, longContent);
      

    //Latitude and longitude container
    const latLong = React.createElement(
      "div",  
      {className:"d-lg-flex flex-row justify-content-between"}, 
      latCard, longCard);
    

    //Rendering container
    ReactDOM.render(latLong, document.getElementById("lat-long"));
  };


  render() {

    return (
      <button 
        type= "button" 
        className= "list-group-item list-group-item-action" 
        id= {this.props.provinceName} 
        onClick= {(e) => this.handlingOnClick(e, this.props.provinceName)}>{this.props.provinceName}
      </button>
    );
  };
};