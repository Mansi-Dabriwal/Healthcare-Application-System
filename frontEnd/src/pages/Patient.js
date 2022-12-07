import React, { useState } from 'react'
import PatientNavBar from '../components/PatientNavBar';
import DateTimePicker from 'react-datetime-picker';
import { Button } from "@material-ui/core";

export default function Patient() {
  const [value, onChange] = useState(new Date());

  const onSubmit = () => {

  }

  console.log(value)
  return (
    <div>
      <PatientNavBar></PatientNavBar><br></br>
      {/* <p>Doctor List</p> */}
      <h3 style={{ 'textAlign': "center" }}>Booking History</h3>
      <div className='col-md-8' style={{ marginRight: "auto", marginLeft: "auto"}}>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          
        </tbody>
      </table>
      </div>
      <h3 style={{ 'textAlign': "center" }}>Book Appointment</h3>
      <br></br>
      <DateTimePicker onChange={onChange} value={value} />
      <br></br>
      <Button
        style={{
          background: "#3E78B2",
          color: "#FFFFFF",
          margin: "50px 0 80px 0"
        }}
        label="Continue"
        onClick={onSubmit()}
      >
        {" "}
        Submit
      </Button>
    </div>
  )
}
