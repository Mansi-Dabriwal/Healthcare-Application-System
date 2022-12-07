import React from "react";
import "../styles/Logindoc.css";
import Navbar from "../components/Navbarcomp";
import Footer from "../components/Footercomp";

function LoginPatient() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Patient</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a> /{" "}
              <a href="PatientSignUp">Create a new account?</a>
            </p>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default LoginPatient;
