import {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const StudentDetails = ({getStudentById}) => {
    // const [studentData, setStudentData] = useState()
    // const {studentId} = useParams()

    // useEffect(() => {
    //     const fetchStudent = async () => {
    //         try {
    //             const student = await getStudentById(studentId)
    //             setStudentData({ title: track.title, artist: track.artist });
    //          } catch (error) {
    //             console.error('Failed to fetch track:', error);
    //           }
    //         }
    //     fetchStudent()
    // }, [id])
    




    return(
        <main>
            <h1>This is the student detail page </h1>
        </main>

    )
}

export default StudentDetails