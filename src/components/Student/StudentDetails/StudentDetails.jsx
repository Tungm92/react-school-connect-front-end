import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LogList from '../../StudentLogs/LogList/LogList'

const StudentDetails = ({getStudentById, getStudentLogs, deleteStudent}) => {
 
    const {studentId} = useParams() 
    const navigate = useNavigate()
    const [studentData, setStudentData] = useState(null)

    useEffect(() => {
        const fetchStudentData = async () => {
            const data = await getStudentById(studentId);  
            setStudentData(data);  
        }
        fetchStudentData();  
    }, [studentId, getStudentById]);  

    if (!studentData) {
        return <p>Loading...</p>; 
    }

    const handleDelete = async () => {
        try {
            await deleteStudent(studentId);
            navigate('/students')
        } catch (error) {
            console.error('Failed to delete student: ', error);
            alert('An error occurred while deleting the student.');
        }
    }

    const handleUpdate = async () => {
        navigate(`/students/${studentId}/update`)
    }

    return (
        <main>
            <h1>Student Information</h1>
            <h2>{studentData.firstName}, {studentData.lastName}</h2>
            <br />
            <p>Grade: {studentData.grade}</p>
            <p>IEP: {studentData.iep ? 'No IEP' : 'Active'}</p>
            <p>Plan 504: {studentData.plan504 ? 'No plan504' : 'Active'}</p>
            <p>ELD: {studentData.eld ? studentData.eld : 'N/A'}</p>
            <button onClick={handleUpdate}>Edit</button>
            <button onClick={handleDelete} >Delete</button>
            <h1></h1>
            <div>
                <LogList getStudentLogs={getStudentLogs}/>
            </div>
        </main> 
    );
};

export default StudentDetails