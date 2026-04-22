import Axios from 'axios'

const axios = Axios.create({
    baseURL: '/api-proxy',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    withCredentials: true,
    withXSRFToken: true
})

export default axios
