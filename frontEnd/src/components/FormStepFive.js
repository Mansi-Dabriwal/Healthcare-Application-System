import React, { Component, Fragment } from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography,
  MenuItem
} from "@material-ui/core";
import './FormStyles.css';

export class FormStepFive extends Component {
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
          id="outlined-select-currency"
          select
          label="Are you taking any medication?"
          value={values.medicationHistory}
          onChange={handleChange("medicationHistory")}
        >
          <MenuItem key="1" value="Yes">Yes</MenuItem>
          <MenuItem key="2" value="No">No</MenuItem>
        </TextField>
        {/* <TextField
        fullWidth
          label="Are you taking any medication?"
          hintText="Are you taking any medication?"
          onChange={handleChange("medicationHistory")}
          defaultValue={values.medicationHistory}
        /> */}
        <br />
        <TextField
        fullWidth
          id="outlined-select-currency"
          select
          label="Are you currently experiencing any chronic pain?"
          value={values.chronicPain}
          onChange={handleChange("chronicPain")}
        >
          <MenuItem key="1" value="Yes">Yes</MenuItem>
          <MenuItem key="2" value="No">No</MenuItem>
        </TextField>
        {/* <TextField
        fullWidth
          label="Are you currently experiencing any chronic pain?"
          hintText="Are you currently experiencing any chronic pain?"
          onChange={handleChange("chronicPain")}
          defaultValue={values.chronicPain}
        /> */}
        <br />
        <TextField
        fullWidth
          id="outlined-select-currency"
          select
          label="How would you rate your current financial status?"
          value={values.financialStatus}
          onChange={handleChange("financialStatus")}
        >
          <MenuItem key="1" value="Good">Good</MenuItem>
          <MenuItem key="2" value="Fair">Fair</MenuItem>
          <MenuItem key="3" value="Poor">Poor</MenuItem>
        </TextField>
        {/* <TextField
        fullWidth
          label="How would you rate your current financial status?"
          hintText="How would you rate your current financial status?"
          onChange={handleChange("financialStatus")}
          defaultValue={values.financialStatus}
        /> */}
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

export default FormStepFive;
