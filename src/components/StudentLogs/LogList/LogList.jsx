import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const LogList = ({ getStudentLogs, getLogs }) => {
  const { studentId } = useParams();
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        let log;
        if (studentId) {
          log = await getStudentLogs(studentId);
        } else {
          log = await getLogs();
        }
        setLogs(log);
      } catch (error) {
        console.error('Failed to fetch Logs:', error);
      }
    };

    fetchLogs();
  }, [studentId, getStudentLogs, getLogs]);  

  return (
    <div>
      <h1>These are the logs</h1>
      <ul>
        {logs.map((log) => (
        <li key={log._id}><Link to={`/students/${log.studentId._id}/logs/${log._id}`}>{log.purpose}</Link>: {log.notes}</li>
        ))}
      </ul>
    </div>
  );
};

export default LogList;