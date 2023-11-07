/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Button } from '@mui/material'
import styles from './button.module.scss'

const ButtonComp = ({title, variant, onClick}) => {
    return (
        <Button className={styles.button__style} variant={variant} onClick={onClick}>
            <p> {title} </p>
        </Button>
    )
}

export default ButtonComp
