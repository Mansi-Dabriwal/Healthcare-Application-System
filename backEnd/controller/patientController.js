import * as patientService from '../service/patientService.js'

const setResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

// this function is used to set the error in response 
const setError = (err, response) => {
    response.status(500);
    response.json(err);
}

export const createPatient = async (req, res) => {
    try {
        console.log("creating patient!")
        const user = await patientService.save(req, res);
        console.log(user);
    } catch (error) {
        setError(error, res)
    }
}

export const getAll = async (req, res) => {
    try {
        const verified = await userservice.verify(req, res)
        //setResponse(verified,res)
        console.log(verified);
    } catch (error) {
        setError(error, res)
    }



}