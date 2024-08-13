const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/students`;


const getStudents = async () => {
    const response = await fetch(BASE_URL)
    if (!response.ok) throw new Error('Failed to fetch tracks');
    return response.json();
}

const createStudent = async (student) => {
    const response = await fetch(BASE_URL,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student),
    })
    if (!response.ok) throw new Error('Failed to fetch students');
    return response.json();
}


export { getStudents, createStudent};
