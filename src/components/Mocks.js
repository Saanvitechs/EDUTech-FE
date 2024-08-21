// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Mocks.css'; // Include the CSS file for styling

// const mockTests = [
//   { id: 1, title: 'IBPS Clerk 2023 Prelims - 1', questions: 100, time: '1 Hour', marks: 100, unlocked: true, path: '/test/1' },
//   { id: 2, title: 'IBPS Clerk 2023 Prelims - 2', questions: 100, time: '1 Hour', marks: 100, unlocked: false, path: '/test/2' },
//   { id: 3, title: 'IBPS Clerk 2023 Prelims - 3', questions: 100, time: '1 Hour', marks: 100, unlocked: false, path: '/test/3' },
//   { id: 4, title: 'IBPS Clerk 2023 Prelims - 4', questions: 100, time: '1 Hour', marks: 100, unlocked: false, path: '/test/4' },
//   // Add more mock tests here
// ];

// const Mocks = () => {
//   const navigate = useNavigate();

//   const handleButtonClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className="mocks-container">
//       <h1>Mock Tests</h1>
//       <div className="mock-tests-grid">
//         {mockTests.map(test => (
//           <div key={test.id} className={`mock-test-card ${test.unlocked ? 'unlocked' : 'locked'}`}>
//             <h3>{test.title}</h3>
//             <p>{test.questions} Questions</p>
//             <p>{test.time}</p>
//             <p>{test.marks} Marks</p>
//             <button
//               className="mock-test-btn"
//               onClick={() => handleButtonClick(test.path)}
//               disabled={!test.unlocked}
//             >
//               {test.unlocked ? 'Take Test' : 'Unlock Now'}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Mocks;


// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './Mocks.css'; // Include the CSS file for styling

// // const mockTests = [
// //   { id: 1, title: 'IBPS Clerk 2023 Prelims - 1', questions: 100, time: '1 Hour', marks: 100, unlocked: true, path: '/test/1' },
// //   { id: 2, title: 'IBPS Clerk 2023 Prelims - 2', questions: 100, time: '1 Hour', marks: 100, unlocked: false, path: '/test/2' },
// //   { id: 3, title: 'IBPS Clerk 2023 Prelims - 3', questions: 100, time: '1 Hour', marks: 100, unlocked: false, path: '/test/3' },
// //   { id: 4, title: 'IBPS Clerk 2023 Prelims - 4', questions: 100, time: '1 Hour', marks: 100, unlocked: false, path: '/test/4' },
// // ];

// // const informationBlocks = [
// //   {
// //     title: 'Define Your Target Audience',
// //     description: 'Identify the specific group of people you want to reach with your marketing efforts.',
// //   },
// //   {
// //     title: 'Set Clear Objectives',
// //     description: 'Establish specific, measurable, attainable, relevant, and time-bound (SMART) goals for your campaign.',
// //   },
// //   {
// //     title: 'Develop a Compelling Value Proposition',
// //     description: 'Understand the needs of your audience and create a value proposition that resonates.',
// //   },
// //   {
// //     title: 'Choose Appropriate Marketing Channels',
// //     description: 'Select the most effective channels to engage your target audience.',
// //   },
// // ];

// // const Mocks = () => {
// //   const navigate = useNavigate();

// //   const handleButtonClick = (path) => {
// //     navigate(path);
// //   };

// //   return (
// //     <div className="mocks-container">
// //       <h1>Mock Tests</h1>
// //       <div className="mock-tests-grid">
// //         {mockTests.map((test) => (
// //           <div key={test.id} className={`mock-test-card ${test.unlocked ? 'unlocked' : 'locked'}`}>
// //             <h3>{test.title}</h3>
// //             <p>{test.questions} Questions</p>
// //             <p>{test.time}</p>
// //             <p>{test.marks} Marks</p>
// //             <button
// //               className="mock-test-btn"
// //               onClick={() => handleButtonClick(test.path)}
// //               disabled={!test.unlocked}
// //             >
// //               {test.unlocked ? 'Take Test' : 'Unlock Now'}
// //             </button>
// //             <div className="information-blocks">
// //               {informationBlocks.map((info, idx) => (
// //                 <div key={idx} className="info-block">
// //                   <h4>{info.title}</h4>
// //                   <p>{info.description}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Mocks;


import React from 'react';
import { Link } from 'react-router-dom';
import './Mocks.css'; // Include the CSS file for styling

const topics = [
  { title: 'General Aptitude', content: [{ name: 'Arithmetic Aptitude', path: '/arithmetic-aptitude' }, { name: 'Data Interpretation', path: '/data-interpretation' }, { name: 'Online Aptitude Test', path: '/test/online-aptitude' }] },
  { title: 'Verbal and Reasoning', content: [{ name: 'Verbal Ability', path: '/test/verbal-ability' }, { name: 'Logical Reasoning', path: '/test/logical-reasoning' }, { name: 'Verbal Reasoning', path: '/test/verbal-reasoning' }] },
  { title: 'Interview', content: [{ name: 'Placement Papers', path: '/test/placement-papers' }, { name: 'Group Discussion', path: '/test/group-discussion' }, { name: 'HR Interview', path: '/test/hr-interview' }] },
  { title: 'Engineering', content: [{ name: 'Mechanical Engineering', path: '/test/mechanical-engineering' }, { name: 'Civil Engineering', path: '/test/civil-engineering' }, { name: 'Chemical Engineering', path: '/test/chemical-engineering' }] },
  { title: 'Programming', content: [{ name: 'C Programming', path: '/test/c-programming' }, { name: 'C++ Programming', path: '/test/cpp-programming' }, { name: 'Java Programming', path: '/test/java-programming' }] },
  { title: 'Online Tests',  content: [{ name: 'Aptitude Test', path: '/test/aptitude-test' }, { name: 'Logical Reasoning Test', path: '/test/logical-reasoning-test' }, { name: 'C Programming Test', path: '/test/c-programming-test' }] },
  { title: 'Technical MCQs', content: [{ name: 'Networking Questions', path: '/test/networking-questions' }, { name: 'Database Questions', path: '/test/database-questions' }, { name: 'Basic Electronics', path: '/test/basic-electronics' }] },
  { title: 'Technical Short Answers', content: [{ name: 'Software Testing', path: '/test/software-testing' }, { name: 'SQL Server', path: '/test/sql-server' }, { name: 'Networking', path: '/test/networking' }] }
];

const Mocks = () => {
  return (
    <div className="mocks-container">
      <div className="sidebar">
        <h2>Topics</h2>
        <ul>
          {topics.map((topic, index) => (
            <li key={index}>
              <a href={topic.path}>{topic.title}</a>
            </li>
          ))}
        </ul>
      </div>
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
