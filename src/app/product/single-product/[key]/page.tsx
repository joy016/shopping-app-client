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

interface Product {
  key?: string;
  imageSrc?: string;
  productName?: string;
  productPrice?: string;
}

export default function Page({ params }: { params: { key: string } }) {
  const [filteredProduct, setFilteredProduct] = useState<Product>();
  const key = params.key;
  useEffect(() => {
    const foundProduct = HIGHLIGHTS_PRODUCT.find(
      (product) => product.key === params.key
    );

    setFilteredProduct(foundProduct!);
  }, [key]);

  return (
    <div className="pageContainer">
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          gap: '2rem',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box sx={{ width: { xs: '50%', md: '50%' }, padding: '10px' }}>
          <Image
            src={filteredProduct?.imageSrc!}
            width={400}
            height={500}
            alt="Picture of the author"
          />
        </Box>
        <Box sx={{ width: { xs: '80%', md: '50%' } }}>
          <Stack spacing={2}>
            <Typography variant="caption">Weekly Picks</Typography>
            <Typography>{filteredProduct?.productName}</Typography>
            <Typography variant="caption">
              Experience ultimate comfort and style with this cozy T-Shirt North
              America. Made in NA, it's a versatile must-have for everyday wear.
              Embrace confidence in fashion.
            </Typography>
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
            <Typography>₱{filteredProduct?.productPrice}.00</Typography>
            <Button variant="contained" color="secondary">
              Add to bag
            </Button>
          </Stack>
        </Box>
      </Container>
    </div>
  );
}
