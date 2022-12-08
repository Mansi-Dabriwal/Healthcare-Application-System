import React, { useState } from 'react'
import '../styles/Logindoc.css';
import Navbar from '../components/Navbarcomp';
import axios from "axios";
import Footer from '../components/Footercomp';

function LoginPatient() {
  const [contactInfo, setContactInfo] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    console.log(event.target.value)
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
    console.log(contactInfo)
  };

  const onSubmit = () => {
    localStorage.setItem("PatientDetails", contactInfo.email)
    axios.post("http://localhost:4000/patient/login", contactInfo)
      .then(res => {
        console.log(res.data)
        if (res.data) {
          localStorage.setItem("EntirePatientDetails", JSON.stringify(res.data.patient))
          window.location = "/patientP"
        }
        else {
          alert("Error")
        }
      })
    // setContactInfo({email: "", password: ""})
  };

  console.log(contactInfo)

  return (
    <div>
      <Navbar></Navbar>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={() => onSubmit()}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Patient</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                name="email"
                value={contactInfo.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                name="password"
                value={contactInfo.password}
                onChange={handleChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default LoginPatient