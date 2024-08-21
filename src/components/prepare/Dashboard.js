import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';

const topics = [
  { name: 'Arithmetic Aptitude', path: '/arithmetic-aptitude' },
  { name: 'Logical Reasoning', path: '/logical-reasoning' },
  // Add more topics here
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h3>Topics</h3>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>
            <NavLink to={topic.path} activeClassName="active-link">
              {topic.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
