import React, { Component, Fragment } from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography
} from "@material-ui/core";
import './FormStyles.css';

export class FormStepOne extends Component {
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
    const { values, handleChange } = this.props;
    return (
      <Fragment>
        <div style={{padding: "50px",borderRadius: "25px", width: "600px"}}>
        <TextField
          fullWidth
          label="What is your gender identity?"
          hintText="What is your gender identity?"
          onChange={handleChange("gender")}
          defaultValue={values.gender}
        />
        <br />
        <TextField
          fullWidth
          label="How old are you?"
          hintText="How old are you?"
          onChange={handleChange("age")}
          defaultValue={values.age}
        />
        <br />
        <TextField
          fullWidth
          label="How do you identify?"
          hintText="How do you identify?"
          onChange={handleChange("sexualOrientation")}
          defaultValue={values.sexualOrientation}
        />
        <br />
        <TextField
          fullWidth
          label="What is you relationship status?"
          hintText="What is you relationship status?"
          onChange={handleChange("relationStatus")}
          defaultValue={values.relationStatus}
        />
        <br />
        <TextField
          fullWidth
          label="What is your Phone number?"
          hintText="What is your Phone number?"
          onChange={handleChange("phone")}
          defaultValue={values.phone}
        />
        <TextField
          fullWidth
          label="What is you home address?"
          hintText="What is you home address?"
          onChange={handleChange("address")}
          defaultValue={values.address}
        />
        <br />
        <br />
        <br />
        <div style={{float: "right"}}>
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

export default FormStepOne;
