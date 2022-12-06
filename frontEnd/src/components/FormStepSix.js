import React, { Component, Fragment } from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography
} from "@material-ui/core";
import './FormStyles.css';

export class FormStepSix extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  constructor() {
    super();
    this.state = {
      disabled: false
    };
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <Fragment>
        <div style={{padding: "50px",borderRadius: "25px", width: "600px"}}>
        <TextField
        fullWidth
          label="Which country are you in?"
          hintText="Which country are you in?"
          onChange={handleChange("country")}
          defaultValue={values.country}
        />
        <br />
        <TextField
        fullWidth
          label="Which state are you in?"
          hintText="Which state are you in?"
          onChange={handleChange("state")}
          defaultValue={values.state}
        />
        <br />
        <TextField
        fullWidth
          label="What is your preferred language?"
          hintText="What is your preferred language?"
          onChange={handleChange("language")}
          defaultValue={values.language}
        />
        <br />
        <br />
        <div style={{float: "right"}}>
        <Button
          style={{
            background: "#fff",
            color: "#000",
            marginRight: "1em"
          }}
          label="Back"
          onClick={this.back}
        >
          Back
        </Button>
        <Button
          style={{
            background: "#3E78B2",
            color: "#FFFFFF"
          }}
          label="Continue"
          onClick={this.continue}
        >
          {" "}
          Continue
        </Button>
        </div>
        </div>
      </Fragment>
    );
  }
}

export default FormStepSix;
