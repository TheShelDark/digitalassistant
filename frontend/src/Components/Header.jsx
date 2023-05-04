import React, { useState } from 'react'
import { AppBar, Container, IconButton, SwipeableDrawer, Toolbar, Typography, Box, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { ChevronRightOutlined } from '@mui/icons-material';
import { NavLink, useLocation } from 'react-router-dom';

const menuWidth = 240

const navItems = [
    {
        link: '/',
        label: 'Startseite'
    },
    {
        link: '/checklist',
        label: 'PTB Checkliste'
    },
    {
        link: '/ganttgen',
        label: 'Zeitplan-Generator'
    },
    {
        link: '/ressources',
        label: 'Nützliche Links'
    },
    {
        link: '/updategen',
        label: 'Zwischenstand-Generator'
    },
]

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleMenuToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const location = useLocation()

    const pageName = () => {
        switch (location.pathname) {
            case '/': 
                return 'HWR Digital Assistant'
            case '/ressources': 
                return 'Nützliche Links'
            case '/checklist': 
                return 'PTB Checkliste'
            case '/ganttgen': 
                return 'Zeitplan-Generator'
            case '/updategen': 
                return 'Zwischenstand-Generator'
            case '/imprint': 
                return 'Impressum'
            default:
                return ''
        }
    }

    const drawer = 
    <Box 
        onClick={handleMenuToggle} 
        sx={{ textAlign: 'center', bgcolor: 'primary.main' }}
    >
        <Typography variant="h6" sx={{my: 1, pt: 1, color: 'secondary.main'}}>Menu</Typography>
        <Divider />
        <List sx={{ bgcolor: 'secondary.main' }}>
            {navItems.map((item) => (
                <NavLink to={item.link} key={item.label} style={{ textDecoration: 'none'}}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary={item.label} color="text">
                            </ListItemText>
                            <IconButton edge="end">
                                    <ChevronRightOutlined />
                            </IconButton>
                        </ListItemButton>
                    </ListItem>
                </NavLink>
            ))}
            <Divider />
            <NavLink to='/imprint' style={{ textDecoration: 'none'}}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary='Impressum' color="text">
                        </ListItemText>
                        <IconButton edge="end">
                                <ChevronRightOutlined />
                        </IconButton>
                    </ListItemButton>
                </ListItem>
            </NavLink>
        </List>
    </Box>

  return (
    <>
        <AppBar>
            <Container maxWidth="lg" sx={{padding: { xs: 0 }}}>
                <Toolbar>
                    <IconButton
                        color='secondary' 
                        edge="start" 
                        onClick={handleMenuToggle}
                        sx={{ display: { sm: 'none'}}}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block'}}}>HWR Digital Assistant</Typography>

                    <Typography variant="h6" sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none', textAlign: 'center'}}}>{pageName()}</Typography>

                    <Box sx={{ display: { xs: 'none', sm: 'block'}}}>
                        {navItems.map((item) => (
                            <NavLink
                                to={item.link}
                                key={item.label}
                                className='p-3 hover:cursor-pointer text-white hover:text-gray-400 no-underline'
                            >
                                {item.label}
                            </NavLink>
                        ))}
                         <NavLink
                                to='/imprint'
                                className='p-3 hover:cursor-pointer text-white hover:text-gray-400 no-underline'
                            >
                                Impressum
                            </NavLink>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>

        <Box component="nav">
            <SwipeableDrawer 
                open={mobileOpen}
                onOpen={handleMenuToggle}
                onClose={handleMenuToggle}
                ModalProps={{
                    keepMounted: true
                }}
                sx={{ '& .MuiDrawer-paper': {
                        width: menuWidth,
                    }
                }}
            >
                {drawer}
            </SwipeableDrawer>
        </Box>
    </>
  )
}

export default Header