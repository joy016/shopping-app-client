'use client';
import { Box, Container, Grid } from '@mui/material';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  fetchProducts,
  productSelector,
} from '../../../store/slices/productSlice';
import ProductCard from './components/ProductCard';
import SearchProduct from './components/SearchProduct';
import ProductSort from './components/ProductSort';
import ProductFilter from './components/ProductFilter';

export default function Product() {
  const products = useAppSelector(productSelector.selectAll);
  const { productsLoaded } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProducts());
  }, [dispatch, productsLoaded]);

  return (
    <div className="pageContainer">
      <Container
        fixed
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row', lg: 'row' },
          justifyContent: 'center',
          gap: '1.5rem',
          padding: { xs: '2rem 2rem', md: '2rem 1rem' },
        }}
      >
        <Box
          sx={{
            display: { xs: 'flex', md: 'flex' },
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <SearchProduct />
          <ProductSort />
          <ProductFilter />
        </Box>
        <Box>
          <ProductCard products={products} />
        </Box>
      </Container>
    </div>
  );
}
