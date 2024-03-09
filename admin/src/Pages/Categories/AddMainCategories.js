import React, { useState } from "react"
import { Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { addCategory } from "../../Redux/CategoriesSlice"
import { useSelector, useDispatch } from "react-redux"

export const AddMainCategories = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const categories = useSelector(
    (state) => state.CategoriesStore.mainCategories
  )

  const handleInput = (e) => {
    setName(e.target.value)
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleClick = () => {
    const newCategory = {
      id: categories.length + 1,
      category: name,
      description: description,
      createdAt: new Date().toLocaleDateString(),
    }

    // Dispatch addCategory action with new category data
    dispatch(addCategory(newCategory))

    // Navigate back to display category page
    navigate(-1)
  }
  return (
    <div>
      <h1>AddMainCategories</h1>

      <div>
        <TextField
          id='standard-basic'
          label='Category Name'
          variant='standard'
          value={name}
          onChange={handleInput}
        />
        <br />
        Description :
        <input
          type='text'
          value={description}
          onChange={handleDescription}
        />{" "}
        <br />
        <Button
          onClick={() => {
            handleClick()
          }}
        >
          Submit
        </Button>
        <Button
          onClick={() => {
            navigate(-1)
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}
