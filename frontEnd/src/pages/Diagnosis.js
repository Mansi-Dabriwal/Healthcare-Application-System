import React from 'react';
import PatientNavBar from '../components/PatientNavBar';

const Diagnosis = () => {
    let patientDiagnosisData = JSON.parse(localStorage.getItem("EntirePatientDetails"))
    console.log(patientDiagnosisData);
  return (
    <>
    <PatientNavBar></PatientNavBar><br></br>
        {/* patient diagnosis data  */}
        <h4 className='m-5 '>Your Recent Diagnosis</h4>
        {patientDiagnosisData?.lastDiagnose ? 
        <div className='col-md-8' style={{ marginRight: "auto", marginLeft: "auto" }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Doctor Name</th>
              <th scope="col">Medication Type</th>
              <th scope="col">First Medicine</th>
              <th scope="col">Second Medicine</th>
              <th scope="col">Doctor's Remarks</th>
            </tr>
          </thead>
          <tbody>
                <tr>
                <td>{patientDiagnosisData.lastDiagnose?.doctorName}</td>
                  <td>{patientDiagnosisData.lastDiagnose?.medicationType}</td>
                  <td>{patientDiagnosisData.lastDiagnose?.medicine1}</td>
                  <td>{patientDiagnosisData.lastDiagnose?.medicine2}</td>
                  <td>{patientDiagnosisData.lastDiagnose?.remarks}</td>
                </tr>
          </tbody>
        </table>
      </div>:
      <><h4>Your don't have any recent diagnosis</h4></>}</>
  )
}

export default Diagnosis