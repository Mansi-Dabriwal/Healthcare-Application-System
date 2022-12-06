import React, { Component, Fragment } from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography
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
          label="How often have you been bothered by Poor appetite or overeating?"
          hintText="How often have you been bothered by Poor appetite or overeating?"
          onChange={handleChange("appetite")}
          defaultValue={values.appetite}
        />
        <br />
        <TextField
        fullWidth
          label="Are you currently employed?"
          hintText="Are you currently employed?"
          onChange={handleChange("employed")}
          defaultValue={values.employed}
        />
        <br />
        <TextField
        fullWidth
          label="Do you have any problems with intimacy?"
          hintText="Do you have any problems with intimacy?"
          onChange={handleChange("intimacy")}
          defaultValue={values.intimacy}
        />
        <br />
        <TextField
        fullWidth
          label="How often do you drink alcohol?"
          hintText="How often do you drink alcohol?"
          onChange={handleChange("alcohol")}
          defaultValue={values.alcohol}
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

export default FormStepFour;
