import * as doctorService from '../service/doctorService.js'

const setResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

// this function is used to set the error in response 
const setError = (err, response) => {
    response.status(500);
    response.json(err);
}

export const createDoctor = async (req, res) => {
    try {
        console.log("creating doctor!")
        const user = await doctorService.save(req, res);
    } catch (error) {
        setError(error, res)
    }
}

export const getAll = async (req, res) => {
    try {
        const user = await doctorService.getAll(req, res);
    } catch (error) {
        setError(error, res)
    }

}


export const login = async (req, res) => {
    try {
        const user = await doctorService.login(req, res);
    } catch (error) {
        setError(error, res)
    }
}
