'use client';

import {
  Box,
  Button,
  Fab,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ProductFormValues } from '../models/Product';

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormValues>();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
 

  const handleClose = () => {
    reset();
    setOpen(false);
  }
  
 const onSubmit = () => {
  alert("submit")
 } 

  return (
    <>
      <Fab
        onClick={handleOpen}
        color="primary"
        aria-label="add"
        sx={{ position: 'absolute', bottom: '10px', right: '10px' }}
      >
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderStyle: 'none',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Products
          </Typography>
          <Stack
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            direction="column"
            spacing={1}
            sx={{ marginTop: '20px' }}
          >
            <TextField
              {...register('ProductName', {
                required: 'Product Name is required',
              })}
              id="ProductName"
              label="Product Name"
              variant="outlined"
              fullWidth
              error={!!errors.ProductName}
              helperText={errors.ProductName?.message || ''}
            />
            <TextField
              {...register('ProductDesc', {
                required: 'Product Description is required',
              })}
              id="ProductDesc"
              label="Product Description"
              variant="outlined"
              fullWidth
              error={!!errors.ProductDesc}
              helperText={errors.ProductDesc?.message || ''}
            />
            <TextField
              {...register('Price', { required: 'Price is required' })}
              id="outlined-basic"
              label="Price"
              variant="outlined"
              fullWidth
              error={!!errors.Price}
              helperText={errors.Price?.message || ''}
            />
            <TextField
              {...register('PictureUrl', {
                required: 'Picture Url is required',
              })}
              id="PictureUrl"
              label="Product Picture Url"
              variant="outlined"
              fullWidth
              error={!!errors.PictureUrl}
              helperText={errors.PictureUrl?.message || ''}
            />
            <TextField
              {...register('ProductType', {
                required: 'Product Type is required',
              })}
              id="ProductType"
              label="Product Type"
              variant="outlined"
              fullWidth
              error={!!errors.ProductType}
              helperText={errors.ProductType?.message || ''}
            />
            <TextField
              {...register('ProductBrand', {
                required: 'Product Brand is required',
              })}
              id="ProductBrand"
              label="Product Brand"
              variant="outlined"
              fullWidth
              error={!!errors.ProductBrand}
              helperText={errors.ProductBrand?.message || ''}
            />
            <TextField
              {...register('ProductQuantity', {
                required: 'Product Quantity is required',
              })}
              id="ProductQuantity"
              label="Quantity in stock"
              type="number"
              variant="outlined"
              fullWidth
              error={!!errors.ProductQuantity}
              helperText={errors.ProductQuantity?.message || ''}
            />
            <Box display="flex" gap="10px" justifyContent="right">
              <Button variant="contained" color="error" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" type="submit">
                Add Product
              </Button>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
