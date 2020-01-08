import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://chef-portfolio-2.herokuapp.com',
        headers: {
            'Content-Type': 'application/json',
           Authorization: token,
        }
    });
};