import React from "react"
import Style from "./Style.css"
import AcUnitIcon from "@mui/icons-material/AcUnit"
import { Box, Grid, Typography, TextField, Button } from "@mui/material"

const Login = () => {
  return (
    <div className='loginWrapp'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={4}></Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box borderRadius={5} textAlign='center' bgcolor='#fff' p={5}>
            <h1 textAlign='center'>Login page</h1>
            <TextField
              label='User Name'
              variant='outlined'
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label='Password'
              type='password'
              variant='outlined'
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <Button
              fullWidth
              variant='contained'
              color='primary'
              sx={{ padding: 1, fontSize: 18 }}
            >
              Login
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={4}></Grid>
      </Grid>
    </div>
  )
}
export default Login
