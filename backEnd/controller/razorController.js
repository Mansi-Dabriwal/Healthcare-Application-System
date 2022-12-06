import * as razorpayService from '../service/razorpayService.js';

const setResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}
const setError = (err, response) => {
    response.status(500);
    response.json(err);
}

export const getRazorPayKey = async (req, res) => {
    try {
        console.log("getting razorPay key!")
        const user = await razorpayService.getRazorPayKey(req, res);
    } catch (error) {
        setError(error, res)
    }
}


export const createOrder = async (req, res) => {
    try {
        console.log("creating razorPay order!")
        const user = await razorpayService.createOrder(req, res);
    } catch (error) {
        setError(error, res)
    }
}


export const payOrder = async (req, res) => {
    try {
        console.log("paying razorPay order!")
        const user = await razorpayService.payOrder(req, res);
    } catch (error) {
        setError(error, res)
    }
}

export const listOrder = async (req, res) => {
    try {
        console.log("listing razorPay order!")
        const user = await razorpayService.listOrders(req, res);;
    } catch (error) {
        setError(error, res)
    }
}
