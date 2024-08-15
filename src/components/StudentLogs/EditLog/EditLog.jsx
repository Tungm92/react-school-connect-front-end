import {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';



const EditLog = ({ updateLog, getLogById }) => {
    
    const {studentId, logId} = useParams()

    const initialState = {
        studentId: studentId,
        purpose: '',
        notes: '',
       };

    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLog = async () => {
            try {
                const log = await getLogById(logId)
                setFormData({ purpose: log.puspose, notes: log.notes });
             } catch (error) {
                console.error('Failed to fetch log:', error);
              }
            }
        fetchLog()
    }, [logId, getLogById])
    
    
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            await updateLog(logId, formData)
            navigate('/mylogs')
        }
        catch(error){
            console.log(error)
        }
    }   
    
    const handleChange = ({target}) => {
        setFormData({ ...formData, [target.name]: target.value });
    } 
    
    return (
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

export default EditLog;