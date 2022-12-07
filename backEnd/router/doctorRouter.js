import express from 'express';
const doctorRouter = express.Router();
import * as doctorController from '../controller/doctorController.js'



console.log("in doctorRouter!")
doctorRouter.post("/create", doctorController.createDoctor);
doctorRouter.get("/getAll", doctorController.getAll);
doctorRouter.post("/login", doctorController.login);
doctorRouter.post("/doctorByPreference", doctorController.doctorByPreference);
export default doctorRouter;