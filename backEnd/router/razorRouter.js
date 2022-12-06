import express from 'express';
const razorRouter = express.Router();
import * as razorController from '../controller/razorController.js'



console.log("in razorRouter")
razorRouter.get("/get-razorpay-key", razorController.getRazorPayKey);
razorRouter.post("/create-order", razorController.createOrder);
razorRouter.post("/pay-order", razorController.payOrder);
razorRouter.get("/list-orders", razorController.listOrder);
export default razorRouter;