'use client';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import {
  HIGHLIGHTS_PRODUCT,
  PRODUCT_COLOR,
  PRODUCT_SIZE,
} from '../../../../../constants/product';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import {
  fetchSingleProduct,
  productSelector,
} from '../../../../../store/slices/productSlice';

export default function Page({ params }: { params: { id: number } }) {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) =>
    productSelector.selectById(state, params.id)
  );

  useEffect(() => {
    dispatch(fetchSingleProduct(params.id));
  }, [params.id]);

  return (
    <div className="pageContainer">
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          flexDirection: { xs: 'column', md: 'row' },
          marginTop: '3rem',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            padding: { lg: '10px' },
            display: 'flex',
          }}
        >
          <Image
            style={{ margin: '0 auto' }}
            src={products!.productImage}
            width={400}
            height={500}
            alt="Picture of the author"
          />
        </Box>
        <Box sx={{ width: { xs: '80%', md: '50%' } }}>
          <Stack spacing={2}>
            <Typography variant="caption">Weekly Picks</Typography>
            <Typography>{products!.name}</Typography>
            <Typography variant="caption">{products?.description}</Typography>
            <Typography>Select Size</Typography>
            <Stack direction="row" spacing={0.5}>
              {PRODUCT_SIZE.map((btn) => (
                <Button
                  key={btn.key}
                  variant="outlined"
                  color="secondary"
                  size="small"
                >
                  {btn.label}
                </Button>
              ))}
            </Stack>
            <Typography>Select Color</Typography>
            <Stack direction="row" spacing={0.5}>
              {PRODUCT_COLOR.map((btn_color) => (
                <Button
                  key={btn_color.key}
                  variant="outlined"
                  color="secondary"
                  size="small"
                >
                  {btn_color.label}
                </Button>
              ))}
            </Stack>
            <Typography>₱{products?.price}.00</Typography>
            <Button variant="contained" color="secondary">
              Add to bag
            </Button>
          </Stack>
        </Box>
      </Container>
    </div>
  );
}
