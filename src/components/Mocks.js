// q// // src/components/Mocks.js
// // import React from 'react';
// // import './Mocks.css'; // Include the CSS file for styling

// // const mockTests = [
// //   { id: 1, title: 'IBPS Clerk 2023 Prelims - 1', questions: 100, time: '1 Hour', marks: 100, unlocked: true },
// //   { id: 2, title: 'IBPS Clerk 2023 Prelims - 2', questions: 100, time: '1 Hour', marks: 100, unlocked: false },
// //   { id: 3, title: 'IBPS Clerk 2023 Prelims - 3', questions: 100, time: '1 Hour', marks: 100, unlocked: false },
// //   { id: 4, title: 'IBPS Clerk 2023 Prelims - 4', questions: 100, time: '1 Hour', marks: 100, unlocked: false },
// //   // Add more mock tests here
// // ];

// // const Mocks = () => {
// //   return (
// //     <div className="mocks-container">
// //       <h1>Mock Tests</h1>
// //       <div className="mock-tests-grid">
// //         {mockTests.map(test => (
// //           <div key={test.id} className={`mock-test-card ${test.unlocked ? 'unlocked' : 'locked'}`}>
// //             <h3>{test.title}</h3>
// //             <p>{test.questions} Questions</p>
// //             <p>{test.time}</p>
// //             <p>{test.marks} Marks</p>
// //             <button className="mock-test-btn">
// //               {test.unlocked ? 'Take Test' : 'Unlock Now'}
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Mocks;


// src/components/Mocks.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mocks.css'; // Include the CSS file for styling

const mockTests = [
  { id: 1, title: 'IBPS Clerk 2023 Prelims - 1', questions: 100, time: '1 Hour', marks: 100, unlocked: true, path: '/test/1' },
  { id: 2, title: 'IBPS Clerk 2023 Prelims - 2', questions: 100, time: '1 Hour', marks: 100, unlocked: false, path: '/test/2' },
  { id: 3, title: 'IBPS Clerk 2023 Prelims - 3', questions: 100, time: '1 Hour', marks: 100, unlocked: false, path: '/test/3' },
  { id: 4, title: 'IBPS Clerk 2023 Prelims - 4', questions: 100, time: '1 Hour', marks: 100, unlocked: false, path: '/test/4' },
  // Add more mock tests here
];

const Mocks = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="mocks-container">
      <h1>Mock Tests</h1>
      <div className="mock-tests-grid">
        {mockTests.map(test => (
          <div key={test.id} className={`mock-test-card ${test.unlocked ? 'unlocked' : 'locked'}`}>
            <h3>{test.title}</h3>
            <p>{test.questions} Questions</p>
            <p>{test.time}</p>
            <p>{test.marks} Marks</p>
            <button
              className="mock-test-btn"
              onClick={() => handleButtonClick(test.path)}
              disabled={!test.unlocked}
            >
              {test.unlocked ? 'Take Test' : 'Unlock Now'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mocks;
