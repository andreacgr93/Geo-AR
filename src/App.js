import React, {Component} from "react";
import Provinces from "./Provinces";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchProvince: "",
      provinces: []
    };
  };

  //API consuming, "provinces" state fill
  componentDidMount(){
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
      .then(response => {return response.json();})
      .then(provincesJson => this.setState({provinces: provincesJson}))
  };

  //"searchProvince" state update when there is a input change 
  onChange = (e) => {
    const provinceName = e.target.value;
    this.setState({searchProvince: provinceName});
  };
  
  //Set province
  setProvince = (provinceName) => {
    document.getElementById("province").value = provinceName;
    this.setState({searchProvince: ""});
  };


  render() {
    //Provinces component when search exists
    let provinces = "";
    if (this.state.searchProvince) {
        provinces = <Provinces searchProvince={this.state.searchProvince} 
                      setProvince={this.setProvince} 
                      provinces={this.state.provinces} />
    };

    return(
      <div className="container-fluid p-0" id="container-body">
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container-fluid">

            <a className="navbar-brand" href="ind.html">
              <img src="geoArLogo.png" alt="GeoAr" width="90px" className="mx-3"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarItems" aria-controls="navbarItems" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarItems">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <a className="nav-link" href="ind.html">Inicio</a>
                  <a className="nav-link" href="us.html">Nosotros</a>
                  <a className="nav-link active" href="index.html">Servicios</a>
                  <a className="nav-link" href="contact.html">Contacto</a>
              </ul>
              <span className="">
                <a className="mx-3" href="notificatios.html"><i className="fa fa-bell fa-lg text-light"></i></a>
                <a className="mx-3" href="user.html"><i className="fa fa-user-circle fa-lg text-light"></i></a>
                <a className="mx-3" href="https://github.com/andreacgr93"><i className="fa fa-github fa-lg text-light"></i></a>
              </span>
            </div>

          </div>
        </nav>


        <div id="main-content">

        <div className="col-md-8 mx-auto mt-4">

          <div className="form-group bg-light p-3 rounded">

            <div className="d-flex justify-content-center">
              <h4 className="mt-3 mb-0 text-center"><strong>Coordenadas de las provincias en Argentina</strong></h4>
              <span><i className="fa fa-map-marker fa-3x mx-3 text-danger" id="marker"></i></span>
            </div>
            
            <div className="col-md-10 mx-auto mb-5"><hr/></div>

            <i className="fa fa-location-arrow fa-2x mx-3"></i>
            <label htmlFor="province" className="pb-3">Encuentra la latitud y longitud del lugar que buscas</label>

            <div className="input-group">
              <input 
                type="text" 
                className="form-control" 
                id="province" 
                placeholder="Escribe el nombre de una provincia..."
                onChange={this.onChange} 
              />
              <span className="input-group-text">
                <i className="fa fa-search"></i>
              </span>
            </div>

            <div className="row">
              <div className="col-md-12">
                {provinces}
              </div>
            </div>

          </div>

          <br/>

          <div id="lat-long"></div>

        </div>

        </div>
        
        
        <footer className="bg-dark py-3 fixed-bottom d-flex justify-content-evenly">

          <span>
            <a className="m-3" href="instagram.com/geoar" target="_blank">
              <i className="fa fa-instagram fa-lg text-light"></i>
            </a>
            <a className="m-3" href="facebook.com/geoar" target="_blank">
              <i className="fa fa-facebook-square fa-lg text-light"></i>
            </a>
            <a className="m-3" href="telegram.com/geoar" target="_blank">
              <i className="fa fa-telegram fa-lg text-light"></i>
            </a>
          </span>

          <small className="text-muted">© Copyright GeoAR 2021. Todos los derechos reservados.</small>

        </footer>
      </div>
    );
  };
};

export default App;