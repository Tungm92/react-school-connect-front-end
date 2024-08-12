import {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const StudentDetails = (props) => {
    const studentId = useParams()

    //assume we have a function called getStudent

    return(
        <main>
            <div className="student-info">
                <p>{}</p>
            </div>
        
            <div className="student-logs">

            </div>
        
        </main>

    )
}

export default StudentDetails