import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'https://subramaniyajothi-portfolio-backend.vercel.app/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient
