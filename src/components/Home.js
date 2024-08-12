// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to the Student Test App</h1>
//       <div>
//         <Link to="/test">Take a Test</Link>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock } from '@fortawesome/free-solid-svg-icons';

// const Home = () => {
//   const mockTests = [
//     { id: 1, name: "Mock Test 1", description: "Description for Mock Test 1", locked: true },
//     { id: 2, name: "Mock Test 2", description: "Description for Mock Test 2", locked: true },
//     // Add more mock tests here
//   ];

//   return (
//     <div className="home-container">
//       <h1>Welcome to the Student Test App</h1>
//       <div className="card-container">
//         {mockTests.map(test => (
//           <Link to={`/test/${test.id}`} className="card" key={test.id}>
//             <h2>{test.name}</h2>
//             <p>{test.description}</p>
//             {test.locked && <FontAwesomeIcon icon={faLock} className="lock-icon" />}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';
// // import logo1 from '../images/logo1.svg'; // Ensure this path is correct

// const Home = () => {
//   const navigate = useNavigate();

//   const handleSignUpClick = () => {
//     navigate('/register');
//   };

//   return (
//     <div className="home-container">
//       <div className="hero-section">
//         <h1>Turn your exams into success stories</h1>
//         <p>AI-powered skills and knowledge assessment software, serving 2.5M+ business and educational users worldwide.</p>
//         <button className="signup-btn" onClick={handleSignUpClick}>Sign up - it's free</button>
//         {/* <p className="no-credit">No credit card required</p> */}
//       </div>
//       <div className="image-section">
//         <img src= "link" alt="Testportal" />
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';
// // import logo1 from '../images/logo1.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faUserShield, faClipboardCheck, faClipboardList, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
// import CountUp from 'react-countup';
// import { useSpring, animated } from 'react-spring';

// const Home = () => {
//   const navigate = useNavigate();

//   const handleSignUpClick = () => {
//     navigate('/register');
//   };

//   const mockTests = [
//     { id: 1, name: "Mock Test 1", description: "Description for Mock Test 1", locked: true },
//     { id: 2, name: "Mock Test 2", description: "Description for Mock Test 2", locked: false },
//     { id: 3, name: "Mock Test 3", description: "Description for Mock Test 3", locked: true },
//     { id: 4, name: "Mock Test 4", description: "Description for Mock Test 4", locked: false },
//   ];

//   const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

//   return (
//     <div className="home-container">
//       <animated.div style={fadeIn} className="hero-section">
//         <h1>Turn your exams into success stories</h1>
//         <p>AI-powered skills and knowledge assessment software, serving 2.5M+ business and educational users worldwide.</p>
//         <button className="signup-btn" onClick={handleSignUpClick}>Sign up - it's free</button>
//       </animated.div>
//       <animated.div style={fadeIn} className="about-section">
//         <p>
//           At Saanvi Technology Solutions, we bridge the gap between education and employment by offering hands-on, on-the-job experience.
//           Whether you're a student, a recent graduate, or someone looking to pivot careers, our platform connects you with industry
//           leaders ready to mentor and guide you. Take the first step toward your dream career by gaining the skills and experience
//           that employers value most. Start your journey today!
//         </p>
//       </animated.div>
//       <animated.div style={fadeIn} className="image-section">
//         <img src= "Link" alt="Testportal" />
//       </animated.div>
//       <animated.div style={fadeIn} className="statistics-section">
//         <div className="stat-card">
//           <FontAwesomeIcon icon={faUserShield} className="stat-icon" />
//           <div className="stat-info">
//             <h3><CountUp end={5.9} decimals={1} suffix=" Crore" duration={2} /></h3>
//             <p>Registered Students</p>
//           </div>
//         </div>
//         <div className="stat-card">
//           <FontAwesomeIcon icon={faClipboardCheck} className="stat-icon" />
//           <div className="stat-info">
//             <h3><CountUp end={4} suffix=" Lacs" duration={2} /></h3>
//             <p>Student Selections</p>
//           </div>
//         </div>
//         <div className="stat-card">
//           <FontAwesomeIcon icon={faClipboardList} className="stat-icon" />
//           <div className="stat-info">
//             <h3><CountUp end={242} suffix=" Crore" duration={2} /></h3>
//             <p>Tests Attempted</p>
//           </div>
//         </div>
//         <div className="stat-card">
//           <FontAwesomeIcon icon={faChalkboardTeacher} className="stat-icon" />
//           <div className="stat-info">
//             <h3><CountUp end={5.5} decimals={1} suffix=" Crore" duration={2} /></h3>
//             <p>Classes Attended</p>
//           </div>
//         </div>
//       </animated.div>
//       <animated.div style={fadeIn} className="mock-test-section">
//         {mockTests.map(test => (
//           <div className="mock-test-card" key={test.id}>
//             {test.locked && <FontAwesomeIcon icon={faLock} className="lock-icon" />}
//             <h3>{test.name}</h3>
//             <p>{test.description}</p>
//           </div>
//         ))}
//       </animated.div>
//     </div>
//   );
// };

