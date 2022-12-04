import React from 'react';
import '../styles/About.css';
import Navbar from '../components/Navbarcomp';
import doctor4 from '../Images/doctor4.svg';
import Footer from '../components/Footercomp';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




function About() {
  return ( 

    <div>
        <Navbar></Navbar>
    <section id="about" class="p-5">
    <div class="container">
  
      <div class="row align-items-center justify-content-between">
        <div class="col-md">
          <img src={doctor4} class="img-fluid" alt="" />
        </div>
        <div class="col-md p-5">
          <h2 class="head">Our Mission</h2>
          <p class="lead">
          Making professional therapy accessible, affordable, and convenient — so anyone who struggles with life’s challenges can get help, anytime and anywhere.
          </p>
         
          
        </div>
      </div>
    </div>
  </section>

  <section id="sucess" class="p-5 bg-primary">
        <div class="container">
          <h1 class="text-center text-white mb-5">Our Success Stories</h1>
          <div class="row g-4">
            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" class="rounded-circle mb-3" alt="" />
                  <h3 class="card-title mb-3">Laura Kaise</h3>
                  <p class="card-text">
                  I've now been working with my BetterHelp counselor, Aiko, for about two months and have found her to be an extreme source of 
                  comfort and support. Whenever I need to talk about anything, I log on and pour my heart out. Aiko always responds with insightful and helpful advice. 
                  The biggest achievement I've made is, truly, fighting for myself. 
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
                  <img src="https://randomuser.me/api/portraits/men/88.jpg" class="rounded-circle mb-3" alt="" />
                  <h3 class="card-title mb-3">Steve Andreson</h3>
                  <p class="card-text">
                  I have now been working with Sheilah for about 4 weeks, and can confidently say that I am a lot less anxious about my career path now than
                   when I first signed up. I had been growing restless the weeks prior to signing up, and I am so much better off now than I was before. Sheilah helped me
                    understand that whenever making big life decisions. 
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
                  <img src="https://randomuser.me/api/portraits/women/79.jpg" class="rounded-circle mb-3" alt="" />
                  <h3 class="card-title mb-3">Martha Smith</h3>
                  <p class="card-text">
                  I had been depressed and lost, and I didn't know how to handle life, somehow. 
                  I was having panic attacks about how my future is going to look like in regard to my financial independence. Overall, 
                  thanks to Michelle's support on BetterHelp, I improved my self-confidence, and got into a healthier and more positive 
                  frame of mind.
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
                  <img src="https://randomuser.me/api/portraits/men/82.jpg" class="rounded-circle mb-3" alt="" />
                  <h3 class="card-title mb-3">Joe Root</h3>
                  <p class="card-text">
                  My counselor helped me with discussing my current situation and thinking about it in a different way than I was on my own. 
                  Thinking about it more objectively and seeing it from a different, more reasonable point of view helped me a lot. Even just 
                  discussing my problems out loud made me realize what I was doing wrong 
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

      <section className='doc'>
		<h2 class="text-center text-Black mb-5">Our Top Doctors</h2>
		<ul class="list-group list-group-horizontal align-items-stretch flex-wrap">
			<li class="list-group-item border-0">
				<div class="card my-3">
					<img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="card-img-top"/>
					<div class="card-body">
          <h3 class="card-title mb-3">Jay Beri</h3>
          <h6 class="card-title">Specialization</h6>
						<p class="card-text">Couple</p>
					
					</div>
				</div>
			</li>
			<li class="list-group-item border-0">
				<div class="card my-3">
					<img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="card-img-top"/>
					<div class="card-body">
          <h3 class="card-title mb-3">Jeny Ross</h3>
					<h6 class="card-title">Specialization</h6>
						<p class="card-text">Individual</p>
					
					</div>
				</div>
			</li>
			<li class="list-group-item border-0">
				<div class="card my-3">
					<img src="https://images.pexels.com/photos/7407063/pexels-photo-7407063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top"/>
					<div class="card-body">
          <h3 class="card-title mb-3">Gabriel Specter</h3>
          <h6 class="card-title">Specialization</h6>
						<p class="card-text">Child</p>
						
					</div>
				</div>
			</li>
			<li class="list-group-item border-0">
				<div class="card my-3">
					<img src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top"/>
					<div class="card-body">
          <h3 class="card-title mb-3">Lisa Hadson</h3>
						<h6 class="card-title">Specialization</h6>
						<p class="card-text">Individual</p>
						
					</div>
				</div>
			</li>
			<li class="list-group-item border-0">
				<div class="card my-3">
					<img src="https://images.pexels.com/photos/8376221/pexels-photo-8376221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top"/>
					<div class="card-body">
          <h3 class="card-title mb-3">Rachel Hyden</h3>
						<h6 class="card-title">Specialization</h6>
						<p class="card-text">Child</p>
						
					</div>
				</div>
			</li>
			<li class="list-group-item border-0">
				<div class="card my-3">
					<img src="https://images.pexels.com/photos/4989135/pexels-photo-4989135.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top"/>
					<div class="card-body">
          <h3 class="card-title mb-3">Mike Das</h3>
						<h6 class="card-title">Specialization</h6>
						<p class="card-text">Couple</p>
						
					</div>
				</div>
			</li>
			<li class="list-group-item border-0">
				<div class="card my-3">
					<img src="https://images.pexels.com/photos/6098047/pexels-photo-6098047.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top"/>
					<div class="card-body">
          <h3 class="card-title mb-3">Liu Gavour</h3>
						<h6 class="card-title">Specialization</h6>
						<p class="card-text">Couple</p>
						
					</div>
				</div>
			</li>
			<li class="list-group-item border-0">
				<div class="card my-3">
					<img src="https://images.pexels.com/photos/5327914/pexels-photo-5327914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top"/>
					<div class="card-body">
          <h3 class="card-title mb-3">Kane williams</h3>
						<h6 class="card-title">Specialization</h6>
						<p class="card-text">Individual</p>
						
					</div>
				</div>
			</li>

		</ul>
	</section>
      
<Footer></Footer>
      
  </div>
  )
}

export default About