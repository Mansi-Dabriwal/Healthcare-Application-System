import React from 'react'
import PatientNavBar from '../components/PatientNavBar';
import Card from 'react-bootstrap/Card';
import '../styles/Settings.css'

export default function Settings() {
  let patientData = JSON.parse(localStorage.getItem("EntirePatientDetails"));
  console.log(patientData)
  return (
    <div className='mainDiv'>
      <PatientNavBar></PatientNavBar>
      <div className='settingsB'>
          <br></br>
          <h3>Account Settings</h3><br></br>
          <Card body className='loginInfo'>
            <h4>Login Information</h4><br></br>
            {patientData.email}  
          </Card>
          <Card body className='therapist'>
            <h4>Your therapist</h4><br></br>
            You are currently working with {patientData?.lastDiagnose?.doctorName}.<br></br> 
          </Card>
          <Card body className='paymentSet'>
            <h4>Payment settings</h4><br></br>
            Click button to start therapy<br></br>
            <button className='btn btn-default'>Subscribe</button> 
          </Card>
          <Card body className='Profilepic'>
            <h4>Profile picture</h4><br></br>
            Upload a new profile picture(optional):<br></br><br></br>
            <button className='btn btn-default'>Choose file</button> <br></br><br></br>
            <button className='btn btn-default'>Upload picture</button>
          </Card>
          <Card body className='formP'>
            <form>
              <h4>Your personal information</h4><br></br>
              <div className="form-group">
                <div style={{display: "flex",justifyContent: "center"}}>
                <label className="col-sm-3 col-xs-12 control-label">
                  <strong>Full name:</strong>
                </label>                
                <div class="col-sm-5 col-xs-12">
                <input notranslate="" class="mp-sensitive form-control" type="text" id="first_name" name="first_name" value={patientData.fullName} placeholder="(optional)"/>
                </div>
                </div>              
              </div>

              <div className="form-group">
                <div style={{display: "flex",justifyContent: "center"}}>
                <label className="col-sm-3 col-xs-12 control-label">
                  <strong>Gender:</strong>
                </label>                
                <div class="col-sm-5 col-xs-12">
                <input notranslate="" class="mp-sensitive form-control" type="text" id="gender" name="gender" value={patientData.gender} placeholder="(optional)"/>
                </div>
                </div>              
              </div>

              <div className="form-group">
                <div style={{display: "flex",justifyContent: "center"}}>
                <label className="col-sm-3 col-xs-12 control-label">
                  <strong>phone number:</strong>
                </label>                
                <div class="col-sm-5 col-xs-12">
                <input notranslate="" class="mp-sensitive form-control" type="text" id="phone_number" name="phone_number" value={patientData.phone} placeholder="(optional)"/>
                </div>
                </div>              
              </div>
              
              <div className="form-group">
                <div style={{display: "flex",justifyContent: "center"}}>
                <label className="col-sm-3 col-xs-12 control-label">
                  <strong>Country:</strong>
                </label>                
                <div class="col-sm-5 col-xs-12">
                <input notranslate="" class="mp-sensitive form-control" type="text" id="country" name="country" value={patientData.country} placeholder="(optional)"/>
                </div>
                </div>              
              </div>
              
              <div className="form-group">
                <div style={{display: "flex",justifyContent: "center"}}>
                <label className="col-sm-3 col-xs-12 control-label">
                  <strong>State:</strong>
                </label>                
                <div class="col-sm-5 col-xs-12">
                <input notranslate="" class="mp-sensitive form-control" type="text" id="state" name="state" value={patientData.state} placeholder="(optional)"/>
                </div>
                </div>              
              </div>
              
              <button className='btn btn-default'>Save changes</button><br></br>
            </form>
            
          </Card>
          <Card body className='quitT'>
            <button className='btn btn-primary'>Quit Therapy</button>  
          </Card>

      </div>
    </div>
  )
}
