import React, { Component } from "react";
import FormStepOne from './FormStepOne';
import FormStepTwo from './FormStepTwo';
import FormStepThree from './FormStepThree';
import FormStepFour from "./FormStepFour";
import FormStepFive from "./FormStepFive";
import FormStepSix from "./FormStepSix";
import Success from './Success';
import Navbar from "./Navbarcomp";
import './FormStyles.css'
import PatientSignUp from "../pages/PatientSignUp";

export class PatientForm extends Component {
    state = {
        step: 1,
        gender: "",
        age: "",
        sexualOrientation: "",
        relationStatus: "",
        beenInTherapy: "",
        therapistPreference: "",
        rateHealth: "",
        eatingHabits: "",
        reasonForTherapy: "",
        sleepProblems: "",
        currentlyTired: "",
        chronicPain: "",
        financialStatus: "",
        country: "",
        state: "",
        preferredLanguage: "",
        therapyType: "individual",
        fullName: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        currentlyDepressed: "",
        poorAppetiteOrOvereating: "",
        currentlyEmployed: "",
        intimacyProblems: "",
        alcoholFrequency: "",
        medicationHistory: "",
        assignedDoctor: "no",
        paymentMethod: "online"
    };
    // Go to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };
    // Handle fields change
    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const { step } = this.state;
        const { gender, age, sexualOrientation, relationStatus, beenInTherapy, therapistPreference, rateHealth,
            eatingHabits, reasonForTherapy, sleepProblems, currentlyTired, medicationHistory, chronicPain, financialStatus, country, state, preferredLanguage, therapyType, fullName, email, password, phone, address, currentlyDepressed,poorAppetiteOrOvereating, currentlyEmployed, intimacyProblems, alcoholFrequency, assignedDoctor,paymentMethod } = this.state;
        const values = {
            gender, age, sexualOrientation, relationStatus, beenInTherapy, therapistPreference, rateHealth,
            eatingHabits, reasonForTherapy, sleepProblems, currentlyTired, medicationHistory, chronicPain, financialStatus, country, state, preferredLanguage, therapyType, fullName, email, password, phone, address, currentlyDepressed,poorAppetiteOrOvereating, currentlyEmployed, intimacyProblems, alcoholFrequency, assignedDoctor,paymentMethod
        };
        let title = "Help us match you to the right therapist."

        switch (step) {
            default:
                return <h1>User Forms not working. Enable Javascript!</h1>;
            case 1:
                return (
                    <>
                        <Navbar></Navbar>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
                            <FormStepOne
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                values={values}
                            /></div></>
                );
            case 2:
                return (
                    <>
                        <Navbar></Navbar>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
                            <FormStepTwo
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                values={values}
                            /></div></>
                );
            case 3:
                return (
                    <>
                        <Navbar></Navbar>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
                            <FormStepThree
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                values={values}
                            /></div></>
                );
            case 4:
                return (
                    <>
                        <Navbar></Navbar>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
                            <FormStepFour
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                values={values}
                            /></div>
                    </>
                )
            case 5:
                return (
                    <>
                        <Navbar></Navbar>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
                            <FormStepFive
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                values={values}
                            /></div>
                    </>
                )
            case 6:
                return (
                    <>
                        <Navbar></Navbar>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
                            <FormStepSix
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                values={values}
                            /></div>
                    </>
                )
            case 7:
                return (
                    <>
                        <Navbar></Navbar>
                        <Success nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                values={values} />
                    </>
                )
            case 8: 
                return (
                    <>
                        <Navbar></Navbar>
                        <PatientSignUp nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                values={values} />
                    </>
                )
            //
            //   case 4:
            //     return <Success firstStep={this.firstStep} />;
        }
    }
}
export default PatientForm;
