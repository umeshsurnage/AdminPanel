import React, { useState } from "react"
import { Button, TextField, Typography, Input } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { addCategory } from "../../Redux/CategoriesSlice"
import { useSelector, useDispatch } from "react-redux"

export const AddMainCategories = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)

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
      imageUrl: selectedImage,
      createdAt: new Date().toLocaleDateString(),
    }

    // Dispatch addCategory action with new category data
    dispatch(addCategory(newCategory))

    // Navigate back to display category page
    navigate(-1)
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setSelectedImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }
  return (
    <div>
      <h1>Add Main Categories</h1>

      <div>
        <TextField
          id='standard-basic'
          label='Category Name'
          value={name}
          onChange={handleInput}
        />
        <br />
        <TextField
          label='Text Area'
          name='textArea'
          value={description}
          onChange={handleDescription}
          multiline
          rows={4}
          fullWidth
          margin='normal'
        />
        <br />
        <Input
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          style={{ display: "none" }}
          id='upload-image'
        />
        <label htmlFor='upload-image'>
          <Button variant='contained' component='span'>
            Choose Image
          </Button>
        </label>
        {selectedImage && (
          <div>
            <img
              src={selectedImage}
              alt='Uploaded'
              style={{ maxWidth: "30%", marginTop: 10 }}
            />
          </div>
        )}
        <br />
        <br />
        <Button
          variant='contained'
          color='primary'
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
