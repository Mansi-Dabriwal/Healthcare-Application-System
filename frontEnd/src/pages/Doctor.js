import React, { useState } from 'react'
import DoctorNavBar from '../components/DoctorNavBar'
import axios from "axios";

export default function Doctor() {
    const [patient, setpatient] = useState();
    const [diagnose, setDiagnose] = useState({
        medicationType: "",
        medicine1: "",
        medicine2: "",
        remarks: ""
    });

    const onSubmit = () => {
        let newData = {
            "dateAndTime": patient.dateAndTime ,
            "date": patient.date,
            "time": patient.time,
            "patientEmail": patient.patient.email,
            "doctorEmail": "siddhant34@gmail.com",
            "medicationType": diagnose.medicationType,
            "medicine1": diagnose.medicine1,
            "medicine2": diagnose.medicine2,
            "remarks": diagnose.remarks
        }
        axios.post("http://localhost:4000/doctor/diagnosePatient", newData)
            .then(res => {
                console.log(res.data)
                if (res.data) {
                    // window.location = "/patientP"
                    alert('successfully saved')
                }
                else {
                    alert("Error")
                }
            })
    }

    const handleChange = (event) => {
        debugger
        console.log(event.target.value)
        setDiagnose({ ...diagnose, [event.target.name]: event.target.value });
        console.log(diagnose)
    };
    let doctorMainData = JSON.parse(localStorage.getItem("doctorData"))
    console.log(doctorMainData);

    let medicine1List = ["Advil", "Cepacol Antibacterial", "Childrens Dimetapp", "Claritin", "Cortaid", "Gaviscon", "Lotrimin AF", "Maalox Antacid", "Midol", "Motrin IB", "Orajel", "Rolaids"]
    let medicine2List = ["Adco-Napacod", "Apronax", "Ardoson", "Betahistine", "Brilinta", "Dectancyl", "dexamethasone", "Disflatyl", "Domperidone", "Dupixent", "Entresto", "Farmapram", "Farxiga", "Gliclazide", "Humira"]

    // console.log("doctorData: ", doctorData)

    const getRowData = (dataMain) => {
        console.log(dataMain)
        setpatient(dataMain)
    }
    return (
        <div>
            <DoctorNavBar></DoctorNavBar>
            <br></br>
            <h2>Upcoming Appointments</h2>
            <br></br><br></br>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Select Patient</th>
                    </tr>
                </thead>
                <tbody>
                    {doctorMainData.appointmentPatient.map((item) => {
                        console.log(item)
                        return (
                            <tr>
                                <td>{item.date}</td>
                                <td>{item.time}</td>
                                <td>{item.patient.fullName}</td>
                                <td>{item.patient.age}</td>
                                <td>{item.patient.gender}</td>
                                <td>{item.patient.email}</td>
                                <td><button onClick={() => getRowData(item)}>Select</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div style={{ marginTop: "50px" }}>
                <h2>Diagnose Patient</h2><br></br>
                <form>
                    {patient ? <>
                        <div style={{ marginBottom: "20px" }}>
                            <p style={{ marginBottom: "0px" }}>Patient Name: {patient.patient.fullName}</p>
                            <p style={{ marginBottom: "0px" }}>Appointment Date & Time: {patient.date} {patient.time}</p>
                            <p style={{ marginBottom: "0px" }}>Patient Email: {patient.patient.email}</p>
                        </div>
                    </> : ''}

                    <br></br>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <label style={{ margin: "5px" }}>
                            Medication Type
                        </label>
                        <select class="form-select" name="medicationType" aria-label="Default select example" style={{ width: "200px" }} onChange={(e) => handleChange(e)} value={diagnose}>
                            <option value="otc" name="medicationType" >Over The Counter</option>
                            <option value="prescription" name="medicationType">Prescription</option>
                        </select>


                    </div>
                    <br></br>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <label style={{ margin: "5px" }}>
                            Medicine 1:
                        </label>
                        <select class="form-select" aria-label="Default select example" style={{ width: "200px" }} name="medicine1" onChange={(e) => handleChange(e)}>
                            {/* <option selected>Open this select menu</option> */}
                            {medicine1List.map((data) => {
                                return (
                                    <option value={data}>{data}</option>
                                )
                            })}
                        </select>

                    </div>
                    <br></br>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <label style={{ margin: "5px" }}>
                            Medicine 2:
                        </label>
                        <select class="form-select" aria-label="Default select example" style={{ width: "200px" }} name="medicine2" onChange={(e) => handleChange(e)}>
                            {/* <option selected>Open this select menu</option> */}
                            {medicine2List.map((data) => {
                                return (
                                    <option value={data}>{data}</option>
                                )
                            })}
                        </select>

                    </div>
                    <br></br>
                    <label style={{ margin: "5px" }}>Remark:</label>
                    <input type="text" name="remarks" value={diagnose.remarks}
                        onChange={handleChange} ></input>
                    <br></br>
                    <button className="btn btn-default" style={{ textDecoration: 'none', color: '#FFF' }} onClick={() => onSubmit()}>Submit</button>

                </form>
            </div>
        </div>
    )
}
