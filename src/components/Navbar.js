// import React from 'react';
// import './Navbar.css';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <Link to="/" className="navbar-logo">Testportal</Link>
//       <div className="nav-links">
//         <div className="dropdown">
//           <button className="dropbtn">Who it's for</button>
//           <div className="dropdown-content">
//             <Link to="/">For Beginners</Link>
//             <Link to="/">For Graduates</Link>
//             <Link to="/">For Students</Link>
//           </div>
//         </div>
//         <div className="dropdown">
//           <button className="dropbtn">Test your prep</button>
//           <div className="dropdown-content">
//             <Link to="/">Test 1</Link>
//             <Link to="/">Test 2</Link>
//             <Link to="/">Test 3</Link>
//           </div>
//         </div>
//         <Link to="/pricing" className="nav-link">Pricing</Link>
//         <Link to="/resources" className="nav-link">Resources</Link>
//       </div>
//       <div className="nav-auth">
//         <Link to="/login" className="nav-link">Login</Link>
//         <Link to="/register" className="nav-link signup">Sign up</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const CustomNavbar = () => {
  const navigate = useNavigate();

  const handleTestRedirect = (testPath) => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/register');
    } else {
      navigate(testPath);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-logo">
          Testportal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavDropdown title="Who it's for" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">For Beginners</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">For Graduates</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">For Students</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Test your prep" id="test-prep-dropdown">
              <NavDropdown.Item onClick={() => handleTestRedirect('/test1')}>Test 1</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleTestRedirect('/test2')}>Test 2</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleTestRedirect('/test3')}>Test 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
            <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register" className="signup-link">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
