import React, { useState } from "react"
import { Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { addCategory } from "../../Redux/CategoriesSlice"
import { useSelector, useDispatch } from "react-redux"
import Grid from "@mui/material/Grid"
import { Input } from "@mui/material"
import Autocomplete from "@mui/material/Autocomplete"

export const AddSubCategories = () => {
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
  const parentCategory = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
  ]
  return (
    <div>
      <h1>Add Sub Categories</h1>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id='outlined-basic'
                label='Outlined'
                variant='outlined'
                value={name}
                onChange={handleInput}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Text Area'
                name='textArea'
                value={description}
                onChange={handleDescription}
                multiline
                rows={4}
                sx={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Grid container gap={4}>
            <Grid item xs={12}>
              <Autocomplete
                disablePortal
                id='combo-box-demo'
                options={parentCategory}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label='Parent Category' />
                )}
              />
            </Grid>
            <Grid item xs={12}>
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
                    style={{ maxWidth: "100px", marginTop: 10 }}
                  />
                </div>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
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
        </Grid>
      </Grid>
    </div>
  )
}
