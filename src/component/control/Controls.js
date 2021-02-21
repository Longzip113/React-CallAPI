import React, { Component } from "react";
import { Link } from "react-router-dom";

class Controls extends Component {
  render() {
    return (
      <Link to="/products/add" className="btn btn-info mb-10">
        Add Product
      </Link>
    );
  }
}

export default Controls;
