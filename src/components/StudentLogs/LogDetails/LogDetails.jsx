import {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

    const LogDetails = ({getLogById}) => {
 
        const {logId} = useParams() 
    
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

    return(
        <>
            <h1>{logData.studentId.lastName}, {logData.studentId.firstName} Log</h1>
            <br />
            <p>Title: {logData.purpose}</p>
            <p>Content: {logData.notes}</p>
            <button>Edit</button>
            <button>Delete</button>
        </>
    )
}

export default LogDetails