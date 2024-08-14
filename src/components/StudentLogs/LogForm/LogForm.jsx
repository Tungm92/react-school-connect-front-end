import {useState} from 'react';
import { useNavigate,useParams } from 'react-router-dom';


const LogForm = (props) => {
    const {studentId} = useParams()
    const initialState = {
        studentId: studentId,
        purpose: '',
        notes: '',
       };

    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate()
    const handleSubmit = (e) => {
       try{
        e.preventDefault()
        props.createLog(formData)
        setFormData(initialState)
        navigate(`/students/${studentId}`)//Navigate back to student list 
       } 
       catch(error){
        console.log(error)
       }
    }   
    
    const handleChange = ({target}) => {
        const { name, value} = target;
        setFormData({
            ...formData,
         [name]: value });
        }; 

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="purpose">Purpose:</label>
                    <select  name="purpose" id="purpose" value={formData.purpose} onChange={handleChange}>
                        <option value="Conduct Referral">Conduct Referral</option>
                        <option value="MTSS Referral">MTSS Referral</option>
                        <option value="Journal">Journal</option>
                    </select>
                <label htmlFor="notes">notes:</label>
                    <textarea required type="text" name="notes" id="notes" value={formData.notes} onChange={handleChange} rows="5" cols="50"></textarea>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default LogForm