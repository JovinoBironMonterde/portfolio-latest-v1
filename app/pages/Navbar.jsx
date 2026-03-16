// C:\xampp\htdocs\portfolio\app\pages\Navbar.jsx
"use client";
import React, { useState, useEffect } from "react";
import {
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  AppBar,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import "../../public/css/NavbarStyle.css";
import "../../public/css/globals.css";
import Imagelogo from "../../public/assets/img/JMonterde-removebg-preview2-removebg-preview.png";

const navItems = [
  { name: "Hero", path: "#hero" },
  { name: "About", path: "#aboutpage" },
  { name: "Profession", path: "#profession" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const sectionId = item.path.replace("#", "");
        const element = document.getElementById(sectionId);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on first load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawer = (
    <Box sx={{ textAlign: "center", paddingTop: 2, bgcolor: "#f4f4f4", height: "100vh" }}>
      <Box sx={{ my: 2, display: "flex", justifyContent: "center" }}>
        <Image src={Imagelogo} width={200} height={100} alt="Logo" />
      </Box>
        <hr />
      <List>
        {navItems.map((item) => {
          const sectionId = item.path.replace("#", "");
          const isActive = activeSection === sectionId;

          return (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                onClick={() => setMobileOpen(false)}
                sx={{
                  backgroundColor: isActive ? "#1692a1" : "transparent",
                  color: isActive ? "#000" : "#333",
                  "&:hover": {
                    backgroundColor: "#1692a1",
                    color: "#000",
                  },
                }}
              >
                <a
                  href={item.path}
                  style={{ width: "100%", textDecoration: "none", color: "inherit" }}
                >
                  <ListItemText primary={item.name} />
                </a>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <header className="top-0 w-full">
      <AppBar
        component="nav"
        position="static"
        sx={{ backgroundColor: "#333", py: 1 }}
      >
        <Toolbar className="flex justify-between">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image src={Imagelogo} width={190} height={40} alt="Logo" />
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <ul className="flex gap-6">
              {navItems.map((item) => {
                const sectionId = item.path.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <li
                    key={item.name}
                    className={`cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "text-[#1692a1] font-bold border-b-2 border-[#1692a1]"
                        : "text-white font-bold border-b-2 border-transparent"
                    }`}
                  >
                    <a href={item.path}>{item.name}</a>
                  </li>
                );
              })}
            </ul>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            height: "100vh",
          },
        }}
      >
        {drawer}
      </Drawer>
    </header>
  );
}

export default Navbar;
