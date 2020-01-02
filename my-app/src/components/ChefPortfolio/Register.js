import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosAuthenticate/axiosWithAuth';

const RegisterChef = () => {
    const defaultUser = {
        firstname: '',
        lastname: '',
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
            <div>
                <h1>Create an Account</h1>
                <form autoComplete='new-password' onSubmit={handleSubmit}>
                <input
                        type='text'
                        name='firstname'
                        placeholder='First Name'
                        value={chef.firstname}
                        onChange={handleChange}
                        className='inputField'
                    />
                    <input
                        type='text'
                        name='Last Name'
                        placeholder='Last Name'
                        value={chef.lastname}
                        onChange={handleChange}
                        className='inputField'
                    />
                    <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={chef.username}
                        onChange={handleChange}
                        className='inputField'
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={chef.email}
                        onChange={handleChange}
                        className='inputField'
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={chef.password}
                        onChange={handleChange}
                        className='inputField'
                    />
                    <input
                        type='text'
                        name='location'
                        placeholder='City'
                        value={chef.username}
                        onChange={handleChange}
                        className='inputField'
                    />

                    <input type='submit'></input>
                    <input type='reset'></input>
                </form>
            </div>
        </>
    )
}

export default RegisterChef