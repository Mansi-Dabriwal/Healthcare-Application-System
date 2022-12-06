import React, { Component, Fragment } from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography
} from "@material-ui/core";
import './FormStyles.css';

export class FormStepThree extends Component {
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
          label="How would you rate your current eating habits?"
          hintText="How would you rate your current eating habits?"
          onChange={handleChange("eatingHabits")}
          defaultValue={values.eatingHabits}
        />
        <br />
        {/* <TextField
        fullWidth
          label="Are you experience overwhelming grief, sadness or depression?"
          hintText="Are you currently experience overwhelming grief, sadness or depression?"
          onChange={handleChange("reasonForTherapy")}
          defaultValue={values.reasonForTherapy}
        />
        <br /> */}
        <TextField
        fullWidth
          label="Are you experiencing touble falling asleep, or sleeping too much?"
          hintText="How often have you been bothered by touble falling asleep, staying asleep, or sleeping too much?"
          onChange={handleChange("sleepProblems")}
          defaultValue={values.sleepProblems}
        />
        <br />
        <TextField
        fullWidth
          label="Are you experiencing Feeling tired or having little energy?"
          hintText="How often have you been bothered by Feeling tired or having little energy?"
          onChange={handleChange("currentlyTired")}
          defaultValue={values.currentlyTired}
        />
        <br />
        <br />
        <div style={{float: "right"}}>
        <Button
          style={{
            background: "#ffffff",
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

export default FormStepThree;
