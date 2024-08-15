const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/students`;

const getStudents = async () => {
    try{
        const response = await fetch(BASE_URL, {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`},
        });
        return response.json();
    }
    catch(error){
        console.log(error)
    }
}

const createStudent = async (student) => {
    const response = await fetch(BASE_URL,{
        method: 'POST',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
    })
    if (!response.ok) throw new Error('Failed to create student');
    return response.json();
}

const getStudentById = async (studentId) => {
    try{
        const response = await fetch(`${BASE_URL}/${studentId}`, {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`},
        });
        return response.json();
    }
    catch(error){
        console.log(error)
    }
}

const getStudentLogs = async (studentId) => {
    try{
        const response = await fetch(`${BASE_URL}/${studentId}/logs`, {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`},
    });
        return response.json();
    }
    catch(error){
        console.log(error);
    }
}

const updateStudent = async (studentId) => {
    try {
        const response = await fetch(`${BASE_URL}/${studentId}`, {
            method: 'PUT',
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`},
        });
    } catch (error) {
        console.log('Failed to update student information: ', error);
    };
};

const deleteStudent = async (studentId) => {
    try {
        const response = await fetch(`${BASE_URL}/${studentId}`, {
            method: 'DELETE',
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`},
        });
        return response.json();
    } catch (error) {
        console.log('Failed to delete student: ', error);
    };
};

export { getStudents, createStudent, getStudentById, getStudentLogs, deleteStudent, updateStudent };