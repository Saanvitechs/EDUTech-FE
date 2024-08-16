// import React from 'react';
// import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';

// const CustomNavbar = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="custom-navbar">
//       <Container>
//         <Navbar.Brand as={Link} to="/" className="navbar-logo">
//           Testportal
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
//           <Nav>
//             <NavDropdown title="Who it's for" id="basic-nav-dropdown">
//               <NavDropdown.Item as={Link} to="/">For Beginners</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/">For Graduates</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/">For Students</NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown title="Test your prep" id="test-prep-dropdown">
//               {/* Direct links to test pages without authentication check */}
//               <NavDropdown.Item as={Link} to="/test/1">Test 1</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/test/2">Test 2</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/test/3">Test 3</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link as={Link} to="/membership-plans">Pricing</Nav.Link>
//             <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
//             <Nav.Link as={Link} to="/login">Login</Nav.Link>
//             <Nav.Link as={Link} to="/register" className="signup-link">Sign up</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default CustomNavbar;

import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../hooks/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const CustomNavbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const username = localStorage.getItem('name');
  const handleLogout = () => {
    logout();
    navigate('/login');
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
              <NavDropdown.Item as={Link} to="/test/1">Test 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/test/2">Test 2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/test/3">Test 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/membership-plans">Pricing</Nav.Link>
            <Nav.Link as={Link} to="/resources">Resources</Nav.Link>

            {isAuthenticated ? (
              <NavDropdown
                title={<FontAwesomeIcon icon={faUserCircle} size="lg" />}
                id="profile-dropdown"
                alignRight
              >
                <NavDropdown.Item as={Link} to="">{username}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/my-profile">View Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register" className="signup-link">Sign up</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
