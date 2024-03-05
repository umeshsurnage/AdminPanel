import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"

function Dashboard() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item sm={6} xs={12} md={3}>
          <div className='dashbox1'>
            <Grid container>
              <Grid item xs={9}>
                <h5>Daily Earning</h5>
                <h2>$ 0.0</h2>
              </Grid>
              <Grid item xs={3} display='flex' justifyContent='flex-end'>
                <i className='fa-solid fa-file-invoice-dollar'></i>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item sm={6} xs={12} md={3}>
          <div className='dashbox1'>
            <Grid container>
              <Grid item xs={9}>
                <h5>Daily Orders</h5>
                <h2>0</h2>
              </Grid>
              <Grid item xs={3} display='flex' justifyContent='flex-end'>
                <i className='fa-solid fa-clipboard'></i>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item sm={6} xs={12} md={3}>
          <div className='dashbox1'>
            <Grid container>
              <Grid item xs={9}>
                <h5>Signup Users</h5>
                <h2>48</h2>
              </Grid>
              <Grid item xs={3} display='flex' justifyContent='flex-end'>
                <i className='fa-solid fa-person-circle-check'></i>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item sm={6} xs={12} md={3}>
          <div className='dashbox1'>
            <Grid container>
              <Grid item xs={9}>
                <h5>Total Product</h5>
                <h2>35</h2>
              </Grid>
              <Grid item xs={3} display='flex' justifyContent='flex-end'>
                <i className='fa-solid fa-basket-shopping'></i>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
export default Dashboard
