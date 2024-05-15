import React, { useState } from 'react'
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
import { Link } from 'react-router-dom';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

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
    return (
        <>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <ThemeProvider theme={darkTheme}>
                    <AppBar position="static">
                        <Container maxWidth="xl">
                            <Toolbar disableGutters>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    href="/"
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: [
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
                                        color: '#EA6912',
                                        textDecoration: 'none',
                                    }}>
                                    QBMS || Question Bank 
                                </Typography>


                                <Box sx={{ flexGrow: 4, display: { xs: 'none', md: 'flex' }, marginLeft: '50%' }}>
                                <Typography variant="h6" color="#EA6912" component="div" sx={{ flexGrow: 0.4 }}>Home</Typography>
                                    <Typography variant="h6" color="#EA6912" component="div" sx={{ flexGrow: 0.4 }}>Topics</Typography>

                                    <Link to='/questionbank'><Typography variant="h6" color="#EA6912" component="div">Question Bank</Typography></Link>
                                </Box>


                                <Box sx={{ flexGrow: 0 }} dir="rtl">
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="A" src="/static/images/avatar/2.jpg" />
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
                                           <Link to='/profile'><Typography sx={{ color: '#EA6912', }} textAlign="center">Profile</Typography></Link> 
                                        </MenuItem>

                                        <Link to='/changepassword'>
                                            <MenuItem onClick={handleCloseUserMenu}>
                                                <Typography sx={{ color: '#EA6912', }} textAlign="center">Change Password</Typography>
                                            </MenuItem>
                                        </Link>

                                        <Link to='/logout'>
                                            <MenuItem onClick={handleCloseUserMenu}>
                                                <Typography sx={{ color: '#EA6912', }} textAlign="center">LogOut</Typography>
                                            </MenuItem>
                                        </Link>
                                    </Menu>
                                </Box>

                            </Toolbar>
                        </Container>
                    </AppBar>
                </ThemeProvider>
            </Stack>
        </>
    )
}

export default Header;