import { Patient } from "../model/patient.js";
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