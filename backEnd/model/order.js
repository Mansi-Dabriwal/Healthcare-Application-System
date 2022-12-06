import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    isPaid: Boolean,
    amount: Number,
    razorpay: {
        orderId: String,
        paymentId: String,
        signature: String,
    },
});
export const Order = mongoose.model('Order', OrderSchema);
export default { Order };