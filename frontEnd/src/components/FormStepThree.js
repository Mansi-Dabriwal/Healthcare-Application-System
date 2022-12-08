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
          id="outlined-select-currency"
          select
          label="How would you rate your current eating habits?"
          value={values.eatingHabits}
          onChange={handleChange("eatingHabits")}
        >
          <MenuItem key="1" value="Good">Good</MenuItem>
          <MenuItem key="2" value="Fair">Fair</MenuItem>
          <MenuItem key="3" value="Poor">Poor</MenuItem>
        </TextField>
        {/* <TextField
        fullWidth
          label="How would you rate your current eating habits?"
          hintText="How would you rate your current eating habits?"
          onChange={handleChange("eatingHabits")}
          defaultValue={values.eatingHabits}
        /> */}
        <br />
        <TextField
        fullWidth
          id="outlined-select-currency"
          select
          label="Are you experiencing touble falling asleep, or sleeping too much?"
          value={values.sleepProblems}
          onChange={handleChange("sleepProblems")}
        >
          <MenuItem key="1" value="Yes">Yes</MenuItem>
          <MenuItem key="2" value="No">No</MenuItem>
          <MenuItem key="3" value="Sometimes">Sometimes</MenuItem>
        </TextField>
        {/* <TextField
        fullWidth
          label="Are you experiencing touble falling asleep, or sleeping too much?"
          hintText="How often have you been bothered by touble falling asleep, staying asleep, or sleeping too much?"
          onChange={handleChange("sleepProblems")}
          defaultValue={values.sleepProblems}
        /> */}
        <br />
        <TextField
        fullWidth
          id="outlined-select-currency"
          select
          label="Are you experiencing Feeling tired or having little energy?"
          value={values.currentlyTired}
          onChange={handleChange("currentlyTired")}
        >
          <MenuItem key="1" value="Yes">Yes</MenuItem>
          <MenuItem key="2" value="No">No</MenuItem>
          <MenuItem key="3" value="Sometimes">Sometimes</MenuItem>
        </TextField>
        {/* <TextField
        fullWidth
          label="Are you experiencing Feeling tired or having little energy?"
          hintText="How often have you been bothered by Feeling tired or having little energy?"
          onChange={handleChange("currentlyTired")}
          defaultValue={values.currentlyTired}
        /> */}
        <br/>
        <TextField
        fullWidth
          id="outlined-select-currency"
          select
          label="Are you experiencing Feeling depressed?"
          value={values.currentlyDepressed}
          onChange={handleChange("currentlyDepressed")}
        >
          <MenuItem key="1" value="Yes">Yes</MenuItem>
          <MenuItem key="2" value="No">No</MenuItem>
          <MenuItem key="3" value="Sometimes">Sometimes</MenuItem>
        </TextField>
        {/* <TextField
        fullWidth
        label="Are you experiencing Feeling depressed?"
        hintText="Are you experiencing Feeling depressed"
        onChange={handleChange("currentlyDepressed")}
        defaultValue={values.currentlyDepressed}
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

export default FormStepThree;
