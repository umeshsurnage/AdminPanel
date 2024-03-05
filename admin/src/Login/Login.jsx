import React, { useState } from "react"
import { Box, Grid, TextField, Button } from "@mui/material"

import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const onLogin = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      navigate("/Admin")
    }, 1000)
  }

  return (
    <div className='loginWrapp'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={4}></Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box borderRadius={5} textAlign='center' bgcolor='#fff' p={5}>
            <h1 textAlign='center'>Login Here !</h1>
            <TextField
              label='User Name'
              variant='outlined'
              fullWidth
              sx={{ marginBottom: 2 }}
              // value={username}
              // onChange={inputUsername}
            />
            <TextField
              label='Password'
              type='password'
              variant='outlined'
              fullWidth
              sx={{ marginBottom: 2 }}
              // value={password}
              // onChange={inputPassword}
            />

            <Button id='myButton' onClick={onLogin}>
              {loading ? <div className='loader'></div> : "Login"}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={4}></Grid>
      </Grid>
    </div>
  )
}
export default Login
