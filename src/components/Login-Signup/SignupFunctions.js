import axios from 'axios'

export function registerUser(newUserDetails){
    let apiUrl = 'https://bus-booking-backend.herokuapp.com/register'
    return axios.post(apiUrl,newUserDetails,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}
