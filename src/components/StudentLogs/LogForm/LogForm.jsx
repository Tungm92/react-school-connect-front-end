import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./LogForm.css"

const LogForm = (props) => {
    const { studentId, logId } = useParams(); // Get both studentId and logId from URL parameters
    const initialState = {
        studentId: studentId || '',
        purpose: '',
        notes: '',
    };

    const [formData, setFormData] = useState(initialState);
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    // Fetch students for the select dropdown
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const data = await props.getStudents();
                setStudents(data);
            } catch (error) {
                console.error('Failed to fetch Students:', error);
            }
        };

        fetchStudents();
    }, []);

    // Fetch log data if editing an existing log
    useEffect(() => {
        if (logId) {
            const fetchLogData = async () => {
                try {
                    const log = await props.getLogById(logId);
                    setFormData({
                        studentId: log.studentId._id,
                        purpose: log.purpose,
                        notes: log.notes,
                    });
                } catch (error) {
                    console.error('Failed to fetch Log:', error);
                }
            };

            fetchLogData();
        }
    }, [logId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (logId) {
                // Update existing log
                await props.updateLog(logId, formData);
            } else {
                // Create new log
                await props.createLog(formData);
            }
            setFormData(initialState);
            navigate(`/mylogs`);
        } catch (error) {
            console.error('Failed to save Log:', error);
        }
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="student">Student:</label>
                <div className="custom-select">
                    <select name="studentId" id="student" value={formData.studentId} onChange={handleChange} required>
                        <option value="">Select a student</option>
                        {students.map((student) => (
                            <option key={student._id} value={student._id}>
                                {student.firstName} {student.lastName}
                            </option>
                        ))}
                    </select>
                </div>
                <label htmlFor="purpose">Purpose:</label>
                <div className="custom-select">
                    <select name="purpose" id="purpose" value={formData.purpose} onChange={handleChange} required>
                        <option value="">Select a purpose</option>
                        <option value="Conduct Referral">Conduct Referral</option>
                        <option value="MTSS Referral">MTSS Referral</option>
                        <option value="Journal">Journal</option>
                    </select>
                </div>
                <label htmlFor="notes">Notes:</label>
                <textarea required type="text" name="notes" id="notes" value={formData.notes} onChange={handleChange} rows="5" cols="50"></textarea>
                <button type="submit">{logId ? 'Update Log' : 'Create Log'}</button>
            </form>
        </>
    );
}

export default LogForm;