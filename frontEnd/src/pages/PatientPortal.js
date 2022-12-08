import React from 'react';
import PatientNavBar from '../components/PatientNavBar';
import '../styles/PatientPortal.css'
import doctor2 from '../Images/doctor2.svg';

function PatientPortal() {


    return (
      
      <div>
        <PatientNavBar></PatientNavBar><br></br>
        <section id="about" class="p-5">
        <div class="container">
          <div class="row align-items-center justify-content-between">
          <div class="col-md">
              <img src={doctor2} class="img-fluid" alt="" />
            </div>
            <div class="col-md p-5">
              <h2 class="head">What is the therapy process?</h2>
              <p class="lead">
              You indicated that you have never had therapy before, here is some information that might be helpful as you get ready to begin.
              </p> 
            {/* <ul style={{text}}> */}
            <p style={{margin:'0px', textAlign: "left", color: "#2E2529"}}>• A licensed therapist with the proper qualifications will be matched to you.</p>
             <p style={{margin:'0px', textAlign: "left", color: "#2E2529"}}>• Your therapist will review the information you shared.</p>
            <p style={{margin:'0px', textAlign: "left", color: "#2E2529"}}>• You and your therapist start communicating online - the therapy process begins!</p>
          
            </div>
            
          </div>
        </div>
      </section>
        {/* <div><br></br>
          <h3 style={{"textAlign":"center"}}>Welcome to DOC101!</h3><br></br>
          <h4></h4>
          <p>You indicated that you have never had therapy before, here is some information that might be helpful as you get ready to begin.</p>
          
          <h4>What happens next?</h4>
          
        </div> */}
      </div>
    )
  }
  
  export default PatientPortal