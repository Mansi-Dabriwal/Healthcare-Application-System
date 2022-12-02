import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import '../styles/Navbarcomp.css';
import { Link } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Logindoc from '../pages/Logindoc';

function Navbarcomp() {
  return (
    <nav id="navbar-example2" class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
    <div class="container">
      <a href="#" class="navbar-brand">Doc101</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navmenu">
        <ul class="navbar-nav ms-auto nav-pills">
          <li class="nav-item">
          
            <a href="Home" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="About" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="#questions" class="nav-link">FAQ</a>
          </li>
          <li class="nav-item">
            <a href="#testimonials" class="nav-link">Testimonials</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Contact</a>
          </li>
          <li class="nav-item">
            <a href="Logindoc" class="nav-link">Login</a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link">Get Started</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  
  )
}

export default Navbarcomp