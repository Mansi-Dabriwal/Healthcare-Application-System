import { Patient } from "../model/patient.js";
import { Doctor } from "../model/doctor.js";
import bcrypt from 'bcrypt'
const userName = "";

import sendEmail from './../utils/sendEmail.js';

export const getAll = async (req, res) => {
    Patient.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        }
        else {
            console.log(err);
        }
    })
}

export const login = async (req, res) => {
    let user = req.body;

    Patient.find({ email: user.email }, async (err, data) => {

        if (data.length < 1) {
            return res.status(404).send({ message: "Patient with given credentials is not found!" })
        }
        else {
            if (!err) {
                console.log(data[0].password);
                const validPassword = await bcrypt.compare(
                    user.password,
                    data[0].password
                );
                if (validPassword) {
                    res.send({ message: "Logged in Successfully!", patient: data[0] });
                }
                else {
                    return res.status(404).send({ message: "Patient with given credentials is not found!" })
                }
            }
            else {
                console.log(err);
            }
        }

    })
}


export const feedback = async (req, res) => {
    let user = req.body;
    Patient.find({ email: user.email }, async (err, data) => {
        if (data.length < 1) {
            return res.status(404).send({ message: "Patient with given mail Id is not found!" })
        }
        else {
            let patient = data[0];
            let feedback = user.feedback;
            await sendEmail('doc101team@gmail.com', `Feedback from ${patient.fullName}! (Mail : ${patient.email})`, feedback);
            return res.status(200).send({ message: "Feedback mail sent to the Team!" })
        }
    })
}

export const bookAppointment = async (req, res) => {
    let payload = req.body;
    let newDate = new Date(payload.dateAndTime);
    let date = newDate.toLocaleDateString();
    let time = newDate.toLocaleTimeString();
    let appointment = { patientEmail: payload.patientEmail, doctorEmail: payload.doctorEmail, date: date, time: time, dateAndTime: payload.dateAndTime };
    let patient = await Patient.findOne({ email: payload.patientEmail });
    let booking = patient.bookingDetails;
    booking.push(appointment);
    booking.sort((a, b) => (new Date(a.date) > new Date(b.date)) ? 1 : -1)
    await Patient.findOneAndUpdate({ email: payload.patientEmail }, { bookingDetails: booking });
    let patientResponse = await Patient.findOne({ email: payload.patientEmail });
    let doctor = await Doctor.findOne({ email: payload.doctorEmail });
    let patientAppointment = doctor.appointmentPatient;
    let doctorResponse = { date: date, time: time, patient: patientResponse, dateAndTime: payload.dateAndTime };
    patientAppointment.push(doctorResponse);
    patientAppointment.sort((a, b) => (new Date(a.date) > new Date(b.date)) ? 1 : -1)

    await Doctor.findOneAndUpdate({ email: payload.doctorEmail }, { appointmentPatient: patientAppointment });
    return res.status(200).send({ message: "Appointment booked!", patient: patientResponse });
}


