import { Doctor } from "../model/doctor.js";
import bcrypt from 'bcrypt'
import sendEmail from './../utils/sendEmail.js';

export const getAll = async (req, res) => {
    Doctor.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        }
        else {
            console.log(err);
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


    if (!req.body.phone || !phoneRegex.test(req.body.phone)) {
        validator = false;
        return res.status(400).send({ message: "Phone is required, and should be valid!" });
    }

    if (!req.body.address) {
        validator = false;
        return res.status(400).send({ message: "Address is required!" });
    }

    if (!req.body.specialisation) {
        validator = false;
        return res.status(400).send({ message: "Specialisation is required!" });
    }


    if (!req.body.rating || !numberRegex.test(req.body.rating)) {
        validator = false;
        return res.status(400).send({ message: "Rating is required and should be a number!" });
    }

    if (!req.body.expertise) {
        validator = false;
        return res.status(400).send({ message: "Expertise is required!" });
    }


    const doctor = await Doctor.findOne({ email: req.body.email });
    if (doctor) {
        validator = false;
        console.log("doctor exists")
        return res
            .status(409)
            .send({ message: "Doctor with this mail already exists!" });
    }

    if (validator === true) {
        console.log("ellame true!")
        const doctorRequest = req.body
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(doctorRequest.password, salt);
        doctorRequest.password = hashPassword;
        const newDoctor = new Doctor(doctorRequest);
        newDoctor.save();
        await sendEmail(req.body.email, `Hey ${req.body.fullName}!, Welcome to Doc101!`, `Hey Dr. ${req.body.fullName}! Welcome to Docs 101. We are glad that you joined our team. Happy Doctoring! Be happy, live happy.`);
        return res.status(201).send({ message: "Doctor created successfully!" });
    }


}


export const login = async (req, res) => {
    let user = req.body;

    Doctor.find({ email: user.email }, async (err, data) => {
        console.log("..." + data);
        if (data.length < 1) {
            return res.status(404).send({ message: "Doctor with given credentials is not found!" })
        }
        else {
            if (!err) {
                console.log(data[0].password);
                const validPassword = await bcrypt.compare(
                    user.password,
                    data[0].password
                );
                if (validPassword) {
                    return res.send({ message: "Logged in Successfully!", doctor: data[0] });
                }
                else {
                    return res.status(404).send({ message: "Doctor with given credentials is not found!" })
                }
            }
            else {
                console.log(err);
            }
        }

    })
}