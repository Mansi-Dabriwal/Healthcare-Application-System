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
        {/* <TextField
          fullWidth
          label="Have you ever been in therapy before?"
          hintText="Have you ever been in therapy before?"
          onChange={handleChange("beenInTherapy")}
          defaultValue={values.beenInTherapy}
        /> */}
        <TextField
        fullWidth
          id="outlined-select-currency"
          select
          label="Have you ever been in therapy before?"
          value={values.beenInTherapy}
          onChange={handleChange("beenInTherapy")}
        >
          <MenuItem key="1" value="Yes">Yes</MenuItem>
          <MenuItem key="2" value="No">No</MenuItem>
        </TextField>
        <br />
        <TextField
        fullWidth
          label="What led you to consider therapy today?"
          hintText="What led you to consider therapy today?"
          onChange={handleChange("reasonForTherapy")}
          defaultValue={values.reasonForTherapy}
        />
        <br />
        {/* <TextField
        fullWidth
          label="What are your expectations from therapist?"
          hintText="What are your exp from therapist?"
          onChange={handleChange("therapistPreference")}
          defaultValue={values.therapistPreference}
        /> */}
        <TextField
        fullWidth
          id="outlined-select-currency"
          select
          label="What are your exp from therapist?"
          value={values.therapistPreference}
          onChange={handleChange("therapistPreference")}
          style={{textAlign: "left"}}
        >
          <MenuItem key="1" value="Male Therapist">Male Therapist</MenuItem>
          <MenuItem key="2" value="Female Therapist">Female Therapist</MenuItem>
          <MenuItem key="3" value="Religious Therapist">Religious Therapist</MenuItem>
          <MenuItem key="4" value="Therapist from LGBTQ+ Community">Therapist from LGBTQ+ Community</MenuItem>
        </TextField>
        <br />
        <TextField
        fullWidth
          label="How would you rate your current physical health? (On a scale of 1-5)"
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
