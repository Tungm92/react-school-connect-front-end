const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/logs`;


const getLogs = async () => {
    try{
        const response = await fetch(BASE_URL,{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
    });
        return response.json();
    }
    catch(error){
        console.log(error)
    }
}


const createLog = async (log) => {
    const response = await fetch(BASE_URL,{
        method: 'POST',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(log),
    })
    if (!response.ok) throw new Error('Failed to create log');
    return response.json();
}



export{createLog, getLogs}