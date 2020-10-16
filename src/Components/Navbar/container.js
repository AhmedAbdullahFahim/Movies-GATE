import React, { Component } from "react"
import Header from "./view"

class NavBar extends Component{

    filter = (category) => {
        this.props.filter(category)
    }

    render(){
        return(
           <Header
              filter = {this.filter}
           /> 
        );
    }
}

export default NavBar