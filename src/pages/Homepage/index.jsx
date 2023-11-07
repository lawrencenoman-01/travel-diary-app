/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import styles from './homepage.module.scss'
import { IconButton, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux'
import { getAllPost, searchPost } from './actions'
import { Link } from 'react-router-dom'
import CardComp from '../../components/Card/Card'
import Navigation from '../../components/Navigation/Navigation'

const Homepage = () => {
    const dispatch = useDispatch()
    const listPost = useSelector((state) => state.homeReducer.posts)
    console.log(listPost, '<<<< List Post Page');
    const searchQuery = useSelector((state) => state.homeReducer.searchPost);
    console.log(searchQuery, '<<<<< Search Query');
    const [query, setQuery] = useState()


    useEffect(() => {
        dispatch(getAllPost())
    }, [])

    const handleSearchChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        dispatch(searchPost(query));
    }

    return (
        <div className={styles.container}>
            {/* Navigation Header */}
            {/* <Navigation /> */}

            {/* Search */}
            <div className={styles.container__body} onSubmit={(e) => e.preventDefault()}>
                <h1> Journey </h1>
                <form className={styles.container__body__search}>
                    <TextField style={{ width: '160vh', backgroundColor: '#fff' }}
                        id="outlined-search"
                        label="Find Journey"
                        type="search"
                        size="small"
                        variant="outlined"
                        onChange={handleSearchChange}
                        value={query} />

                    <IconButton type='submit' aria-label='search' onClick={handleSearch}>
                        <SearchIcon />
                    </IconButton>
                </form>
            </div>

            {/* Card */}
            <div className={styles.container__card}>
                {searchQuery.length > 0
                    ? searchQuery?.map((card, index) => (
                        <Link key={index} to={`/detail/${card.id}`} className={styles.link}>
                            <CardComp
                                title={card.title}
                                date={card.date}
                                author={card.author}
                                shortDescription={card.shortDescription}
                            />
                        </Link>

                    ))
                    : listPost?.map((card, index) => (
                        <Link key={index} to={`/detail/${card.id}`} className={styles.link}>
                            <CardComp
                                title={card.title}
                                date={card.date}
                                author={card.author}
                                shortDescription={card.shortDescription}
                            />
                        </Link>
                    ))}
            </div>
        </div>
    )
}

export default Homepage
