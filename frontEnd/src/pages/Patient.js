import React, { useState } from 'react'
// import PatientNavBar from '../components/PatientNavBar';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { InlineWidget } from "react-calendly";
import DateTimePicker from 'react-datetime-picker';
import { Button } from "@material-ui/core";

export default function Patient() {
  const [value, onChange] = useState(new Date());

  const onSubmit = () => {

  }

  console.log(value)
  return (
    <div>
         <h3 style={{'textAlign':"center"}}>Book Appointment</h3> 
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
         <h3 style={{'textAlign':"center"}}>Booking History</h3>
         <p>No Booking History</p>
    </div>
  )
}
