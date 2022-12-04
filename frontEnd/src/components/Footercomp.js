import React from 'react'
import '../styles/Footer.css';


function Footercomp() {
    return (
        <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Individual Therapy</a></li>
                            <li><a href="#">Couple Therapy</a></li>
                            <li><a href="#">Teen Therapy</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Pages</h3>
                        <ul>
                            <li><a href="#scrollspyHeading1">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#questions">FAQ</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Get Started</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>DOC 101</h3>
                        <p>Doc101 will pair you with a qualified therapist from their network of 29,000 professionals. Ask your therapist for criticism, recommendations, and direction so you can move forward..</p>
                    </div>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">DOC 101 © 2022</p>
            </div>
        </footer>
    </div>
    )
}

export default Footercomp