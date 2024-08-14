import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';


const LogList = () => {
    const {studentId} = useParams()
    
    return (
        <>
          { studentId ? (
            <h1>This is a Student Log List</h1>
          ) : (
        
            <h1>
                This is user Log 

            </h1>
        
          )}
        </>
      )

}

export default LogList