import { React, useState } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import Dashboard from "./Dashboard"
import Categories from "./Categories"

const drawerWidth = 240
const Admin = () => {
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [active, setActive] = useState(0)
  const menus = [
    {
      name: "Dashboard",
      icone: <i className='fa-solid fa-gauge-high'></i>,
    },
    {
      name: "Categories",
      icone: <i className='fa-solid fa-list'></i>,
    },
    {
      name: "Product",
      icone: <i className='fa-solid fa-shop'></i>,
    },
    {
      name: "Orders",
      icone: <i className='fa-solid fa-cart-arrow-down'></i>,
    },
    {
      name: "Users",
      icone: <i className='fa-solid fa-users'></i>,
    },
    {
      name: "Newsletter",
      icone: <i className='fa-regular fa-envelope'></i>,
    },
    {
      name: "Setting",
      icone: <i className='fa-solid fa-gear'></i>,
    },
  ]
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
  const onActive = (index) => {
    navigate(menus[index].name)
    setActive(index)
  }
  const drawer = (
    <div className='logo'>
      <img src='/logo.jpg' alt='Charul Products' />
      {menus.map((data, index) => (
        <ListItem key={data} disablePadding>
          <ListItemButton
            id={active === index ? "active" : ""}
            onClick={() => onActive(index)}
          >
            <ListItemIcon>{data.icone}</ListItemIcon>
            <ListItemText primary={data.name} />
          </ListItemButton>
        </ListItem>
      ))}
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
                  setActive(0)
                }}
              >
                Home
              </Link>
              <Link color='white'>{menus[active].name}</Link>
            </Breadcrumbs>
          </Toolbar>
        </AppBar>
        <Box
          component='nav'
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label='mailbox folders'
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
            <Route
              path='/Categories'
              element={<Categories></Categories>}
            ></Route>
            <Route path='/' element={<Dashboard></Dashboard>}></Route>
          </Routes>
        </Box>
      </Box>
    </div>
  )
}

export default Admin
