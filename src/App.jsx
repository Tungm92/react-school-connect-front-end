// App.jsx

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm' // import the SignupForm
import SigninForm from './components/SigninForm/SigninForm'
import StudentList from './components/Student/StudentList/StudentList'
import StudentDetails from './components/Student/StudentDetails/StudentDetails'
import StudentForm from './components/Student/StudentForm/StudentForm'
import LogForm from './components/StudentLogs/LogForm/LogForm'
import LogList from './components/StudentLogs/LogList/LogList'
import LogDetails from './components/StudentLogs/LogDetails/LogDetails'
import { getStudents, createStudent, getStudentById, getStudentLogs } from './services/studentService'
import {createLog, getLogs, getLogById} from './services/logService'
import * as authService from '../src/services/authService'; // import the authservice
import '../src/App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser()); // using the method from authservice
  const handleSignout = () => {
    authService.signout()
    setUser(null)
  }
  
  return (
    <>
          <NavBar user={user} handleSignout={handleSignout} /> 
      <Routes>
        { user ? (
          <>
            <Route path="/" element={<Dashboard user={user} />} /> 
            <Route path="/students" element={<StudentList user={user} getStudents={getStudents}/>} />
            <Route path="/students/:studentId" element={<StudentDetails getStudentLogs={getStudentLogs} getStudentById={getStudentById}/>} />
            <Route path="/students/new" element={<StudentForm user={user} createStudent={createStudent}/>} />
            

            <Route path="/students/:studentId/logs/new" element={<LogForm user={user} createLog={createLog}/>} />
            <Route path="/mylogs" element={<LogList user={user} getLogs={getLogs}/>} />
            <Route path="/students/:studentId/logs/:logId" element={<LogDetails user={user} getLogById = {getLogById} getStudentLogs={getStudentLogs}/>} />
          </>
        ) : (
          <Route path="/" element={<Landing />} />
        )}
          <Route path="/signup" element={<SignupForm setUser={setUser} />} />
          <Route path='/signin' element={<SigninForm setUser={setUser} />} />
      </Routes>
    </>
  );
};

export default App;
