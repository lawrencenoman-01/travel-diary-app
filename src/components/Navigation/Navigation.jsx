/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './navigation.module.scss'
import Icon from '../../assets/icon.png'
import Icon2 from '../../assets/Icon2.png'
import Ellipse from '../../assets/ellipse.png'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CreateIcon from '@mui/icons-material/Create';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Avatar, Divider, IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import { useDispatch } from 'react-redux'
import { resetLogin } from '../../pages/Login/actions'
import { Link, useNavigate } from 'react-router-dom'
import ButtonComp from '../Button/Button'

const Navigation = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userLoggedIn = localStorage.getItem('user')

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/register')
    };

    // Navigate2
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleProfile = () => {
        navigate('/profile')
    }
    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.clear();
        dispatch(resetLogin())
        navigate('/')
    };
    // Close Navigate2

    return (
        <>
            {userLoggedIn ? <div className={styles.container__headerLoggedIn}>
                <div className={styles.container__headerLoggedIn__navigation}>
                    <Link to={'/'}>
                        <img src={Icon2} />
                    </Link>
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
                        <MenuItem onClick={handleProfile}>
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
                        <Link to={'/'}>
                            <img src={Icon} />
                        </Link>
                        <div>
                            <ButtonComp title='Login' variant='outlined' onClick={handleLogin} />
                            <ButtonComp title='Register' variant='outlined' onClick={handleRegister} />
                        </div>
                    </div>
                    <div className={styles.container__header__title}>
                        <h1> The Journey <br /> you ever dreamed of. </h1>
                    </div>
                    <div className={styles.container__header__description}>
                        <p> We made a tool so you can easily keep & share your travel memories.
                            But there is a lot more </p>
                    </div>
                </div>}
        </>
    )
}

export default Navigation
