import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://chef-portfolio.herokuapp.com/api/auth/register',
        headers: {
            'Content-Type': 'application/json',
           Authorization: token,
        }
    });
};