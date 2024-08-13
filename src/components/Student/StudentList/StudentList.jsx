import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const StudentList = ({getStudents}) => {
    const [students, setStudents] = useState([])
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/students/new')
      }

    useEffect(() => {
        const fetchStudents = async () => {
          try {
            const data = await getStudents();
            setStudents(data);
          } catch (error) {
            console.error('Failed to fetch Students:', error);
          }
        };
      
        fetchStudents();
      }, [getStudents]);

    
    return(
        <>
            <h1>Student List</h1>
                <ul>
                {students.map(student => (
                    <li key={student._id}>
                        <p>{student.lastName}, {student.firstName}</p>
                        <p>{student.grade}</p>{/*Add more stuff later */}
                    </li>
                ))}
                </ul>
        </>
    )
}

export default StudentList