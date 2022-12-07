import React from 'react';
import PatientNavBar from '../components/PatientNavBar';
import '../styles/PatientPortal.css'

function PatientPortal() {
    return (
      <div>
        <PatientNavBar></PatientNavBar><br></br>
        <div><br></br>
          <h3 style={{"textAlign":"center"}}>Welcome to DOC101!</h3><br></br>
          <h4>What is the therapy process?</h4>
          <p>You indicated that you have never had therapy before, here is some information that might be helpful as you get ready to begin.</p>
          
          <h4>What happens next?</h4>
          <ul>
            <li>A licensed therapist with the proper qualifications will be matched to you.</li>
            <li>Your therapist will review the information you shared.</li>
            <li>You and your therapist start communicating online - the therapy process begins!</li>
          </ul>
          <h4>What if I don't like the therapist that was matched to me?</h4>
          <p>You can ask to be matched to a different therapist. DOC101 has over 29,000 therapists with different qualifications and areas of expertise.</p>
          
          <h4>How much will it cost?</h4>
          <p>With Doc101 you can have professional therapy for only $75 per week, charged every 4 weeks (Reduced Fee: student). Unlike traditional in-office therapy, which can cost $150-$180 per session, your DOC101 membership includes a weekly live session (video, phone, or chat), and the ability to message your therapist anytime, from anywhere. The subscription is billed and renewed every 4 weeks unless it is cancelled. It includes both the use of the secured site and the therapy service itself.
          </p>
        </div>
      </div>
    )
  }
  
  export default PatientPortal