// export default Home;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';
// // import logo1 from '../images/logo1.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faUserShield, faClipboardCheck, faClipboardList, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
// import CountUp from 'react-countup';
// import { useSpring, animated } from 'react-spring';

// const Home = () => {
//   const navigate = useNavigate();

//   const handleSignUpClick = () => {
//     navigate('/register');
//   };

//   const mockTests = [
//     { id: 1, name: "Mock Test 1", description: "Description for Mock Test 1", locked: true },
//     { id: 2, name: "Mock Test 2", description: "Description for Mock Test 2", locked: false },
//     { id: 3, name: "Mock Test 3", description: "Description for Mock Test 3", locked: true },
//     { id: 4, name: "Mock Test 4", description: "Description for Mock Test 4", locked: false },
//   ];

//   const springProps = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

//   return (
//     <div className="home-container">
//       <animated.div style={springProps} className="hero-section">
//         <h1>Turn your exams into success stories</h1>
//         <p>AI-powered skills and knowledge assessment software, serving 2.5M+ business and educational users worldwide.</p>
//         <button className="signup-btn" onClick={handleSignUpClick}>Sign up - it's free</button>
//       </animated.div>
//       <animated.div style={springProps} className="about-section">
//         <p>
//           At STS, we bridge the gap between education and employment by offering hands-on, on-the-job experience.
//           Whether you're a student, a recent graduate, or someone looking to pivot careers, our platform connects you with industry
//           leaders ready to mentor and guide you. Take the first step toward your dream career by gaining the skills and experience
//           that employers value most. Start your journey today!
//         </p>
//       </animated.div>
//       <animated.div style={springProps} className="image-section">
//         <img src="Link" alt="Testportal" />
//       </animated.div>
//       <animated.div style={springProps} className="statistics-section">
//         <div className="stat-card">
//           <FontAwesomeIcon icon={faUserShield} className="stat-icon" />
//           <div className="stat-info">
//             <h3><CountUp end={5.9} decimals={1} suffix=" Crore" duration={8} /></h3>
//             <p>Registered Students</p>
//           </div>
//         </div>
//         <div className="stat-card">
//           <FontAwesomeIcon icon={faClipboardCheck} className="stat-icon" />
//           <div className="stat-info">
//             <h3><CountUp end={4} suffix=" Lacs" duration={5} /></h3>
//             <p>Student Selections</p>
//           </div>
//         </div>
//         <div className="stat-card">
//           <FontAwesomeIcon icon={faClipboardList} className="stat-icon" />
//           <div className="stat-info">
//             <h3><CountUp end={242} suffix=" Crore" duration={10} /></h3>
//             <p>Tests Attempted</p>
//           </div>
//         </div>
//         <div className="stat-card">
//           <FontAwesomeIcon icon={faChalkboardTeacher} className="stat-icon" />
//           <div className="stat-info">
//             <h3><CountUp end={5.5} decimals={1} suffix=" Crore" duration={10} /></h3>
//             <p>Workshop Attended</p>
//           </div>
//         </div>
//       </animated.div>
//       <animated.div style={springProps} className="mock-test-section">
//         {mockTests.map(test => (
//           <div className="mock-test-card" key={test.id}>
//             {test.locked && <FontAwesomeIcon icon={faLock} className="lock-icon" />}
//             <h3>{test.name}</h3>
//             <p>{test.description}</p>
//           </div>
//         ))}
//       </animated.div>
//     </div>
//   );
// };

