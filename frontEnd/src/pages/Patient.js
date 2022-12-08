import React, { useState, useEffect } from 'react'
import PatientNavBar from '../components/PatientNavBar';
import DateTimePicker from 'react-datetime-picker';
import { Button } from "@material-ui/core";
import axios from "axios";

export default function Patient() {
  const [value, onChange] = useState(new Date());
  const [doctorData, setDoctorData] = useState([])
  const [bookingDetails, setBookingDetails] = useState();

  let pref = { "preference": "Female Therapist" }

  const preferDoctorData = () => {
    axios.post("http://localhost:4000/doctor/doctorByPreference", pref)
      .then(res => {
        console.log(res.data.doctorList)
        if (res.data.doctorList) {
          // window.location = "/patientP"
          setDoctorData(res.data.doctorList)
          // alert("success")
        }
        else {
          // alert("Error")
        }
      })
  };

  console.log("doctorData: ", doctorData)
  useEffect(() => {
    preferDoctorData()
  }, [])

  const getRowData = (dataMain) => {
    console.log(dataMain)
    setBookingDetails(dataMain)
  }

  const onSubmit = () => {
    console.log("value: ",value)
    console.log("bookingDetails: ", bookingDetails)
    let patientData = localStorage.getItem("PatientDetails")
    let bookdata = {
      patientEmail: patientData,
      doctorEmail: bookingDetails.email,
      dateAndTime: value
    }
    axios.post("http://localhost:4000/patient/bookAppointment", bookdata)
      .then(res => {
        console.log(res.data)
        if (res.data) {
          alert("Appointment is successfully booked!")
          localStorage.setItem("bookingAppointment",JSON.stringify(res.data.patient))
          window.location = "/payment"
        }
        else {
          alert("Error")
        }
      })
  }


  console.log(value)
  return (
    <div>
      <PatientNavBar></PatientNavBar><br></br>
      {/* <p>Doctor List</p> */}
      {doctorData.length > 0 ? <>
      <h3 style={{ 'textAlign': "center" }}>Doctor List</h3>
      <div className='col-md-8' style={{ marginRight: "auto", marginLeft: "auto" }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Doctor Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Rating</th>
              <th scope="col">Specialisation</th>
              <th scope="col">Doctor Expertise</th>
              <th scope="col">Select Doctor</th>
            </tr>
          </thead>
          <tbody>
            {doctorData && doctorData.map((data) => {
              return (
                <tr>
                  <td>{data.fullName}</td>
                  <td>{data.gender}</td>
                  <td>{data.rating}</td>
                  <td>{data.specialisation}</td>
                  <td>{data.expertise}</td>
                  <td><button onClick={() => getRowData(data)}>Select</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div></>
      : ''}
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
      onClick={() => onSubmit()}
      >
        {" "}
        Submit
      </Button>
    </div>
  )
}
