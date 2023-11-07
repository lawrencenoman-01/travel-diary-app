/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './card.module.scss'
import Images from '../../assets/image1.png'

const CardComp = ({ title, date, author, shortDescription}) => {
    return (
        <div className={styles.container__card__bg}>
            <div className={styles.container__card__bg__image}>
                <img src={Images} />
            </div>
            <div className={styles.container__card__bg__body}>
                <h1> {title} </h1>
                <h2> {date}, {author} </h2>
                <h3> {shortDescription} </h3>
            </div>
        </div>
    )
}

export default CardComp
