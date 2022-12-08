import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { CiSettings } from 'react-icons/fa';

function DoctorNavBar() {
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
            <a href="#scrollspyHeading1" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="/doctor" class="nav-link">Upcoming Appointments</a>
          </li>
          <li class="nav-item">
            <a href="/diagnosePatient" class="nav-link">Diagnose Patient</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default DoctorNavBar;