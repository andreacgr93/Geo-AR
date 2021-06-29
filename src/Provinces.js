import React, {Component} from "react";
import Province from "./Province";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

export default class Provinces extends Component{
    constructor(props){
      super(props);
      this.state = {
        provinces: props.provinces,
      };
    };

    setProvince = (provinceName) => {
        this.props.setProvince(provinceName);
    };
    
    render(){
        //Generate options list filtered according to search
        let provincesList = <option>Seleccione una provincia</option>;
        if (this.props.setProvince){
            if (this.state.provinces) {
                provincesList = this.state.provinces.provincias.map((province, index) => {    
                    if (province.nombre.toUpperCase().indexOf(this.props.searchProvince.toUpperCase())===0){
                        return (
                            <Province  
                                provinceName={province.nombre} 
                                key={index}
                                setProvince={this.setProvince}
                                lat={province.centroide.lat}
                                long={province.centroide.lon}
                            />
                        );        
                    }
                    else{
                        return null;
                    }
                    
                });
            };
        };

        return(
            <div className="list-group">
                {provincesList}
            </div>
        );
    };

};
