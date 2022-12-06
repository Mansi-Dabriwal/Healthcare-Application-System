import React from 'react';
import Navbar from '../components/Navbarcomp';
import Footer from '../components/Footercomp';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Image from "react-bootstrap/Image";
// import doctor1 from '../Images/doctor1.svg';
// import doctor2 from '../Images/doctor2.svg';
// import img1 from '../Images/img1.jpg'
// import img2 from '../Images/img1.jpg'
// import img3 from '../Images/img1.jpg'
import '../styles/Home.css';
// import '../styles/Contact.css';
// import Accordion from 'react-bootstrap/Accordion';



function PatientSignUp() {
    return (

    <div>
        <Navbar></Navbar>
        
        <div className="Auth-form-container">
<form className="Auth-form">
  <div className="Auth-form-content">
    <h3 className="Auth-form-title">Patient Sign up</h3>
    <div className="form-group mt-3">
      <label>Username</label>
      <input
        type="username"
        className="form-control mt-1"
        placeholder="Enter username"
      />
    </div>
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
    )
}

export default PatientSignUp