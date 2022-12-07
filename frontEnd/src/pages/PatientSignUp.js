import React, { Component, Fragment } from "react";
import Navbar from '../components/Navbarcomp';
import Footer from '../components/Footercomp';
import {
  Button,
  TextField
} from "@material-ui/core";
import axios from "axios";
import '../styles/Home.css';
import '../components/FormStyles.css';
import Link from 'react-router-dom';


export class PatientSignUp extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      disabled: false,

    };
  }

  onSubmit = () => {
    axios.post("http://localhost:4000/patient/create", this.props.values)
      .then(res => {
        console.log(res.data.message)
        if (res.data.message === "Patient created successfully!") {
          window.location = "/LoginPatient"
        }
        else {
          alert("Error")
        }
      })
  };

  render() {
    console.log(this.props.values)
    const { values, handleChange } = this.props;
    return (

      <div>
        <Navbar></Navbar>

        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Patient Sign up</h3>
              <div className="form-group mt-3">
                {/* <label>Username</label>
            <input
              type="username"
              className="form-control mt-1"
              placeholder="Enter username"
            /> */}
                <TextField
                  label="Size"
                  id="outlined-size-small"
                  defaultValue="Small"
                  size="small"
                  onChange={handleChange("fullName")}
                  value={values.fullName}
                />
              </div>

              <div className="form-group mt-3">
              <TextField
                  label="Size"
                  id="outlined-size-small"
                  defaultValue="Small"
                  size="small"
                  onChange={handleChange("email")}
                  value={values.email}
                />
              </div>
              <div className="form-group mt-3">
              <TextField
                  label="Size"
                  id="outlined-size-small"
                  defaultValue="Small"
                  size="small"
                  onChange={handleChange("password")}
                  value={values.password}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary" onClick={() => this.onSubmit()}>
                  Sign Up
                </button>
              </div>
              {/* <p className="forgot-password text-right mt-2">
    Forgot <a href="#">password?</a>
  </p> */}
            </div>
          </form>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}

export default PatientSignUp;
