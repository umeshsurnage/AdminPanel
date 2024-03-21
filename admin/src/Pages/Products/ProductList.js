import { useEffect } from "react"
import {
  Button,
  Chip,
  Rating,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"

import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { storeProducts } from "../../Redux/ProductsSlice"
import { tableCellClasses } from "@mui/material/TableCell"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#db0d58",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))
export function ProductList() {
  const navigate = useNavigate()
  const Products = useSelector((state) => state.ProductsStore.Products)
  console.log(Products)
  const dispatch = useDispatch()

  const statusColorMapping = {
    "In Stock": "success",
    "Low Stock": "warning",
    "No Stock": "error",
  }

  useEffect(() => {
    // API to fetch products
    dispatch(storeProducts())
  }, [])

  return (
    <div className='subCategory'>
      <h1>Product List</h1>
      <div className='display-right mb-20 '>
        <Button
          variant='outlined'
          className='btn-outline-primary'
          onClick={() => {
            navigate("../AddProduct")
          }}
        >
          + Add Product
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Product</StyledTableCell>
              <StyledTableCell>Created At</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Rating</StyledTableCell>
              <StyledTableCell>Price</StyledTableCell>
              <StyledTableCell>Featured</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Products.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  <span>
                    <img src={row.image} />
                    {row.name}
                  </span>
                </TableCell>
                <TableCell>{row.createdAt}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusColorMapping[row.status]}
                  />
                </TableCell>
                <TableCell>
                  <Rating value={row.rating} />
                </TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>
                  <Switch checked={row.featured} />
                </TableCell>
                <TableCell>
                  <EditOutlinedIcon></EditOutlinedIcon>
                  <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
