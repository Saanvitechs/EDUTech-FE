import React from 'react';

import { Link } from 'react-router-dom';
import './Mocks.css'; // Include the CSS file for styling

const topics = [
  { title: 'General Aptitude', content: [{ name: 'Arithmetic Aptitude', path: '/arithmetic-aptitude' }, { name: 'Data Interpretation', path: '/data-interpretation' }, { name: 'Online Aptitude Test', path: '/test/online-aptitude' }] },
  { title: 'Verbal & Reasoning', content: [{ name: 'Verbal Ability', path: '/verbal-ability' }, { name: 'Logical Reasoning', path: '/logical-reasoning' }, { name: 'Verbal Reasoning', path: '/verbal-reasoning' }] },
  { title: 'Interview', content: [{ name: 'Placement Papers', path: '/placement-papers' }, { name: 'Group Discussion', path: '/group-discussion' }, { name: 'HR Interview', path: '/hr-interview' }] },
  { title: 'Engineering', content: [{ name: 'Mechanical Engineering', path: '/test/mechanical-engineering' }, { name: 'Civil Engineering', path: '/test/civil-engineering' }, { name: 'Chemical Engineering', path: '/test/chemical-engineering' }] },
  { title: 'Programming', content: [{ name: 'C Programming', path: '/c-programming' }, { name: 'C++ Programming', path: '/cpp-programming' }, { name: 'Java Programming', path: '/java-programming' }] },
  { title: 'Online Tests',  content: [{ name: 'Aptitude Test', path: '/test-page' }, { name: 'Logical Reasoning Test', path: '/logical-test' }, { name: 'C Programming Test', path: '/c-programming-test' }] },
  { title: 'Technical MCQs', content: [{ name: 'Networking Questions', path: '/networking' }, { name: 'Database Questions', path: '/database' }, { name: 'Operating System', path: '/operating-system' }] },
  { title: 'Technical Short Answers', content: [{ name: 'Software Testing', path: '/software-testing' }, { name: 'MySQL', path: '/my-sql' }] }
];

const Mocks = () => {
  return (
    <div className="mocks-container">
      {/* <div className="sidebar">
        <h2>Topics</h2>
        <ul>
          {topics.map((topic, index) => (
            <li key={index}>
              <a href={topic.path}>{topic.title}</a>
            </li>
          ))}
        </ul>
      </div> */}
      <div className="content">
        <h1>Analyze Your Depth</h1>
        <div className="mock-tests-grid">
          {topics.map((topic, index) => (
            <div key={index} className="topic-card">
              <h3>{topic.title}</h3>
              <ul>
                {topic.content.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mocks;
