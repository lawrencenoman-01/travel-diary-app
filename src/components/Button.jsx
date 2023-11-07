/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Button } from '@mui/material'

const ButtonComp = ({title, className, variant, onClick}) => {
    return (
        <Button className={className} variant={variant} onClick={onClick}>
            <p> {title} </p>
        </Button>
    )
}

export default ButtonComp
