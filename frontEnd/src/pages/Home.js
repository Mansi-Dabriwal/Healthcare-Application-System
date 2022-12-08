import React from 'react';
import Navbar from '../components/Navbarcomp';
import Footer from '../components/Footercomp';
import doctor1 from '../Images/doctor1.svg';
import doctor2 from '../Images/doctor2.svg';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';



function Home() {
  return (

    <div>
      <Navbar></Navbar>

      <section class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start" id="scrollspyHeading1">
        <div class="container">
          <div class="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>What type of therapy are you looking for?</h1>
              <h2 class="lead my-4">
              You deserve to be happy.
              </h2>
              
              <button class="btn btn-outline-light btn-lg" data-bs-toggle="modal" data-bs-target="#enroll">
                <Link to="/patient-form">Individual</Link>
              </button>
              <button class="btn btn-outline-light btn-lg" data-bs-toggle="modal" data-bs-target="#enroll">
              <Link to="/patient-form">Couple</Link>
              </button>
              <button class="btn btn-outline-light btn-lg" data-bs-toggle="modal" data-bs-target="#enroll">
              <Link to="/patient-form">Teen</Link>
              </button>
              
            </div>
            <img class="img-fluid w-50 d-none d-sm-block" src={doctor1} alt="" />
          </div>
        </div>
      </section>

      <section id="about" class="p-5">
        <div class="container">
        <h1>How it works</h1>
          <div class="row align-items-center justify-content-between">
            <div class="col-md">
              <img src={doctor2} class="img-fluid" alt="" />
            </div>
            <div class="col-md p-5">
              <h2 class="head">Get matched to the best therapist for you</h2>
              <p class="lead">
              Answer a few questions to find a licensed therapist who fits your needs and preferences. Tap into the largest network of licensed, professional, board-certified providers.
              </p>
             
              
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="p-5">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            
            <div class="col-md p-5">
              <h2 class="head">Communicate your way</h2>
              <p class="lead">
              Talk to your therapist however you feel comfortable — text, chat, phone, or video.
              </p> 
            </div>
            <div class="col-md">
              <img src={doctor2} class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="p-5">
        <div class="container">
      
          <div class="row align-items-center justify-content-between">
            <div class="col-md">
              <img src={doctor2} class="img-fluid" alt="" />
            </div>
            <div class="col-md p-5">
              <h2 class="head">Therapy when you need it</h2>
              <p class="lead">
              You can message your therapist at anytime, from anywhere. You also get to schedule live sessions when it's convenient for you, and can connect from any mobile device or computer.
              </p>
             
              
            </div>
          </div>
        </div>
      </section>


      <section id="testimonials" class="p-5 bg-primary">
        <div class="container">
          <h1 class="text-center text-white mb-5">Feedback from our favourite customers</h1>
          <div class="row g-4">
            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img src="https://randomuser.me/api/portraits/men/11.jpg" class="rounded-circle mb-3" alt="" />
                  <h3 class="card-title mb-3">John Doe</h3>
                  <p class="card-text">
                  Great therapist, he listens to your concerns and helps you to work on possible solutions to overcome. He also help me to see things in a way the lends to resolution rather than confrontation.
                  </p>
                  <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                  <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                  <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                  <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img src="https://randomuser.me/api/portraits/women/11.jpg" class="rounded-circle mb-3" alt="" />
                  <h3 class="card-title mb-3">James Mayer</h3>
                  <p class="card-text">
                  Gabriela is really understanding, skilled and makes you feel assured that you’re in a safe space. Working with her, I feel like I’m on a path that will definitely offer me significant improvement.
                  </p>
                  <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                  <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                  <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                  <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img src="https://randomuser.me/api/portraits/men/12.jpg" class="rounded-circle mb-3" alt="" />
                  <h3 class="card-title mb-3">Steve Smith</h3>
                  <p class="card-text">
                  Dr. Tresse is so compassionate and understanding. He listens and truly cares about his clients. He offers suggestions and gives guidance to help me in my journey to find peace and happiness.
                  </p>
                  <a href="#" ><i class="bi bi-twitter text-dark mx-1"></i></a>
                  <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                  <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                  <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img src="https://randomuser.me/api/portraits/women/12.jpg" class="rounded-circle mb-3" alt="" />
                  <h3 class="card-title mb-3">Sara Smith</h3>
                  <p class="card-text">
                  I have so far only had two sessions with Trudy but she has already helped me so much. Not only to I think highly of her but I also think highly of BetterHelp! Looking forward to progress 
                  </p>
                  <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                  <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                  <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                  <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Accordion>
        <h1  id="questions" class='faq'>Frequently asked questions</h1>
        <div className='Acc'>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How can I be sure that this is an effective form of therapy?</Accordion.Header>
            <Accordion.Body>
            There are many studies that confirm the effectiveness of the online medium for making life changes. For example, a study published by JMIR Publications and conducted by researchers from University of California - Berkeley, University of California - San Francisco, and the San Francisco General Hospital concluded that "users of BetterHelp experienced significantly reduced depression symptom severity after engaging with the platform." 
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Who are the therapists?</Accordion.Header>
            <Accordion.Body>
              Therapists on BetterHelp are licensed, trained, experienced, and
              accredited psychologists (PhD / PsyD), licensed marriage and family therapists (LMFT), licensed clinical social workers (LCSW / LMSW),
              or licensed professional counselors (LPC).
              All of them have a Masters Degree or a Doctorate Degree in their field.
              They have been qualified and certified by their state's professional board after successfully completing the necessary education, exams, training and practice. While their experience, expertise, and background vary, they all possess at least 3 years and 1,000 hours of hands-on experience
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Who will be helping me?</Accordion.Header>
            <Accordion.Body>
              After you sign up, we will match you to an available therapist who fits your objectives, preferences, and the type of issues you are dealing with. Different therapists have different approaches and areas of focus, so it's important to find the right person who can achieve the best results for you. We have found that we are able to provide a successful match most of the time; however, if you start the process and you feel your therapist isn't a good fit for you, you may elect to be matched to a different therapist.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Can BetterHelp substitute for traditional face-to-face therapy?</Accordion.Header>
            <Accordion.Body>
            The professionals who work through BetterHelp are licensed and credentialed therapists who were certified by their state's board to provide therapy and counseling. However, while the service may have similar benefits, it's not capable of substituting for traditional face-to-face therapy in every case. Please note that your provider won't be able to make any official diagnosis, to fulfill any court order or prescribe medication.
            </Accordion.Body>
          </Accordion.Item>
        </div>
      </Accordion>
     <Footer></Footer>
    </div>
  )
}

export default Home