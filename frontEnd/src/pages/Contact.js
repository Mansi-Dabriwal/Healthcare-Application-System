import React, { useRef } from "react";
import Navbar from "../components/Navbarcomp";
import Footer from "../components/Footercomp";
import "../styles/Home.css";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yvptw5i",
        "template_vmhenjo",
        form.current,
        "Rd22SA76XTWhPAMZE"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Navbar></Navbar>
      <section>
        {/* <h1>contact Form</h1> */}
        <div>
          <div class="contact-form-wrapper d-flex justify-content-center">
            <form class="contact-form" ref={form} onSubmit={sendEmail}>
              <h5 class="title">Contact us</h5>
              <p class="description">
                Feel free to contact us if you need any assistance, any help or
                another question.
              </p>
              <div>
                <input
                  type="text"
                  class="form-control rounded border-white mb-3 form-input"
                  id="name"
                  name="user_name"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  class="form-control rounded border-white mb-3 form-input"
                  name="user_email"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <textarea
                  id="message"
                  class="form-control rounded border-white mb-3 form-text-area"
                  rows="5"
                  cols="30"
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
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
  );
}

export default Contact;