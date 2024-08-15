import {useState, useEffect} from 'react';
import {useParams, Link, useNavigate } from 'react-router-dom';

    const LogDetails = ({getLogById, deleteLog}) => {
 
        const {logId} = useParams() 
        const navigate = useNavigate();
        const [logData, setLogData] = useState(null)
    

        useEffect(() => {
            const fetchLogData = async () => {
                const data = await getLogById(logId);  
                setLogData(data);  
            }
            fetchLogData();  
        }, [logId, getLogById]);  
    
        if (!logData) {
            return <p>Loading...</p>; 
        }

        const handleDelete = async () => {
            try {
                await deleteLog(logData._id);
                navigate('/mylogs');  
            } catch (error) {
                console.error('Failed to delete log:', error);
                alert('An error occurred while deleting the log.');
            }
        };

    return(
        <>
            <h1>{logData.studentId.lastName}, {logData.studentId.firstName} Log</h1>
            <br />
            <p>Title: {logData.purpose}</p>
            <p>Content: {logData.notes}</p>
            <Link to={`/students/${logData.studentId._id}/edit/logs/${logData._id}`}>Edit</Link>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default LogDetails