import React from 'react'
import PatientNavBar from '../components/PatientNavBar';
import Card from 'react-bootstrap/Card';
import '../styles/Settings.css'

export default function Settings() {
  return (
    <div className='mainDiv'>
      <PatientNavBar></PatientNavBar>
      <div className='settingsB'>
          <br></br>
          <h3>Account Settings</h3><br></br>
          <Card body className='loginInfo'>
            <h4>Login Information</h4><br></br>
            mansidabriwal@gmail.com  
          </Card>
          <Card body className='therapist'>
            <h4>Your therapist</h4><br></br>
            You are currently working with Dylan Ferreira LMHC.<br></br>
            Change therapist 
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
                <div>
                <label className="col-sm-3 col-xs-12 control-label">
                  <strong>First name:</strong>
                </label>                
                <div class="col-sm-5 col-xs-12">
                <input notranslate="" class="mp-sensitive form-control" type="text" id="first_name" name="first_name" value="" placeholder="(optional)"/>
                </div>
                </div>              
              </div>

              <div className="form-group">
                <div>
                <label className="col-sm-3 col-xs-12 control-label">
                  <strong>Middle name:</strong>
                </label>                
                <div class="col-sm-5 col-xs-12">
                <input notranslate="" class="mp-sensitive form-control" type="text" id="middle_name" name="middle_name" value="" placeholder="(optional)"/>
                </div>
                </div>              
              </div>
              
              
              <div className="form-group">
                <div>
                <label className="col-sm-3 col-xs-12 control-label">
                  <strong>Last name:</strong>
                </label>                
                <div class="col-sm-5 col-xs-12">
                <input notranslate="" class="mp-sensitive form-control" type="text" id="last_name" name="last_name" value="" placeholder="(optional)"/>
                </div>
                </div>              
              </div>

              <div className="form-group">
                <div>
                <label className="col-sm-3 col-xs-12 control-label">
                  <strong>Gender:</strong>
                </label>                
                <div class="col-sm-5 col-xs-12">
                <input notranslate="" class="mp-sensitive form-control" type="text" id="gender" name="gender" value="" placeholder="(optional)"/>
                </div>
                </div>              
              </div>

              <div className="form-group">
                <div>
                <label className="col-sm-3 col-xs-12 control-label">
                  <strong>phone number:</strong>
                </label>                
                <div class="col-sm-5 col-xs-12">
                <input notranslate="" class="mp-sensitive form-control" type="text" id="phone_number" name="phone_number" value="" placeholder="(optional)"/>
                </div>
                </div>              
              </div>
              
              <div className="form-group">
                <div>
                <label className="col-sm-3 col-xs-12 control-label">
                  <strong>Country:</strong>
                </label>                
                <div class="col-sm-5 col-xs-12">
                <input notranslate="" class="mp-sensitive form-control" type="text" id="country" name="country" value="" placeholder="(optional)"/>
                </div>
                </div>              
              </div>
              
              <div className="form-group">
                <div>
                <label className="col-sm-3 col-xs-12 control-label">
                  <strong>State:</strong>
                </label>                
                <div class="col-sm-5 col-xs-12">
                <input notranslate="" class="mp-sensitive form-control" type="text" id="state" name="state" value="" placeholder="(optional)"/>
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
