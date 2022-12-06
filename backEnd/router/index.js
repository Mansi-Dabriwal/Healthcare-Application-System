import patientRouter from './patientRouter.js'
import doctorRouter from './doctorRouter.js'
import razorRouter from './razorRouter.js'

export default (app) => {
    console.log("in router index");
    app.use('/patient', patientRouter);
    app.use('/doctor', doctorRouter);
    app.use('/razorPay', razorRouter);
    // app.use('/reset',resetrouter);
    console.log("in router index exit");
}