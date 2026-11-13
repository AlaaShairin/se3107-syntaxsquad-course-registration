import React, { useState } from 'react';
import './App.css';

function App() {
  // State to handle form inputs and registration status
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (!studentName || !studentId || !courseName) {
      setMessage('Please fill in all fields before registering.');
      return;
    }
    // Success message
    setMessage(`Successfully registered ${studentName} (ID: ${studentId}) for ${courseName}!`);
  };

  return (
    <div className="container">
      <header>
        <h2>University Course Registration System</h2>
      </header>

      <main className="card">
        <h3>Course Registration Form</h3>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Student Name:</label>
            <input 
              type="text" 
              placeholder="Enter your full name" 
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Student ID:</label>
            <input 
              type="text" 
              placeholder="Enter your student ID" 
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Course Name:</label>
            <select 
              value={courseName} 
              onChange={(e) => setCourseName(e.target.value)}
            >
              <option value="">Select a Course</option>
              <option value="React Frontend Development">Software Engineering</option>
              <option value="Database Systems">Information System</option>
              <option value="Advanced Web Programming">Data Science</option>
            </select>
          </div>

          <button type="submit" className="register-btn">Register</button>
        </form>

        {message && <p className="message">{message}</p>}
      </main>
    </div>
  );
}

export default App;