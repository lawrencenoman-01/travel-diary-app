/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import styles from './login.module.scss'
import { Button, TextField } from '@mui/material'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from './actions';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // Handle Change Form
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // Handle Login Button
    const handleLogin = async (e) => {
        e.preventDefault()

        dispatch(loginRequest(formData))
        // window.alert('You are Logged In')
        // navigate('/')
    }

    const loginStatus = useSelector((state) => state.loginReducer.user)

    useEffect(() => {
        if (loginStatus) {
            window.alert('You are Logged In')
            navigate('/')
        }
    }, [loginStatus, navigate])


    return (
        <div className={styles.form}>
            <form className={styles.form__validate}>
                <h1> Login </h1>
                <div>
                    <h2> Email </h2>
                    <TextField name='email' id="email-form" variant="outlined" className={styles.form__validate__input} value={formData.email} onChange={handleChange} />
                    {/* <div className={styles.form__validate__error}> {errors.email} </div>                 */}
                </div>
                <div className={styles.password}>
                    <h2> Password </h2>
                    <TextField type='password' name="password" id="password-form" variant="outlined" className={styles.form__validate__input} value={formData.password} onChange={handleChange} />
                    {/* <div className={styles.form__validate__error}> {errors.password} </div> */}
                </div>
                <div>
                    <Button fullWidth className={styles.form__validate__button} variant='contained' type='submit' onClick={handleLogin}> Login </Button>
                </div>
                <p> Don't have an account? Click <a href='/register'> Here </a> </p>
            </form>
        </div>
    )
}

export default Login
