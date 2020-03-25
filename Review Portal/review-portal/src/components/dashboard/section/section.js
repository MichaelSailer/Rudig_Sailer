import React, { Component } from "react";
import classes from "./section.module.css";

class Sections extends Component {
  state = { username: "" };

  changeState = () => {
    this.setState({ username: "Michael" });
  };

  componentDidMount() {
    // Hier kommt Axios Requests

    this.changeState();
  }

  render() {
    return (
      <div className={classes.section}>
        <h1>{this.state.username}</h1>
      </div>
    );
  }
}

export default Sections;
