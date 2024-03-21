import React, { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import { Link, Route, Routes } from "react-router-dom"
import Dashboard from "./Dashboard"
import Categories from "./Categories"
import Sidebar from "./Sidebar"
import { Product } from "./Product"
import Orders from "./Orders"

const drawerWidth = 240
const Admin = () => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0)

  const handleActiveMenuChange = (index) => {
    setActiveMenuIndex(index)
  }
  const [menu, setMenu] = useState("")

  const handleMenuChange = (index) => {
    setMenu(index[activeMenuIndex].name)
  }
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const handleDrawerClose = () => {
    setIsClosing(true)
    setMobileOpen(false)
  }

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false)
  }

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen)
    }
  }

  const drawer = (
    <div className='logo'>
      <img src='/logo.jpg' alt='Charul Products' />
      <Sidebar
        drawerWidth={drawerWidth}
        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        handleDrawerClose={handleDrawerClose}
        mobileOpen={mobileOpen}
        menu={handleMenuChange}
        activeMenu={handleActiveMenuChange}
      ></Sidebar>
    </div>
  )
  return (
    <div>
      <Toolbar />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position='fixed'
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar className='breadcrumb'>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize='small' />}
              aria-label='breadcrumb'
            >
              <Link
                to='/Admin/Dashboard'
                onClick={() => {
                  activeMenuIndex(0)
                }}
              >
                Home
              </Link>
              <Link color='white'>{menu}</Link>
            </Breadcrumbs>
          </Toolbar>
        </AppBar>
        <Box
          component='nav'
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label='mailbox folders'
        >
          <Drawer
            variant='temporary'
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant='permanent'
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Routes>
            <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>

            <Route path='/' element={<Dashboard></Dashboard>}></Route>

            <Route
              path='/Categories/*'
              element={<Categories></Categories>}
            ></Route>

            <Route path='/Product/*' element={<Product></Product>}></Route>
            <Route path='/Orders' element={<Orders></Orders>}></Route>

            {/* <Route
              path='/Categories'
              element={<Navigate to='/Categories' />}
            ></Route> */}

            <Route
              path='*'
              element={<div className='center'>Not Found</div>}
            ></Route>
          </Routes>
        </Box>
      </Box>
    </div>
  )
}

export default Admin
