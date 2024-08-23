import React from 'react';
import { Link } from 'react-router-dom';
import './Mocks.css'; // Include the CSS file for styling
import { Box, Paper, Grid } from '@mui/material';
import { useState, useEffect } from 'react';

const topics = [
  { title: 'General Aptitude', content: [{ name: 'Arithmetic Aptitude', path: '/arithmetic-aptitude' }, { name: 'Data Interpretation', path: '/data-interpretation' }, { name: 'Online Aptitude Test', path: '/test/online-aptitude' }] },
  { title: 'Verbal & Reasoning', content: [{ name: 'Verbal Ability', path: '/verbal-ability' }, { name: 'Logical Reasoning', path: '/logical-reasoning' }, { name: 'Verbal Reasoning', path: '/verbal-reasoning' }] },
  { title: 'Interview', content: [{ name: 'Placement Papers', path: '/placement-papers' }, { name: 'Group Discussion', path: '/group-discussion' }, { name: 'HR Interview', path: '/hr-interview' }] },
  { title: 'Engineering', content: [{ name: 'Mechanical Engineering', path: '/mechanical-engineering' }, { name: 'Civil Engineering', path: '/test/civil-engineering' }, { name: 'Chemical Engineering', path: '/test/chemical-engineering' }] },
  { title: 'Programming', content: [{ name: 'C Programming', path: '/c-programming' }, { name: 'C++ Programming', path: '/cpp-programming' }, { name: 'Java Programming', path: '/java-programming' }] },
  // { title: 'Online Tests',  content: [{ name: 'Aptitude Test', path: '/test-page' }, { name: 'Logical Reasoning Test', path: '/logical-test' }, { name: 'C Programming Test', path: '/c-programming-test' }] },
  { title: 'Technical MCQs', content: [{ name: 'Networking Questions', path: '/networking' }, { name: 'Database Questions', path: '/database' }, { name: 'Operating System', path: '/operating-system' }] },
  { title: 'Technical Short Answers', content: [{ name: 'Software Testing', path: '/software-testing' }, { name: 'MySQL', path: '/my-sql' }] }
];


const Mocks = () => {

  const token = localStorage.getItem('token'); // Replace with your actual token
  console.log(token);

  const [data, setData] = useState(null);
  useEffect(() => {

    fetch('http://localhost:8080/api/main-topic?mid=1', {
      method: 'GET',
      headers: {
        'Authorization': `${token}`, // Adding the authorization token
        'Content-Type': 'application/json',
      },
    })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [token]); // Empty dependency array ensures this effect runs once on mount

  return (
    <Box style={{ display: 'flex', justifyContent: 'center' }}>
       <div style={{ marginTop: '5rem' }}>
         <h1>Analyze Your Depth</h1>
         <h1>ugwu{data}</h1>
         <Box sx={{ padding: '50px' }}>
         <Grid container spacing={2} sx={{ height: '40vh' }}>
           {topics.map((topic, index) => (
              <Grid item xs={6} lg={3} md={4} key={index} className="">
              <Paper elevation={3} 
                sx={{
                    padding: 2,
                    height: '200px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'},
                    }}
              >
               <div>
               <h3 style={{ color: '#28a745'}}>{topic.title}</h3>
               <ul>
                 {topic.content.map((item, idx) => (
                   <li key={idx}>
                     <Link to={item.path} style={{ textDecoration: 'none', color: '#333' }}>{item.name}</Link>
                   </li>
                 ))}
               </ul>
               </div>
              </Paper>
              </Grid>
           ))}
          </Grid>
          </Box>
       </div>
    </Box>
  );
};

export default Mocks;
//   <div className="content">
    //     <h1>Analyze Your Depth</h1>
    //     <div className="mock-tests-grid">
    //       {topics.map((topic, index) => (
    //         <div key={index} className="topic-card">
    //           <h3>{topic.title}</h3>
    //           <ul>
    //             {topic.content.map((item, idx) => (
    //               <li key={idx}>
    //                 <Link to={item.path}>{item.name}</Link>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //       ))}
    //     </div>
    //   </div>