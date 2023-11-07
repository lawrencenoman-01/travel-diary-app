/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const CardComp = ({title, date, author, description, className, images}) => {
    return (
        <div className={className}>
            <div className={className}>
                <div className={className}>
                    <img src={images} />
                </div>
                <div className={className}>
                    <h1> {title} </h1>
                    <h2> {date}, {author} </h2>
                    <h3> {description} </h3>
                </div>
            </div>
        </div>
    )
}

export default CardComp
