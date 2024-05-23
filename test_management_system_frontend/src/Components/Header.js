import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';


const darkTheme = createTheme({
    palette: {

        primary: {
            main: '#052b45',
        },
    },
});

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const location = useLocation()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [userDetails, setUserDetails] = useState([]);
    const [auth, setAuth] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id')

    useEffect(() => {
        const shouldFetchData = !['/signup', '/login'].includes(location.pathname);
        if (shouldFetchData) {
            async function getUserData() {
                try {
                    const userData = await axios.get(`http://127.0.0.1:8000/userprofile/`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                    );
                    console.log("current user profile ==", userData.data.user_type)
                    setUserDetails(userData.data.user_type);
                    // console.log('+++++++++++==============',setId)
                } catch (error) {
                    console.log("Data fetching Error Occured in User Data");
                    if (error.response && error.response.status === 401) {
                        setAuth(false); // Update auth state accordingly
                        setIsLoggedIn(false);
                    }
                }
            }

            getUserData();
        }
    }, []);

    console.log("cureent user details in header ====", userDetails)

    return (
        <>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <ThemeProvider theme={darkTheme}>
                    <AppBar position="static">
                        <Container maxWidth="xl">
                            <Toolbar disableGutters>
                                <Typography variant="h6" noWrap component="a" href="/"
                                    sx={{
                                        mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: [
                                            '-apple-system',
                                            'BlinkMacSystemFont',
                                            '"Segoe UI"',
                                            'Roboto',
                                            '"Helvetica Neue"',
                                            'Arial',
                                            'sans-serif',
                                            '"Apple Color Emoji"',
                                            '"Segoe UI Emoji"',
                                            '"Segoe UI Symbol"',
                                        ].join(','),
                                        fontWeight: 700,
                                        letterSpacing: '',
                                        color: '#d6cac2',
                                        textDecoration: 'none'
                                    }}>
                                    QBMS || Question Bank
                                </Typography>

                                {location.pathname === "/signup" && (
                                    <Typography variant="h6" color="#d6cac2" component="div" sx={{ flexGrow: 1 }}>
                                        <Link to="/login" style={{ color: "#d6cac2", textDecoration: 'none', marginLeft: '90%' }}> Login</Link>
                                    </Typography>
                                )}
                                {location.pathname === "/login" && (
                                    <Typography variant="h6" color="#d6cac2" component="div" sx={{ flexGrow: 1 }}>
                                        <Link to="/signup" style={{ color: "#d6cac2", textDecoration: 'none', marginLeft: '90%' }}> SignUp</Link>
                                    </Typography>
                                )}
                                {location.pathname === "/" && (
                                    <Typography variant="h6" color="#d6cac2" component="div" sx={{ flexGrow: 1 }}>
                                        <Link to="/signup" style={{ color: "#d6cac2", textDecoration: 'none', marginLeft: '90%' }}>
                                            SignUp</Link>
                                    </Typography>
                                )}

                                {userDetails === 'admin' && (
                                    <>
                                        <Box sx={{ flexGrow: 4, display: { xs: 'none', md: 'flex' }, marginLeft: '39%' }}>
                                            <Typography variant="h6" color="#EA6912" component="div" sx={{ flexGrow: 0.4 }}>
                                                <Link to='/dashboard' style={{ color: "#d6cac2", textDecoration: 'none' }}>
                                                    Dashboard</Link></Typography>

                                            <Typography variant="h6" color="#EA6912" component="div" sx={{ flexGrow: 0.4 }}><Link to='/getallusers' style={{ color: "#d6cac2", textDecoration: 'none' }}>
                                                Users</Link></Typography>

                                            <Typography variant="h6" color="#EA6912" component="div" sx={{ flexGrow: 0.4 }}><Link to='/topic' style={{ color: "#d6cac2", textDecoration: 'none' }}>
                                                Topics</Link></Typography>

                                            {/* <Typography variant="h6" color="#EA6912" component="div" sx={{ flexGrow: 0.4 }}><Link to='/questionbank' style={{ color: "#d6cac2", textDecoration: 'none' }}>
                                                Question Bank</Link></Typography> */}

                                            <Typography variant="h6" color="#EA6912" component="div" sx={{ flexGrow: 0.4 }}><Link to='/ownerlist' style={{ color: "#d6cac2", textDecoration: 'none' }}>
                                                Topic-Owner</Link></Typography>
                                        </Box>
                                    </>
                                )}

                                {userDetails === 'user' && (
                                    <>
                                        <Box sx={{ flexGrow: 4, display: { xs: 'none', md: 'flex' }, marginLeft: '39%' }}>
                                            <Typography variant="h6" color="#EA6912" component="div" sx={{ flexGrow: 0.4 }}>
                                                <Link to='/dashboard' style={{ color: "#d6cac2", textDecoration: 'none' }}>
                                                    Dashboard</Link></Typography>

                                            {/* <Typography variant="h6" color="#EA6912" component="div" sx={{ flexGrow: 0.4 }}><Link to='/getallusers' style={{ color: "#d6cac2", textDecoration: 'none' }}>
                                                Users</Link></Typography> */}

                                            <Typography variant="h6" color="#EA6912" component="div" sx={{ flexGrow: 0.4 }}><Link to='/topic' style={{ color: "#d6cac2", textDecoration: 'none' }}>
                                                Topics</Link></Typography>

                                            <Typography variant="h6" color="#EA6912" component="div" sx={{ flexGrow: 0.4 }}><Link to='/questionbank' style={{ color: "#d6cac2", textDecoration: 'none' }}>
                                                Question Bank</Link></Typography>

                                            {/* <Typography variant="h6" color="#EA6912" component="div" sx={{ flexGrow: 0.4 }}><Link to='/ownerlist' style={{ color: "#d6cac2", textDecoration: 'none' }}>
                                                Topic-Owner</Link></Typography> */}
                                        </Box>
                                    </>
                                )}


                                {location.pathname !== "/signup" &&
                                    location.pathname !== '/login' &&
                                    location.pathname !== '/' &&
                                    (
                                        <>
                                            <Box sx={{ flexGrow: 0 }} dir="rtl">
                                                <Tooltip title="Open settings">
                                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                        <Avatar alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXmpBL5KogE-vaHYUvYop5i6ZhS3O6dvIS0PUTDUVYQ&s" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Menu
                                                    sx={{ mt: '30px' }}
                                                    id="menu-appbar"
                                                    anchorEl={anchorElUser}
                                                    anchorOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                    }}
                                                    keepMounted
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                    }}
                                                    open={Boolean(anchorElUser)}
                                                    onClose={handleCloseUserMenu}
                                                >
                                                    <MenuItem onClick={handleCloseUserMenu}>
                                                        <Typography sx={{ color: '#EA6912', }} textAlign="center">
                                                            <Link to='/profile' style={{ color: "#24210c", textDecoration: 'none' }}>Profile</Link>
                                                        </Typography>
                                                    </MenuItem>


                                                    <MenuItem onClick={handleCloseUserMenu}>
                                                        <Typography sx={{ color: '#EA6912', }} textAlign="center">
                                                            <Link to='/changepassword' style={{ color: "#24210c", textDecoration: 'none' }}>Change Password</Link>
                                                        </Typography>
                                                    </MenuItem>



                                                    <MenuItem onClick={handleCloseUserMenu}>
                                                        <Typography sx={{ color: '#EA6912', }} textAlign="center">
                                                            <Link to='/logout' style={{ color: "#24210c", textDecoration: 'none' }}>LogOut</Link>
                                                        </Typography>
                                                    </MenuItem>

                                                </Menu>
                                            </Box>
                                        </>
                                    )}

                            </Toolbar>
                        </Container>
                    </AppBar>
                </ThemeProvider>
            </Stack>
        </>
    )
}

export default Header;