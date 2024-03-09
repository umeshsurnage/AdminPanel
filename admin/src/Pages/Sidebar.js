import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

const Sidebar = ({ menu, activeMenu }) => {
  const navigate = useNavigate()

  const [active, setActive] = useState(0)
  const [menuMapping, setMenuMapping] = useState({
    Categories: true,
  })

  const menus = [
    {
      name: "Dashboard",
      icon: <i className='fa-solid fa-gauge-high'></i>,
    },
    {
      name: "Categories",
      icon: <i className='fa-solid fa-list'></i>,
      children: [
        {
          name: "MainCategory",
          icon: <i className='m-20 fa-solid fa-angles-right'></i>,
          route: "Categories/MainCategory",
        },
        {
          name: "SubCategory",
          icon: <i className='m-20 fa-solid fa-angles-right'></i>,
          route: "Categories/SubCategory",
        },
      ],
    },
    {
      name: "Product",
      icon: <i className='fa-solid fa-shop'></i>,
    },
    {
      name: "Orders",
      icon: <i className='fa-solid fa-cart-arrow-down'></i>,
    },
    {
      name: "Users",
      icon: <i className='fa-solid fa-users'></i>,
    },
    {
      name: "Newsletter",
      icon: <i className='fa-regular fa-envelope'></i>,
    },
    {
      name: "Setting",
      icon: <i className='fa-solid fa-gear'></i>,
    },
  ]
  const onActive = (index) => {
    navigate(menus[index].name)
    setActive(index)
    activeMenu(index)
    menu(menus)
  }

  useEffect(() => {
    menu(menus)
  }, [active])
  return (
    <>
      {menus.map((menu, index) => (
        <div key={index}>
          <ListItem
            key={menu}
            disablePadding
            onClick={() => {
              menuMapping[menu.name] = !menuMapping[menu.name]
              setMenuMapping({ ...menuMapping })
            }}
          >
            <ListItemButton
              id={active === index ? "active" : ""}
              onClick={() => onActive(index)}
            >
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.name} />
              {menu.children &&
                (menuMapping[menu.name] ? (
                  <KeyboardArrowDownOutlinedIcon></KeyboardArrowDownOutlinedIcon>
                ) : (
                  <ChevronRightIcon></ChevronRightIcon>
                ))}
            </ListItemButton>
          </ListItem>

          {menu.children &&
            menuMapping[menu.name] &&
            menu.children.map((child) => {
              return (
                <ListItem
                  key={child.name}
                  disablePadding
                  onClick={() => {
                    navigate(child.route)
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>{child.icon}</ListItemIcon>
                    <ListItemText primary={child.name} />
                  </ListItemButton>
                </ListItem>
              )
            })}
        </div>
      ))}
    </>
  )
}

export default Sidebar
