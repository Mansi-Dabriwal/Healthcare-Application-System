import { Patient } from "../model/patient.js";
import bcrypt from 'bcrypt'


export const save = async (req, res) => {

    console.log(req.body)
    const { error } = validate(req.body);
    console.log("error")
    if (error) {
        console.log("error");
        return res.status(400).send({ message: error.details[0].message });
    }


    const patient = await Patient.findOne({ email: req.body.email });
    if (patient) {
        console.log("patient exists")
        return res
            .status(409)
            .send({ message: "Patient with this mail already exists!" });
    }

    const patientRequest = req.body
    const salt = await bcrypt.genSalt(10);
    console.log(salt);
    const hashPassword = await bcrypt.hash(patientRequest.password, salt);
    patientRequest.password = hashPassword;
    console.log(patientRequest);
    const newPatient = new Patient(patientRequest);
    newPatient.save();
    res.status(201).send({ message: "Patient created successfully!" });
    return res;
}