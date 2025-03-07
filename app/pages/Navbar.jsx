"use client";
import React, { useState } from 'react';
import { IconButton, Drawer, Box, List, ListItem, ListItemButton, ListItemText, AppBar, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../../public/css/NavbarStyle.css';
import '../../public/css/globals.css';
import Image from 'next/image';
import Imagelogo from '../../public/assets/img/JMonterde-removebg-preview2-removebg-preview.png'

const navItems = [
  { name: 'Hero', path: '#hero' },
  { name: 'About', path: '#aboutpage' },
  { name: 'Profession', path: '#profession' },
  { name: 'Projects', path: '#projects' },
  // { name: 'Resume', path: './resume/' },
  { name: 'Contact', path: '#Contact' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', paddingTop: 2 }}>
       <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
        <Image src={Imagelogo} width={150} height={100} alt="Logo" />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton>
              <a href={item.path}>
                <ListItemText primary={item.name} />
              </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <header className='top-0 w-full'>
      <AppBar component="nav" position="static" sx={{ backgroundColor: '#333', py:1 }}>
        <Toolbar className="flex justify-between">
          <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
            <Image src={Imagelogo} width={130} height={80} alt="Logo" />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <ul className="flex gap-4">
              {navItems.map((item) => (
                <li key={item.name} className="cursor-pointer text-white">
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </ul>
          </Box>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, zIndex:99999999999 },
        }}
      >
        {drawer}
      </Drawer>
    </header>
  );
}

export default Navbar;
