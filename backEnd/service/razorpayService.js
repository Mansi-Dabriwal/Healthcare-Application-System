import { Order } from "../model/order.js";
import Razorpay from "razorpay";

export const getRazorPayKey = (req, res) => {
    res.send({ key: process.env.RAZORPAY_KEY_ID });
};

export const createOrder = async (req, res) => {
    console.log(req.body);
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });
        const options = {
            amount: req.body.amount,
            currency: 'INR',
        };
        const order = await instance.orders.create(options);
        if (!order) return res.status(500).send('Some error occured');
        res.send(order);
    } catch (error) {
        res.status(500).send(error);
    }
};


export const payOrder = async (req, res) => {
    try {
        const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } =
            req.body;
        const newOrder = Order({
            isPaid: true,
            amount: amount/100,
            razorpay: {
                orderId: razorpayOrderId,
                paymentId: razorpayPaymentId,
                signature: razorpaySignature,
            },
        });
        await newOrder.save();
        res.send({
            msg: 'Payment was successfull',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};


export const listOrders = async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
};
