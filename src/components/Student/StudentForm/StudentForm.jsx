import {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getStudentById, updateStudent } from '../../../services/studentService';

const StudentForm = (props) => {
    
    const initialState = {
        firstName:'',
        lastName: '',
        grade: '9',
        iep: false,
        plan504: false,
        eld: '1'
    };

    const { studentId } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialState);

    if (studentId) {
        useEffect(() => {
            const fetchStudent = async () => {
                try {
                    const student = await getStudentById(studentId);
                    setFormData(student);
                } catch (error) {
                    console.error('Failed to fetch student: ', error);
                };
            };
            fetchStudent()
        }, [studentId, getStudentById]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (studentId) {
            await updateStudent(studentId, formData)
            setFormData(initialState)
            navigate(`/students/${studentId}`)
        } else {
            props.createStudent(formData)
            setFormData(initialState)
            navigate('/students')
        };
    };
    
    const handleChange = ({target}) => {
        const { name, value, type, checked } = target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                    <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    />
                <label htmlFor="lastName">Last Name:</label>
                    <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    />        
                <label htmlFor="grade">Grade:</label>
                    <select  name="grade" id="grade" value={formData.grade} onChange={handleChange}>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                <label htmlFor="iep">IEP:</label>
                    <input 
                        name="iep" 
                        id="iep" 
                        type="checkbox" 
                        checked={formData.iep} 
                        onChange={handleChange}></input>
                <label htmlFor="plan504">504 Plan:</label>
                    <input 
                        name="plan504" 
                        id="plan504" 
                        type="checkbox" 
                        checked={formData.plan504} 
                        onChange={handleChange}></input>
                <label htmlFor="eld">ELD Level:</label>
                    <select  name="eld" id="eld" value={formData.eld} onChange={handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="FLEP">FLEP</option>
                        <option value="N/A">N/A</option>
                    </select>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default StudentForm