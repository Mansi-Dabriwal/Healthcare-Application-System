import React from 'react';
import Navbar from '../components/Navbarcomp';
import Footer from '../components/Footercomp';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Image from "react-bootstrap/Image";
// import doctor1 from '../Images/doctor1.svg';
// import doctor2 from '../Images/doctor2.svg';
// import img1 from '../Images/img1.jpg'
// import img2 from '../Images/img1.jpg'
// import img3 from '../Images/img1.jpg'
import '../styles/Home.css';
import '../styles/Contact.css';
// import Accordion from 'react-bootstrap/Accordion';



function Contact() {
    return (

    <div>
        <Navbar></Navbar>
        <section>
            {/* <h1>contact Form</h1> */}
<div>
    <div class="contact-form-wrapper d-flex justify-content-center">
        <form action="#" class="contact-form">
        <h5 class="title">Contact us</h5>
        <p class="description">Feel free to contact us if you need any assistance, any help or another question.
        </p>
        <div>
            <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Full Name" required />
        </div>
        <div>
            <input type="email" class="form-control rounded border-white mb-3 form-input" placeholder="Email" required />
        </div>
        <div>
            <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
        </div>
        <div class="submit-button-wrapper">
            <input type="submit" value="Send" />
        </div>
        </form>
    </div>
</div>
        </section>

        <Footer></Footer>
    </div>
    )
}

export default Contact