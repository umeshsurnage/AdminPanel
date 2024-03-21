import React from "react"
import Grid from "@mui/material/Grid"
import { BarChart } from "@mui/x-charts/BarChart"

import { PieChart } from "@mui/x-charts/PieChart"
import { useDrawingArea } from "@mui/x-charts/hooks"
import { styled } from "@mui/material/styles"

const data = [
  { value: 5, label: "A" },
  { value: 10, label: "B" },
  { value: 15, label: "C" },
  { value: 20, label: "D" },
]

const size = {
  width: 300,
  height: 200,
}

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}))

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea()
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  )
}
function Dashboard() {
  return (
    <>
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
      <div className='mt-50'>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <Grid container>
              <BarChart
                xAxis={[
                  {
                    id: "barCategories",
                    data: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ],
                    scaleType: "band",
                  },
                ]}
                series={[
                  {
                    data: [2, 5, 3, 10, 10, 9, 5, 3, 2, 7, 4, 3],
                  },
                ]}
                width={400}
                height={300}
              />
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12}>
            <PieChart series={[{ data, innerRadius: 70 }]} {...size}>
              <PieCenterLabel>Center label</PieCenterLabel>
            </PieChart>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
export default Dashboard
