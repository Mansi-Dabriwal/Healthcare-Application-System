import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/About.css";
import Navbar from "../components/Navbarcomp";
import review from "../Images/review.svg";
import help from "../Images/help.svg";
import Footer from "../components/Footercomp";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Testimonials() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5m800ld",
        "template_5mq9dke",
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
      <section id="testimonials" class="p-5">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md p-5">
              <h2 class="head">Our Testimonials</h2>
              <p class="lead">
                "These quotes represent a few of the many positive reviews that
                we have received for therapists who work with Doc101. We don’t
                pay anyone to provide their review and they are all made
                voluntarily. Some people's experience receiving therapy with
                Doc101 might be different."
              </p>
            </div>
            <div class="col-md">
              <img src={review} class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial" class="p-5 bg-primary">
        <div class="container">
          <h1 class="text-center text-white mb-5">Our Testimonials</h1>
          <div class="row g-4">
            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/72.jpg"
                    class="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 class="card-title mb-3">Carolyn Duncan</h3>
                  <p class="card-text">
                    "I worked with Jennifer over a couple of months and made so
                    much progress in understanding the main issues I have been
                    struggling with, which are all connected. Jennifer listened
                    with compassion, supported me in seeing which areas I need
                    to work on, and gave me the tools to get started - thank
                    you!"
                  </p>
                  <a href="#">
                    <i class="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/13.jpg"
                    class="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 class="card-title mb-3">Brent Powell</h3>
                  <p class="card-text">
                    "Victoria enough. After a mediocre experience with therapy
                    the first-time round, I tried BetterHelp. After just one
                    session, I left the video call feeling lighter and like I
                    could breathe again, after feeling so incredibly clogged in
                    my head and chest. Therapy is a personal experience Thank
                    you for service!"
                  </p>
                  <a href="#">
                    <i class="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    class="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 class="card-title mb-3">Lillie Wright</h3>
                  <p class="card-text">
                    "David is an incredible therapist. I cannot recommend his
                    expertise and help enough. He helped me work through some of
                    the hardest emotional difficulties I have ever encountered
                    in my life and to build techniques to improve my coping
                    mechanisms, relationship issues, and mental fortitude to
                    deal issues."
                  </p>
                  <a href="#">
                    <i class="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/83.jpg"
                    class="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 class="card-title mb-3">Stephen Murphy</h3>
                  <p class="card-text">
                    "Eva has been one of the best therapists I’ve found in my
                    7-yr mental health journey with depression, anxiety, and
                    addiction. She listens carefully and keeps track of my
                    concerns, upcoming life events, and plans/activities we make
                    to cope with negative emotions, though behaviors and keeps
                    me accountable."
                  </p>
                  <a href="#">
                    <i class="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial" class="p-5 bg-primary">
        <div class="container">
          {/* <h1 class="text-center text-white mb-5">Our Testimonials</h1> */}
          <div class="row g-4">
            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/24.jpg"
                    class="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 class="card-title mb-3">Nellie Sanders</h3>
                  <p class="card-text">
                    "Fanny is a wonderful therapist. My time with her was
                    beneficial and exactly what I needed when I needed it. She
                    was able to meet my needs as a Faith Based therapist with a
                    biblical/Christian mindset and values. She was
                    straightforward and would ask me the questions that I needed
                    to really process the situation. If I should have to return
                    I would book with Fanny again."
                  </p>
                  <a href="#">
                    <i class="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/92.jpg"
                    class="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 class="card-title mb-3">Pedro Lee</h3>
                  <p class="card-text">
                    "Sylvia is like my Aunt who just tells it like it is. It’s
                    refreshing. Our sessions are raw and fun. There is no
                    running around anything. We address things head on but with
                    out “pressure.” With Sylvia I know I have someone truly in
                    my corner rooting for me. The work is still immense but we
                    assess and plan accordingly. She is the exact person I was
                    looking for and I’m extremely grateful for her & Docs101!"
                  </p>
                  <a href="#">
                    <i class="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/38.jpg"
                    class="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 class="card-title mb-3">Carrie Morgan</h3>
                  <p class="card-text">
                    "Angel was a phenomenal therapist. When I started I was
                    having many struggles but because of her tools and wisdom, I
                    have truly transformed into a better version of me. She’s
                    the most understanding authentic woman I know I have met and
                    I will definitely return to her as my therapist. She is the
                    exact person I was looking for and I’m extremely grateful
                    for her & Docs101!"
                  </p>
                  <a href="#">
                    <i class="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/5.jpg"
                    class="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 class="card-title mb-3">Andre Morrison</h3>
                  <p class="card-text">
                    "Cynthia has been such a voice of solidarity, wisdom, calm
                    and practical problem-solving through my journey through new
                    parenthood. Her perspective has helped me navigate ups and
                    downs in my life with more clarity and a sense of grounding,
                    and her kindness in listening and flexibility with
                    scheduling has been amazing. I look forward to our sessions
                    and find they’ve given me great support."
                  </p>
                  <a href="#">
                    <i class="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial" class="p-5 bg-primary">
        <div class="container">
          {/* <h1 class="text-center text-white mb-5">Our Testimonials</h1> */}
          <div class="row g-4">
            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/61.jpg"
                    class="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 class="card-title mb-3">Rosemary Jackson</h3>
                  <p class="card-text">
                    "She’s nice, friendly, high energy, listens, tries to pull
                    you out of your shell, always asks what you think and how
                    you feel about things to figure out the best way to help you
                    with what you want to work on, very flexible and
                    accommodating of irregular or busy schedules so if your life
                    is hectic, it’s ideal. Black lady therapist (excellent) and
                    understanding of lgbtq issues. All around great."
                  </p>
                  <a href="#">
                    <i class="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/34.jpg"
                    class="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 class="card-title mb-3">Lewis Hansen</h3>
                  <p class="card-text">
                    "Stacey is a PHENOMENAL therapist. With her help I was able
                    to get through a very low and dark time in my life. She
                    helped me establish tools within myself to overcome emotions
                    and take away the control my mind had over my body. It has
                    been a problem majority of my life and now I am on a true
                    path of recovering from past traumas. I am so glad we were
                    brought together by BetterHelp. I will be forever grateful
                    to Stacey."
                  </p>
                  <a href="#">
                    <i class="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/89.jpg"
                    class="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 class="card-title mb-3">Julia Hansen</h3>
                  <p class="card-text">
                    "Anita has done a great job helping me reprioritize my goals
                    and focus on the positive in life. Her approach in my
                    sessions is always to start with the positive and see life
                    through a glass half full mentality. Her attention to detail
                    has been helpful and her worksheets have been a great
                    resource for me to return to when I feel off track. Thank
                    you Anita, I appreciate all you are doing for my life."
                  </p>
                  <a href="#">
                    <i class="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/50.jpg"
                    class="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 class="card-title mb-3">Greg Nguyen</h3>
                  <p class="card-text">
                    "Deana listens to me expressing my fears and feelings. She
                    is supportive and accepting, then offers some actions and
                    habits to help me develop a more positive mindset. She also
                    texts me after our video sessions to offer encouragement and
                    ways to see my life in a more positive light. A great
                    resource for me to return to when I feel off track. Thank
                    you, I appreciate all you are doing for my life."
                  </p>
                  <a href="#">
                    <i class="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" class="p-5">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <form class="contact-form" ref={form} onSubmit={sendEmail}>
              <h5 class="title">Feedback Form</h5>
              <p class="description">
                Feel free to give us your feedback. It will be recorded and
                might be posted as well.
              </p>
              <div>
                <input
                  type="text"
                  class="form-control rounded border-white mb-3 form-input"
                  id="name"
                  name="feed_name"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  class="form-control rounded border-white mb-3 form-input"
                  name="feed_email"
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
                  placeholder="Feedback"
                  required
                ></textarea>
              </div>
              <div class="submit-button-wrapper">
                <input type="submit" value="Send" />
              </div>
            </form>

            <div class="col-md p-5">
              {/* <h2 class="head">Our Testimonials</h2> */}
              <p class="emergency">
                If you are in a crisis or any other person may be in danger -
                don't use this site. Call{" "}
                <span>
                  <strong>911</strong>
                </span>{" "}
                they can provide you with immediate help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}

export default Testimonials;
