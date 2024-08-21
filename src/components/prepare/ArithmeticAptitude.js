// import React from 'react';
// import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

// const studyMaterial = [
//   {
//     title: 'Basic Concepts of Arithmetic',
//     content: 'Understanding the fundamental operations such as addition, subtraction, multiplication, and division.',
//   },
//   {
//     title: 'Number Systems',
//     content: 'An overview of various number systems, including integers, decimals, fractions, and prime numbers.',
//   },
//   {
//     title: 'Ratio and Proportion',
//     content: 'Learn how to solve problems involving ratios and proportions.',
//   },
//   {
//     title: 'Percentage',
//     content: 'Master the concept of percentages and how to calculate them in various scenarios.',
//   },
//   {
//     title: 'Time and Work',
//     content: 'Solve problems related to time, work, and efficiency.',
//   },
//   // Add more study material as needed
// ];

// const ArithmeticAptitude = () => {
//   return (
//     <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
//       <Typography variant="h3" gutterBottom style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '40px' }}>
//         Arithmetic Aptitude Study Material
//       </Typography>
//       <Grid container spacing={4}>
//         {studyMaterial.map((material, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card raised>
//               <CardContent>
//                 <Typography variant="h5" gutterBottom>
//                   {material.title}
//                 </Typography>
//                 <Typography variant="body1">
//                   {material.content}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default ArithmeticAptitude;
import React from 'react';
import './ArithmeticAptitude.css'; // Include CSS for styling
import Dashboard from './Dashboard.js'; // Reuse the existing dashboard component

const ArithmeticAptitude = () => {
  return (
    <div className="arithmetic-aptitude-container">
      <Dashboard /> {/* Display the dashboard on the left side */}
      
      <div className="content">
        <h1>Arithmetic Aptitude</h1>
        
        <p>Arithmetic aptitude is a key skill that involves basic mathematical operations such as addition, subtraction, multiplication, and division. It is commonly tested in various competitive exams and is an essential skill in everyday life.</p>
        
        <h2>Topics Covered:</h2>
        <ul>
          <li>Percentage</li>
          <li>Profit and Loss</li>
          <li>Simple and Compound Interest</li>
          <li>Time and Work</li>
          <li>Ratio and Proportion</li>
        </ul>
        
        <h2>Sample Problem:</h2>
        <p><strong>Problem:</strong> If a person sells an item for $600 with a 20% profit, what was the cost price of the item?</p>
        
        <h3>Solution:</h3>
        <p>
          Let the cost price be $x. <br />
          According to the problem:<br />
          Selling Price = Cost Price + Profit<br />
          600 = x + 0.2x<br />
          600 = 1.2x<br />
          x = 600 / 1.2 = $500<br />
          <strong>Cost Price = $500</strong>
        </p>
        
        <h2>Further Reading:</h2>
        <p>To explore more on Arithmetic Aptitude, visit the <a href="https://www.geeksforgeeks.org/arithmetic-aptitude/">GeeksforGeeks Arithmetic Aptitude page</a>.</p>
      </div>
    </div>
  );
};

export default ArithmeticAptitude;
