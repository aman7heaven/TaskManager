import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';


const Header = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userLogin = useSelector((state)=>state.userLogin);
  const {userinfo} = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  }

  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand>
        <Link to='/'>Task Manager</Link>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>
          <Link to="/mytasks">My Tasks</Link>
          </Nav.Link>
          <NavDropdown title="Aman Saxena" id="basic-nav-dropdown" bg="light">
          {/* <NavDropdown.Item href="#action/3.4" backgroundColour="light">
              My Profile
            </NavDropdown.Item> */}
            {/* <NavDropdown.Divider /> */}
            <NavDropdown.Item onClick={logoutHandler}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header