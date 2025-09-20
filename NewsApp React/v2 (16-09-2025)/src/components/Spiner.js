import React, { Component } from "react";
import loading from "../Resources/Loading.gif";

export class Spiner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="Loading..." />
      </div>
    );
  }
}

export default Spiner;
