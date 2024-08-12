import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const StudentList = () => {
    const [students, setStudents] = useState([])
    const navigate = useNavigate()

    return(
        <>
            <h1>Student List</h1>
                <ul>
                {students.map(student => (
                    <li key={student._id}>
                        <p>{student.lastName}, {student.firstName}</p>
                        <p>{student.grade}</p>
                        {/* Add more stuff later: IEP, 504 Plan, ELD level, and logs */}
                    </li>
                ))}
                </ul>
        </>
    )
}

export default StudentList