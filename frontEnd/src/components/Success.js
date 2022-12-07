import React, { Component, Fragment } from "react";
import {
  Button,
} from "@material-ui/core";
import './FormStyles.css';
// import { Link } from 'react-router-dom';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  constructor() {
    super();
    this.state = {
      disabled: false
    };
  }


  render() {
    console.log(this.props.values)
    const { values, handleChange } = this.props;
    return (
      <div className='' style={{marginTop: "100px"}}>
      <h4 style={{fontSize: "2rem"}}>Congrats, You have successfully completed the questionnaire</h4>
      <p style={{fontSize: "1.5rem"}}>Continue to Sign up page</p>
      <Button
        style={{
          background: "#3E78B2",
          color: "#FFFFFF"
        }}
        label="Continue"
        onClick={this.continue}
      >
        {" "}
        Sign Up
        {/* <Link to="/patientSignUp">Submit & Sign Up</Link> */}
      </Button>
  </div>
    );
  }
}

export default Success;
