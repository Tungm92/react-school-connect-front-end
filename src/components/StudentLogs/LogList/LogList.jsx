import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './LogList.css'
const LogList = ({ getStudentLogs, getLogs }) => {
  const { studentId } = useParams();
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        let logData;
        if (studentId) {
          logData = await getStudentLogs(studentId);
        } else {
          logData = await getLogs();
        }
        setLogs(logData);
      } catch (error) {
        console.error('Failed to fetch Logs:', error);
      }
    };

    fetchLogs();
  }, [studentId, getStudentLogs, getLogs]);  

  return (
    <div>
      <h1>Logs</h1>
      
      <Link to={`/mylogs/new`}><p className="add-log-link">Add Log</p></Link>
      <ul className="all-logs">
        {logs.map((log) => (
        <li className="logs" key={log._id}><Link to={`/students/${log.studentId._id}/logs/${log._id}`}> {log.studentId.firstName ? 
          <div className="log-card"><p>{log.purpose} about <strong><span>{log.studentId.firstName}</span></strong></p></div>
        : `${log.purpose}` }</Link>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default LogList;