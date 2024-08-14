import {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const StudentDetails = ({getStudentById}) => {
 
    const {studentId} = useParams() 

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

    return (
        <main>
            <h1>This is the student detail page</h1>
            <h2>{studentData.firstName}, {studentData.lastName}</h2>
            <br />
            <p>Grade: {studentData.grade}</p>
            <p>IEP: {studentData.iep ? 'No IEP' : 'Enrolled'}</p>
            <p>Plan 504: {studentData.plan504 ? 'No plan504' : 'Enrolled'}</p>
            <p>ELD: {studentData.eid ? studentData.eid : 'N/A'}</p>
            <h1></h1>
            <div>
                <h2>Student Logs:</h2>
            </div>
        </main> 
    );
};

export default StudentDetails