export const save = async (req, res) => {
    let validator = true;
    let stringRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let numberRegex = /^[0-9]*$/;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    let phoneRegex = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/;
    console.log("entered save!")
    console.log(req.body);

    if (!req.body.fullName || !stringRegex.test(req.body.fullName)) {
        validator = false;
        return res.status(400).send({ message: "FullName is required and should only contain letters!" });
    }

    if (!req.body.email || !emailRegex.test(req.body.email)) {
        validator = false;
        return res.status(400).send({ message: "E-mail is required, and should be valid!" });
    }

    if (!req.body.password || !passwordRegex.test(req.body.password)) {
        validator = false;
        return res.status(400).send({ message: "Password is required and should be a strong password!" });
    }
    if (!req.body.age || !numberRegex.test(req.body.age)) {
        validator = false;
        return res.status(400).send({ message: "Age is required and should only be numbers!" });
    }

    if (!req.body.gender) {
        validator = false;
        return res.status(400).send({ message: "Gender is required!" });
    }

    if (!req.body.sexualOrientation) {
        validator = false;
        return res.status(400).send({ message: "Sexual Orientation is required!" });
    }

    if (!req.body.phone || !phoneRegex.test(req.body.phone)) {
        validator = false;
        return res.status(400).send({ message: "Phone is required, and should be valid!" });
    }

    if (!req.body.address) {
        validator = false;
        return res.status(400).send({ message: "Address is required!" });
    }

    if (!req.body.state) {
        validator = false;
        return res.status(400).send({ message: "State is required!" });
    }


    if (!req.body.country) {
        validator = false;
        return res.status(400).send({ message: "Country is required!" });
    }

    if (!req.body.preferredLanguage) {
        validator = false;
        return res.status(400).send({ message: "Preferred is required!" });
    }

    if (!req.body.therapyType) {
        validator = false;
        return res.status(400).send({ message: "Therapy type is required!" });
    }
    if (!req.body.beenInTherapy) {
        validator = false;
        return res.status(400).send({ message: "Been in therpay? is required!" });
    }

    if (!req.body.relationStatus) {
        validator = false;
        return res.status(400).send({ message: "Relationship Status is required!" });
    }

    if (!req.body.reasonForTherapy) {
        validator = false;
        return res.status(400).send({ message: "Reason for therapy is required!" });
    }

    if (!req.body.therapistPreference) {
        validator = false;
        return res.status(400).send({ message: "Therapist preference is required!" });
    }

    if (!req.body.rateHealth || !numberRegex.test(req.body.rateHealth)) {
        validator = false;
        return res.status(400).send({ message: "Health rating is required and should be a number!" });
    }

    if (!req.body.eatingHabits) {
        validator = false;
        return res.status(400).send({ message: "Eating Habits is required!" });
    }

    if (!req.body.currentlyDepressed) {
        validator = false;
        return res.status(400).send({ message: "Currently depressed is required!" });
    }

    if (!req.body.sleepProblems) {
        validator = false;
        return res.status(400).send({ message: "Sleep Problems is required!" });
    }

    if (!req.body.currentlyTired) {
        validator = false;
        return res.status(400).send({ message: "Currently Tired is required!" });
    }

    if (!req.body.poorAppetiteOrOvereating) {
        validator = false;
        return res.status(400).send({ message: "Poor Appetite Or Overeating is required!" });
    }

    if (!req.body.currentlyEmployed) {
        validator = false;
        return res.status(400).send({ message: "Currently Employed is required!" });
    }

    if (!req.body.intimacyProblems) {
        validator = false;
        return res.status(400).send({ message: "Intimacy Problems is required!" });
    }

    if (!req.body.alcoholFrequency) {
        validator = false;
        return res.status(400).send({ message: "Alcohol Frequency is required!" });
    }

    if (!req.body.medicationHistory) {
        validator = false;
        return res.status(400).send({ message: "Medication History is required!" });
    }

    if (!req.body.chronicPain) {
        validator = false;
        return res.status(400).send({ message: "Chronic Pain is required!" });
    }

    if (!req.body.financialStatus) {
        validator = false;
        return res.status(400).send({ message: "Financial Status is required!" });
    }





    const patient = await Patient.findOne({ email: req.body.email });
    if (patient) {
        validator = false;
        console.log("patient exists")
        return res
            .status(409)
            .send({ message: "Patient with this mail already exists!" });
    }

    if (validator === true) {
        console.log("ellame true!")
        const patientRequest = req.body
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(patientRequest.password, salt);
        patientRequest.password = hashPassword;
        const newPatient = new Patient(patientRequest);
        newPatient.save();
        await sendEmail(req.body.email, `Hey ${req.body.fullName}!, Welcome to Doc101!`, `Hey ${req.body.fullName}! Welcome to Docs 101. We have several services at your dispossal.Please visit out website, to learn more. Be happy, live happy.`);
        return res.status(201).send({ message: "Patient created successfully!" });
    }


}