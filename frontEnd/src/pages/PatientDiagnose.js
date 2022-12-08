import React,{useEffect} from 'react';
import { Link } from "react-router-dom";
import DoctorNavBar from '../components/DoctorNavBar';

const PatientDiagnose = () => {
    let patientList = JSON.parse(localStorage.getItem("doctorData"))
    let patientName = []

    useEffect(() => {
        addPatientName()
    }, [])
    const addPatientName = () => {
        patientList.appointmentPatient.map((item) => {
            patientName.push(item.patient.fullName)
        })
    }

  return (
    <>
    <DoctorNavBar/>
    
    </>
  )
}

export default PatientDiagnose