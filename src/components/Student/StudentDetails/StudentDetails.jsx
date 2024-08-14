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
            <h1>{studentData.lastName}</h1>
            <h1>{studentData.firstName}</h1>
        </main>
    );
};

export default StudentDetails