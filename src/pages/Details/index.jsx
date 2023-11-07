/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import styles from './detail.module.scss'
import Images from '../../assets/image1.png'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllPost } from '../Homepage/actions'

const Detail = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const listPost = useSelector((state) => state.homeReducer.posts)
    console.log(listPost, '<<<< List Post Page');

    useEffect(() => {
        dispatch(getAllPost())
    }, [])

    // console.log(typeof(id));
    const selectedId = listPost.find((item) => item.id === Number(id))
    console.log(selectedId);


    return (
        <div className={styles.container}>
            <div className={styles.container__head}>
                <div className={styles.container__head__title}>
                    <h1> {selectedId?.title} </h1>
                    <p> {selectedId?.author} </p>
                </div>
                <h2> {selectedId?.date} </h2>
            </div>
            <div className={styles.container__body}>
                <img src={Images} />
            </div>
            <div className={styles.container__foot}>
                <p> {selectedId?.description} </p>
            </div>
        </div>
    )
}

export default Detail
