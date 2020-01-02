import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosAuthenticate/axiosWithAuth';

const RegisterChef = () => {
    const defaultUser = {
        username: '',
        password: '',
        email: '',
        location: ''
    };

    const [chef, setChef] = useState(defaultUser);

    const handleChange = (event) => {
        setChef({ ...chef, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosWithAuth()
        .post('/auth/register/', chef)
        .then((res) => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('id',res.data.id);
            localStorage.setItem('username', res.data.username);

            setChef(defaultUser);
        })
        .catch((err) => console.log(err));
    }

    return (
        <>
            <RegDiv>
                <h1>Create an Account</h1>
                <form autoComplete='new-password' onSubmit={handleSubmit}>
                    
                </form>
            </RegDiv>
        </>
    )
}

export default RegisterChef