// export default Home;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';
// import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faUserShield, faClipboardCheck, faClipboardList, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
// import CountUp from 'react-countup';

// const Home = () => {
//   const navigate = useNavigate();

//   const handleSignUpClick = () => {
//     navigate('/register');
//   };

//   const mockTests = [
//     { id: 1, name: "Mock Test 1", description: "Description for Mock Test 1", locked: true },
//     { id: 2, name: "Mock Test 2", description: "Description for Mock Test 2", locked: false },
//     { id: 3, name: "Mock Test 3", description: "Description for Mock Test 3", locked: true },
//     { id: 4, name: "Mock Test 4", description: "Description for Mock Test 4", locked: false },
//   ];

//   return (
//     <div className="home-container">
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="hero-section">
//         <h1>Turn your exams into success stories</h1>
//         <p>AI-powered skills and knowledge assessment software, serving 2.5M+ business and educational users worldwide.</p>
//         <button className="signup-btn" onClick={handleSignUpClick}>Sign up - it's free</button>
//       </motion.div>

//       <div className="about-section">
//         <div className="about-header">ABOUT STS</div>
//         <div className="about-content">
//           <p>
//             At STS, we bridge the gap between education and employment by offering hands-on, on-the-job experience.
//             Whether you're a student, a recent graduate, or someone looking to pivot careers, our platform connects
//             you with industry leaders ready to mentor and guide you.
//           </p>
//           <p>
//             Take the first step toward your dream career by gaining the skills and experience that employers value most.
//             Start your journey today!
//           </p>
//         </div>
//         <a href="https://saanvitechs.com/" target="_blank" rel="noopener noreferrer" className="read-more-btn">Read More</a>
//       </div>

//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="statistics-section">
//         <div className="stat-card">
//           <FontAwesomeIcon icon={faUserShield} className="stat-icon" />
//           <div className="stat-info">
//             <h3><CountUp end={5.9} decimals={1} suffix=" Crore" duration={2} /></h3>
//             <p>Registered Students</p>
//           </div>
//         </div>
//         <div className="stat-card">
//           <FontAwesomeIcon icon={faClipboardCheck} className="stat-icon" />
//           <div className="stat-info">
//             <h3><CountUp end={4} suffix=" Lacs" duration={2} /></h3>
//             <p>Student Selections</p>
//           </div>
//         </div>
//         <div className="stat-card">
//           <FontAwesomeIcon icon={faClipboardList} className="stat-icon" />
//           <div className="stat-info">
//             <h3><CountUp end={242} suffix=" Crore" duration={2} /></h3>
//             <p>Tests Attempted</p>
//           </div>
//         </div>
//         <div className="stat-card">
//           <FontAwesomeIcon icon={faChalkboardTeacher} className="stat-icon" />
//           <div className="stat-info">
//             <h3><CountUp end={5.5} decimals={1} suffix=" Crore" duration={2} /></h3>
//             <p>Classes Attended</p>
//           </div>
//         </div>
//       </motion.div>

