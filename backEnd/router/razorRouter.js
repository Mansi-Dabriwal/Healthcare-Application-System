import express from 'express';
const razorRouter = express.Router();
import * as razorController from '../controller/razorController.js'



console.log("in razorRouter")
patientRouter.get("/get-razorpay-key", razorController.getRazorPayKey);
patientRouter.post("/create-order", razorController.createOrder);
patientRouter.post("/pay-order", razorController.payOrder);
patientRouter.get("/list-orders", razorController.listOrder);
export default patientRouter;