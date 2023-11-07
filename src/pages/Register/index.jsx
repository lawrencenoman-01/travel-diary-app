/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styles from './register.module.scss'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { registerRequest } from './actions'

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState({});
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
    });

    // Handle Change Form
    const handleChange = (e) => {
        const inputName = e.target.name;
        setError((prevError) => {
            return { ...prevError, [inputName]: '' };
        });

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        const emailExist = await checkEmailExists(formData.email)
        if (emailExist) {
            setError({
                ...error,
                email: 'Email is already registered',
            });
            return;
        }

        dispatch(registerRequest(formData))
        window.alert('Data has been successfully added!')
        navigate('/login')
    }

    // Check Email
    const checkEmailExists = async (email) => {
        try {
            const response = await axios.get('http://localhost:3000/profile', {
                params: { email: email },
            });

            return response.data.length > 0;
        } catch (error) {
            console.error('Error checking email existence: ', error);
            return false;
        }
    };

    // Validation Function
    const validateForm = () => {
        let valid = true
        const newError = {}

        if (formData.fullname === '') {
            newError.fullname = '*Fullname is Required'
            valid = false
        }

        if (formData.email === '') {
            newError.email = '*Email is Required'
            valid = false
        }

        if (formData.password === '') {
            newError.password = '*Password is Required'
            valid = false
        } else if (formData.password.length < 6) {
            newError.password = '*Password must be at least 6 characters long';
            valid = false;
        }

        setError(newError)
        return valid
    }

    return (
        <div className={styles.form}>
            <form className={styles.form__validate} onSubmit={handleRegister}>
                <h1> Register </h1>
                <div className={styles.fullname}>
                    <h2> Full Name </h2>
                    <TextField id="fullname-form" variant="outlined" className={styles.form__validate__input} name='fullname' value={formData.fullname} onChange={handleChange} />
                    <div className={styles.form__validate__error}> {error.fullname} </div>
                </div>
                <div>
                    <h2> Email </h2>
                    <TextField id="email-form" variant="outlined" className={styles.form__validate__input} name='email' value={formData.email} onChange={handleChange} />
                    <div className={styles.form__validate__error}> {error.email} </div>
                </div>
                <div className={styles.password}>
                    <h2> Password </h2>
                    <TextField type='password' id="password-form" variant="outlined" className={styles.form__validate__input} name='password' value={formData.password} onChange={handleChange} />
                    <div className={styles.form__validate__error}> {error.password} </div>
                </div>
                <div>
                    <Button fullWidth className={styles.form__validate__button} variant='contained' type='submit'> Register </Button>
                </div>
            </form>
        </div>
    )
}

export default Register