//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="mock-test-section">
//         {mockTests.map(test => (
//           <div className="mock-test-card" key={test.id}>
//             {test.locked && <FontAwesomeIcon icon={faLock} className="lock-icon" />}
//             <h3>{test.name}</h3>
//             <p>{test.description}</p>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import TestSeriesSection from './TestSeriesSection';
import './Home.css';
import './WhyPregradSection.css';
import leftArrowIcon from './images/Down.png'; // Replace with your actual path
import rightArrowIcon from './images/Up.png'; // Replace with your actual path
import hero from './images/hero.svg'; // Ensure this path is correct
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserShield, faClipboardCheck, faClipboardList, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

const Home = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/register');
  };

  // const mockTests = [
  //   { id: 1, name: "Mock Test 1", description: "Description for Mock Test 1", locked: true },
  //   { id: 2, name: "Mock Test 2", description: "Description for Mock Test 2", locked: false },
  //   { id: 3, name: "Mock Test 3", description: "Description for Mock Test 3", locked: true },
  //   { id: 4, name: "Mock Test 4", description: "Description for Mock Test 4", locked: false },
  // ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <img src={rightArrowIcon} alt="Next" className="arrow next" />,
    prevArrow: <img src={leftArrowIcon} alt="Previous" className="arrow prev" />
  };

  return (
    <div className="home-container">
      <div className="hero-section" style={{ backgroundImage: `url(${hero})` }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="hero-text">
        <div align = 'center'>
          <h1>Turn your exams into success stories</h1>
          </div>
          <p>AI-powered skills and knowledge assessment software, serving 2.5M+ business and educational users worldwide.</p>
          <div align = 'center'>
          <button className="signup-btn" onClick={handleSignUpClick}>Sign up - it's free</button>
          </div>
        </motion.div>
      </div>

      <div className="about-section">
        <div className="about-header">ABOUT STS</div>
        <div className="about-content">
          <p>
            At STS, we bridge the gap between education and employment by offering hands-on, on-the-job experience.
            Whether you're a student, a recent graduate, or someone looking to pivot careers, our platform connects
            you with industry leaders ready to mentor and guide you.
          </p>
          <p>
            Take the first step toward your dream career by gaining the skills and experience that employers value most.
            Start your journey today!
          </p>
        </div>
        <a href="https://saanvitechs.com/about.php" target="_blank" rel="noopener noreferrer" className="read-more-btn">Read More</a>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} className="statistics-section">
        <div className="stat-card">
          <FontAwesomeIcon icon={faUserShield} className="stat-icon" />
          <div className="stat-info">
            <h3><CountUp end={5.9} decimals={1} suffix=" K" duration={15} /></h3>
            <p>Registered Students</p>
          </div>
        </div>
        <div className="stat-card">
          <FontAwesomeIcon icon={faClipboardCheck} className="stat-icon" />
          <div className="stat-info">
            <h3><CountUp end={3.2} suffix=" K" duration={15} /></h3>
            <p>Student Selections</p>
          </div>
        </div>
        <div className="stat-card">
          <FontAwesomeIcon icon={faClipboardList} className="stat-icon" />
          <div className="stat-info">
            <h3><CountUp end={5.3} suffix=" K" duration={15} /></h3>
            <p>Tests Attempted</p>
          </div>
        </div>
        <div className="stat-card">
          <FontAwesomeIcon icon={faChalkboardTeacher} className="stat-icon" />
          <div className="stat-info">
            <h3><CountUp end={5.5} decimals={1} suffix=" K" duration={15} /></h3>
            <p>Classes Attended</p>
          </div>
        </div>
      </motion.div>

      <TestSeriesSection />

      <div className="why-pregrad-section">
        <div className="content-box">
          <div className="content-background-overlay"></div>
          <div className="content-header">
            <h4 className="content-title">Why STS</h4>
          </div>
          <div className="content-subheader">
            <h4 className="content-description">Because, if you can start your career before graduation then, WHY NOT!</h4>
          </div>
          <div className="content-detail">
            <h4 className="content-detail-text">Invest in your career with our top-of-the-line industry-aligned courses that provide project-based learning, utilizing our time-tested, result-oriented pedagogy. Choose nothing but the best in the industry for your career!</h4>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Home;
