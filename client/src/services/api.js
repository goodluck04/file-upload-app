import axios from 'axios'

// api url -> where you want to send data or response
const API_URL = 'http://localhost:8000'

// getting data from app.js as input

export const uploadFile =async (data) => {
    try{
        // post metho take two args API_URL+endpoint(/upload) and data
        // store in variable
        let response = await axios.post(`${API_URL}/upload`, data)
        return response.data
    } catch(error){
        console.log('Error while calling the api ', error.message)
    }
}



// axious return in form of header
// {
//     header:
//     requsetHeaders:
//     data:
//     etc:
// }