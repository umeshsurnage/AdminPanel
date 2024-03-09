import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { styled } from "@mui/material/styles"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import { useSelector, useDispatch } from "react-redux"
import { deleteCategory } from "../../Redux/CategoriesSlice"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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

const MainCategory = () => {
  const categories = useSelector(
    (state) => state.CategoriesStore.mainCategories
  )

  const dispatch = useDispatch()
  const Navigate = useNavigate()

  const [editMode, setEditMode] = useState(null) // State variable to track edit mode for each row
  const [editedCategory, setEditedCategory] = useState({}) // State variable to store edited category data

  const deleteItem = (id) => {
    const filterData = categories.filter((value) => value.id !== id)
    dispatch(deleteCategory(filterData))
  }

  const handleEdit = (category) => {
    setEditMode(category.id) // Enable edit mode for the clicked row
    setEditedCategory(category) // Store the original category data
  }

  const handleSave = () => {
    // Dispatch action to update category with edited data
    // Reset edit mode and edited category
    setEditMode(null)
    setEditedCategory({})
  }

  const handleCancel = () => {
    // Reset edit mode and edited category without saving changes
    setEditMode(null)
    setEditedCategory({})
  }

  const handleInputChange = (e, key) => {
    // Update the edited category data
    setEditedCategory({
      ...editedCategory,
      [key]: e.target.value,
    })
  }

  return (
    <div>
      <h1>Main Category </h1>

      <div className='display-right mb-20'>
        <Button
          variant='outlined'
          className='btn-outline-primary'
          onClick={() => {
            Navigate("AddMainCategories")
          }}
        >
          + Add Category
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Created at</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
              <StyledTableCell>Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category, index) => (
              <StyledTableRow key={category.id}>
                <StyledTableCell component='th' scope='row'>
                  {category.id}
                </StyledTableCell>
                <StyledTableCell>
                  {editMode === category.id ? (
                    <input
                      type='text'
                      value={editedCategory.category || ""}
                      onChange={(e) => handleInputChange(e, "category")}
                    />
                  ) : (
                    category.category
                  )}
                </StyledTableCell>
                <StyledTableCell>
                  {editMode === category.id ? (
                    <textarea
                      value={editedCategory.description || ""}
                      onChange={(e) => handleInputChange(e, "description")}
                    />
                  ) : (
                    category.description
                  )}
                </StyledTableCell>
                <StyledTableCell>{category.createdAt}</StyledTableCell>
                <StyledTableCell>
                  {editMode === category.id ? (
                    <>
                      <Button onClick={handleSave}>Save</Button>
                      <Button onClick={handleCancel}>Cancel</Button>
                    </>
                  ) : (
                    <i
                      className='fa-solid fa-pen-to-square'
                      onClick={() => handleEdit(category)}
                    ></i>
                  )}
                </StyledTableCell>
                <StyledTableCell>
                  <i
                    className='fa-solid fa-trash'
                    onClick={() => {
                      deleteItem(category.id)
                    }}
                  ></i>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default MainCategory
