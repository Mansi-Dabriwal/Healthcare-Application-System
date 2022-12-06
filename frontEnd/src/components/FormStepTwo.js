import React, { Component, Fragment } from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography
} from "@material-ui/core";
import './FormStyles.css';

export class FormStepTwo extends Component {
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
          label="Have you ever been in therapy before?"
          hintText="Have you ever been in therapy before?"
          onChange={handleChange("beenInTherapy")}
          defaultValue={values.beenInTherapy}
        />
        <br />
        <TextField
        fullWidth
          label="What led you to consider therapy today?"
          hintText="What led you to consider therapy today?"
          onChange={handleChange("reasonForTherapy")}
          defaultValue={values.reasonForTherapy}
        />
        <br />
        <TextField
        fullWidth
          label="What are your exp from therapist?"
          hintText="What are your exp from therapist?"
          onChange={handleChange("therapistPreference")}
          defaultValue={values.therapistPreference}
        />
        <br />
        <TextField
        fullWidth
          label="How would you rate your current physical health?"
          hintText="How would you rate your current physical health?"
          onChange={handleChange("rateHealth")}
          defaultValue={values.rateHealth}
        />
        <br />
        <br />
        <div style={{float: "right"}}>
        <Button
          style={{
            background: "#ffffff",
            color: "#000000",
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

export default FormStepTwo;
