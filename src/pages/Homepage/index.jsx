/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import styles from './homepage.module.scss'
import Icon from '../../assets/icon.png'
import Icon2 from '../../assets/Icon2.png'
import Ellipse from '../../assets/ellipse.png'
import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, TextField, Tooltip } from '@mui/material'
import ButtonComp from '../../components/Button'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux'
import Images from '../../assets/image1.png'
import { getAllPost, searchPost } from './actions'
import { Link, useNavigate } from 'react-router-dom'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CreateIcon from '@mui/icons-material/Create';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { resetLogin } from '../Login/actions'

const Homepage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const listPost = useSelector((state) => state.homeReducer.posts)
    console.log(listPost, '<<<< List Post Page');
    const searchQuery = useSelector((state) => state.homeReducer.searchPost);
    console.log(searchQuery, '<<<<< Search Query');
    const [query, setQuery] = useState()


    useEffect(() => {
        dispatch(getAllPost())
    }, [])

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/register')
    };

    const handleSearchChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        dispatch(searchPost(query));
    }

    const userLoggedIn = localStorage.getItem('user')

    // Navigate2
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.clear();
        dispatch(resetLogin())
        navigate('/')
    };
    // Close Navigate2

    return (
        <div className={styles.container}>
            {/* Navigation Header */}
            {userLoggedIn
                ? <div className={styles.container__headerLoggedIn}>
                    <div className={styles.container__headerLoggedIn__navigation}>
                        <img src={Icon2} />
                        {/* title="Account settings" -- Untuk Tooltip */}
                        <Tooltip>
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{ width: 32, height: 32 }}>
                                    <img src={Ellipse} />
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Person2OutlinedIcon sx={{ fontSize: 30 }} style={{ color: 'orange' }} /> Profile
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <CreateIcon sx={{ fontSize: 30 }} style={{ color: 'green' }} /> New Journey
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <BookmarkBorderOutlinedIcon sx={{ fontSize: 30 }} style={{ color: 'blue' }} /> Bookmark
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={handleLogout}>
                                <LogoutOutlinedIcon sx={{ fontSize: 30 }} style={{ color: 'red' }} /> Logout
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
                : <div className={styles.container__header}>
                    <div className={styles.container__header__navigation}>
                        <img src={Icon} />
                        <div>
                            <ButtonComp className={styles.button} title='Login' variant='outlined' onClick={handleLogin} />
                            <ButtonComp className={styles.button} title='Register' variant='outlined' onClick={handleRegister} />
                        </div>
                    </div>
                    <div className={styles.container__header__title}>
                        <h1> The Journey <br /> you ever dreamed of. </h1>
                    </div>
                    <div className={styles.container__header__description}>
                        <p> We made a tool so you can easily keep & share your travel memories.
                            But there is a lot more </p>
                    </div>
                </div>
            }


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
                            <div className={styles.container__card__bg}>
                                <div className={styles.container__card__bg__image}>
                                    <img src={Images} />
                                </div>
                                <div className={styles.container__card__bg__body}>
                                    <h1> {card.title} </h1>
                                    <h2> {card.date}, {card.author} </h2>
                                    <h3> {card.shortDescription} </h3>
                                </div>
                            </div>
                        </Link>

                    ))
                    : listPost?.map((card, index) => (
                        <Link key={index} to={`/detail/${card.id}`} className={styles.link}>
                            <div className={styles.container__card__bg}>
                                <div className={styles.container__card__bg__image}>
                                    <img src={Images} />
                                </div>
                                <div className={styles.container__card__bg__body}>
                                    <h1> {card.title} </h1>
                                    <h2> {card.date}, {card.author} </h2>
                                    <h3> {card.shortDescription} </h3>
                                </div>
                            </div>
                        </Link>

                    ))}
            </div>
        </div>
    )
}

export default Homepage
