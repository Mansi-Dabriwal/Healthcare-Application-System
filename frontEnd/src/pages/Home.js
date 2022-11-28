import React from 'react';
import Navbar from '../components/Navbarcomp';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
import doctor1 from '../Images/doctor1.svg';
import doctor2 from '../Images/doctor2.svg';
import img1 from'../Images/img1.jpg'
import img2 from'../Images/img1.jpg'
import img3 from'../Images/img1.jpg'
import'../styles/Home.css';


function Home() {
  return (
  
    <div>
      <Navbar></Navbar>
       
    <section class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start" id="scrollspyHeading1">
    <div class="container">
      <div class="d-sm-flex align-items-center justify-content-between">
        <div>
          <h1>How To Get Started ?<span class="" style={{color: "#3F3D56"}}> dolor sit </span></h1>
          <p class="lead my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
          <button class="btn btn-outline-light btn-lg" data-bs-toggle="modal" data-bs-target="#enroll">
            Make an Appointment
          </button>
        </div>
        <img class="img-fluid w-50 d-none d-sm-block" src={doctor1} alt="" />
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
          <h2>Excellent service at our clinic</h2>
          <p class="lead">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Similique deleniti possimus magnam corporis ratione facere!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            reiciendis eius autem eveniet mollitia, at asperiores suscipit
            quae similique laboriosam iste minus placeat odit velit quos,
            nulla architecto amet voluptates?
          </p>
          <button type="button" class="btn btn-primary" id="liveToastBtn"><a href="./membership.html" class="redirect-mem">Read More</a></button>
        </div>
      </div>
    </div>
  </section>

  <section class="p-5" id="products">
    <h2 class="text-center mb-4">Our Products</h2>
    <div class="container">
      <div class="row text-center g-4">
        <div class="col-md">
          <div class="card">
            <img src={img1} class="card-img-top" alt="img1" />
            <div class="card-body text-center">
              <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est voluptates cumque recusandae minima aperiam ullam nesciunt quo vero odit facilis.</p>
            </div>
          </div>
        </div>
        <div class="col-md">
          <div class="card">
            <img src={img2} class="card-img-top" alt="img2"/>
            <div class="card-body text-center">
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis ab saepe repellat possimus, cumque nostrum ad pariatur repudiandae voluptas.</p>
            </div>
          </div>
        </div>
        <div class="col-md">
          <div class="card">
          <img src={img3} class="card-img-top" alt="img2"/>
            <div class="card-body text-center">
              <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda aliquam eaque amet et quae, earum voluptate vel dolores inventore.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section id="questions" class="p-5">
    <div class="container">
      <h2 class="text-center mb-4">Frequently Asked Questions</h2>
      <div class="accordion accordion-flush" id="questions">
        
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#question-one">
              Where exactly are you located?
            </button>
          </h2>
          <div id="question-one" class="accordion-collapse collapse" data-bs-parent="#questions">
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              beatae fuga animi distinctio perspiciatis adipisci velit maiores
              totam tempora accusamus modi explicabo accusantium consequatur,
              praesentium rem quisquam molestias at quos vero. Officiis ad
              velit doloremque at. Dignissimos praesentium necessitatibus
              natus corrupti cum consequatur aliquam! Minima molestias iure
              quam distinctio velit.
            </div>
          </div>
        </div>
       
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#question-two">
              How much does it cost?
            </button>
          </h2>
          <div id="question-two" class="accordion-collapse collapse" data-bs-parent="#questions">
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              beatae fuga animi distinctio perspiciatis adipisci velit maiores
              totam tempora accusamus modi explicabo accusantium consequatur,
              praesentium rem quisquam molestias at quos vero. Officiis ad
              velit doloremque at. Dignissimos praesentium necessitatibus
              natus corrupti cum consequatur aliquam! Minima molestias iure
              quam distinctio velit.
            </div>
          </div>
        </div>
       
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#question-three">
              What do I need to Know?
            </button>
          </h2>
          <div id="question-three" class="accordion-collapse collapse" data-bs-parent="#questions">
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              beatae fuga animi distinctio perspiciatis adipisci velit maiores
              totam tempora accusamus modi explicabo accusantium consequatur,
              praesentium rem quisquam molestias at quos vero. Officiis ad
              velit doloremque at. Dignissimos praesentium necessitatibus
              natus corrupti cum consequatur aliquam! Minima molestias iure
              quam distinctio velit.
            </div>
          </div>
        </div>
       
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#question-four">
              How Do I sign up?
            </button>
          </h2>
          <div id="question-four" class="accordion-collapse collapse" data-bs-parent="#questions">
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              beatae fuga animi distinctio perspiciatis adipisci velit maiores
              totam tempora accusamus modi explicabo accusantium consequatur,
              praesentium rem quisquam molestias at quos vero. Officiis ad
              velit doloremque at. Dignissimos praesentium necessitatibus
              natus corrupti cum consequatur aliquam! Minima molestias iure
              quam distinctio velit.
            </div>
          </div>
        </div>
       
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#question-five">
              Consultation with a specialized physician
            </button>
          </h2>
          <div id="question-five" class="accordion-collapse collapse" data-bs-parent="#questions">
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              beatae fuga animi distinctio perspiciatis adipisci velit maiores
              totam tempora accusamus modi explicabo accusantium consequatur,
              praesentium rem quisquam molestias at quos vero. Officiis ad
              velit doloremque at. Dignissimos praesentium necessitatibus
              natus corrupti cum consequatur aliquam! Minima molestias iure
              quam distinctio velit.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="testimonials" class="p-5 bg-primary">
    <div class="container">
      <h2 class="text-center text-white mb-5">Feedback from our favourite customers</h2>
      <div class="row g-4">
        <div class="col-md-6 col-lg-3">
          <div class="card bg-light">
            <div class="card-body text-center">
              <img src="https://randomuser.me/api/portraits/men/11.jpg" class="rounded-circle mb-3" alt="" />
              <h3 class="card-title mb-3">John Doe</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
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
              <h3 class="card-title mb-3">Jane Doe</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
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

    </div>
  )
}

export default Home