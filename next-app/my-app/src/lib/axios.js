import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://hotelinking-production.up.railway.app/api',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    withCredentials: true,
    withXSRFToken: true
})

export default axios
