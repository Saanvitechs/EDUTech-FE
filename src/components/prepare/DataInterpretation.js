import React from 'react';
import './ArithmeticAptitude.css'; // Include CSS for styling
import Dashboard from './Dashboard.js'; // Reuse the existing dashboard component

const ArithmeticAptitude = () => {
  return (
    <div className="arithmetic-aptitude-container">
      <Dashboard /> {/* Display the dashboard on the left side */}
      
      <div className="content">
        <h1>Data</h1>
        
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
