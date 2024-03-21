import React, { useState } from "react"
import { Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { addCategory } from "../../Redux/CategoriesSlice"
import { useSelector, useDispatch } from "react-redux"
import Grid from "@mui/material/Grid"
import { Select, MenuItem, Input } from "@mui/material"
import Autocomplete from "@mui/material/Autocomplete"
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material"
import InputAdornment from "@mui/material/InputAdornment"

import Switch from "@mui/material/Switch"

const label = { inputProps: { "aria-label": "Switch demo" } }
export const AddProduct = () => {
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

  const [gender, setGender] = useState("")

  const handleGenderChange = (event) => {
    setGender(event.target.value)
  }
  return (
    <div>
      <h1>Add Product</h1>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Grid
            container
            gap={2}
            border={1}
            padding={3}
            borderRadius={2}
            borderColor='#ddd'
          >
            <Grid item xs={12}>
              <TextField
                id='outlined-basic'
                label='Product Name'
                variant='outlined'
                value={name}
                onChange={handleInput}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Description'
                name='textArea'
                value={description}
                onChange={handleDescription}
                multiline
                rows={4}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Autocomplete
                  disablePortal
                  id='combo-box-demo'
                  options={parentCategory}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField {...params} label='Category' />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id='outlined-basic'
                  label='Brand'
                  variant='outlined'
                  sx={{ width: "100%" }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Autocomplete
                  disablePortal
                  id='combo-box-demo'
                  options={parentCategory}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField {...params} label='Status' />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id='outlined-basic'
                  label='Sizes'
                  variant='outlined'
                  sx={{ width: "100%" }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id='outlined-basic'
                  label='Colors'
                  variant='outlined'
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id='outlined-basic'
                  label='Tags'
                  variant='outlined'
                  sx={{ width: "100%" }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
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
              </Grid>

              <Grid item xs={6}>
                <div className='imgShow'>
                  {selectedImage && (
                    <div>
                      <img
                        src={selectedImage}
                        alt='Uploaded'
                        style={{
                          maxWidth: "168px",
                          maxHeight: "171px",
                          marginTop: 10,
                        }}
                      />
                    </div>
                  )}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Grid
            container
            gap={2}
            border={1}
            padding={3}
            borderRadius={2}
            borderColor='#ddd'
          >
            <Grid item xs={12}>
              <TextField
                id='outlined-basic'
                label='Product Code'
                variant='outlined'
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='outlined-basic'
                label='Product SKU'
                variant='outlined'
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={12}>
              <FormLabel component='legend'>Gender</FormLabel>
              <RadioGroup
                aria-label='gender'
                name='gender'
                value={gender}
                onChange={handleGenderChange}
                row
              >
                <FormControlLabel
                  value='female'
                  control={<Radio />}
                  label='Female'
                />
                <FormControlLabel
                  value='male'
                  control={<Radio />}
                  label='Male'
                />
                <FormControlLabel
                  value='kids'
                  control={<Radio />}
                  label='Kids'
                />
                <FormControlLabel
                  value='other'
                  control={<Radio />}
                  label='Other'
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='outlined-basic'
                label='Quantity'
                variant='outlined'
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel component='legend' className='mb-20'>
                Regular Price :
              </FormLabel>

              <Input
                id='standard-adornment-amount'
                label='Quantity'
                variant='outlined'
                sx={{ width: "100%" }}
                startAdornment={
                  <InputAdornment position='start'>$</InputAdornment>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel component='legend' className='mb-20'>
                Sale Price :
              </FormLabel>

              <Input
                id='standard-adornment-amount'
                label='Quantity'
                variant='outlined'
                sx={{ width: "100%" }}
                className='mb-20'
                startAdornment={
                  <InputAdornment position='start'>$</InputAdornment>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Switch {...label} defaultChecked /> Featured Product :
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
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
