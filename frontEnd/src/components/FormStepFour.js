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

export class FormStepFour extends Component {
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
          label="How often have you been bothered by Poor appetite or overeating?"
          value={values.poorAppetiteOrOvereating}
          onChange={handleChange("poorAppetiteOrOvereating")}
        >
          <MenuItem key="1" value="Very Often">Very Often</MenuItem>
          <MenuItem key="2" value="Sometimes">Sometimes</MenuItem>
          <MenuItem key="3" value="Never">Never</MenuItem>
        </TextField>
        {/* <TextField
        fullWidth
          label="How often have you been bothered by Poor appetite or overeating?"
          hintText="How often have you been bothered by Poor appetite or overeating?"
          onChange={handleChange("poorAppetiteOrOvereating")}
          defaultValue={values.poorAppetiteOrOvereating}
        /> */}
        <br />
        <TextField
        fullWidth
          id="outlined-select-currency"
          select
          label="Are you currently employed?"
          value={values.currentlyEmployed}
          onChange={handleChange("currentlyEmployed")}
        >
          <MenuItem key="1" value="Yes">Yes</MenuItem>
          <MenuItem key="2" value="No">No</MenuItem>
        </TextField>
        {/* <TextField
        fullWidth
          label="Are you currently employed?"
          hintText="Are you currently employed?"
          onChange={handleChange("currentlyEmployed")}
          defaultValue={values.currentlyEmployed}
        /> */}
        <br />
        <TextField
        fullWidth
          id="outlined-select-currency"
          select
          label="Do you have any problems with intimacy?"
          value={values.intimacyProblems}
          onChange={handleChange("intimacyProblems")}
        >
          <MenuItem key="1" value="Yes">Yes</MenuItem>
          <MenuItem key="2" value="No">No</MenuItem>
        </TextField>
        {/* <TextField
        fullWidth
          label="Do you have any problems with intimacy?"
          hintText="Do you have any problems with intimacy?"
          onChange={handleChange("intimacyProblems")}
          defaultValue={values.intimacyProblems}
        /> */}
        <br />
        <TextField
        fullWidth
          id="outlined-select-currency"
          select
          label="How often do you drink alcohol?"
          value={values.alcoholFrequency}
          onChange={handleChange("alcoholFrequency")}
        >
          <MenuItem key="1" value="Daily">Daily</MenuItem>
          <MenuItem key="2" value="Never">Never</MenuItem>
          <MenuItem key="3" value="Infrequently">Infrequently</MenuItem>
        </TextField>
        {/* <TextField
        fullWidth
          label="How often do you drink alcohol?"
          hintText="How often do you drink alcohol?"
          onChange={handleChange("alcoholFrequency")}
          defaultValue={values.alcoholFrequency}
        /> */}
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

export default FormStepFour;
