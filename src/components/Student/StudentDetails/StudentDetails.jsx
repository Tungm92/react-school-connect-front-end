import {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LogList from '../../StudentLogs/LogList/LogList'

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
            <p>IEP: {studentData.iep ? 'No IEP' : 'Active'}</p>
            <p>Plan 504: {studentData.plan504 ? 'No plan504' : 'Active'}</p>
            <p>ELD: {studentData.eld ? studentData.eld : 'N/A'}</p>
            <h1></h1>
            <div>
                <LogList/>
            </div>
        </main> 
    );
};

export default StudentDetails