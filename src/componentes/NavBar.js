import React, { Component } from "react";
import '../stles/NavBar.css'; 

class NavBar extends Component {
  render() {
    return (
      <nav className="topnav">
        <a className="active" href="#home">NipFly</a>
        <a href="#news">Vuelos</a>
        <a href="#contact">Promociones</a>
        <a href="#about">hoteles</a>
    </nav>
    );
  }
}

export default NavBar;