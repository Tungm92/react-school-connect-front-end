import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentFomr.css'

const initialState = {
    firstName:'',
    lastName: '',
    grade: '9',
    iep: false,
    plan504: false,
    eld: '1'
  };
  

const StudentForm = (props) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        props.createStudent(formData)
        setFormData(initialState)
        navigate('/')//Navigate back to student list 
    }   
    
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
                <div className="custom-select">
                    <select  name="grade" id="grade">
                        <option value={formData.grade}>9</option>
                        <option value={formData.grade}>10</option>
                        <option value={formData.grade}>11</option>
                        <option value={formData.grade}>12</option>
                    </select>
                </div>
                <div>
                    <label className="checkbox" htmlFor="iep">IEP: </label>
                    <input name="iep" id="iep" type="checkbox"></input>
                </div>
                <div>
                    <label className="checkbox" htmlFor="plan504">504 Plan: </label>
                    <input name="plan504" id="plan504" type="checkbox"></input>
                </div>
                <label htmlFor="eld">ELD Level:</label>
                <div className="custom-select">
                    <select  name="eld" id="eld">
                        <option value={formData.eld}>1</option>
                        <option value={formData.eld}>2</option>
                        <option value={formData.eld}>3</option>
                        <option value={formData.eld}>4</option>
                        <option value={formData.eld}>5</option>
                        <option value={formData.eld}>FLEP</option>
                        <option value={formData.eld}>N/A</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default StudentForm