import React from 'react'
import '../styles/Logindoc.css';
import Navbar from '../components/Navbarcomp';
import axios from "axios";
import Footer from '../components/Footercomp';
import { useNavigate } from "react-router-dom";
function Logindoc() {
    let navigate = useNavigate();
    const loginDoctor=(event)=>{
        event.preventDefault();
        console.log("in login!")

     let email = document.getElementById("docEmail").value;
     let password= document.getElementById("docPassword").value;
     const postpackage ={
            email: email,
            password: password
     };
     axios.post('http://localhost:4000/doctor/login',postpackage ,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }})
      .then(function (response) {
        if(response.data)
        {
            navigate("/DoctorPortal");
        }
        else
        {
            if(response.code===404)
            {
              alert("No Doctor with credential found!")
            }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }


  return (
    <div>
        <Navbar></Navbar>
    <div className="Auth-form-container">
    <form className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Doctor</h3>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
            id="docEmail"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            id="docPassword"
            className="form-control mt-1"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" onClick={loginDoctor} className="btn btn-primary">
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

export default Logindoc