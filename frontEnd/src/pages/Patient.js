import React from 'react'
import PatientNavBar from '../components/PatientNavBar';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Patient() {
  return (
    <div>
         <PatientNavBar></PatientNavBar><br></br>

         <h3 style={{'textAlign':"center"}}>Book Appointment</h3> 
         <br></br>
         <Calendar />
         <br></br>
         <h3 style={{'textAlign':"center"}}>Booking History</h3>
         <p>No Booking History</p>
    </div>
  )
}
