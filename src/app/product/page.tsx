'use client';
import { Box } from '@mui/material';

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
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <SearchProduct />
        <ProductSort />
        <ProductFilter />
      </Box>

      <Box sx={{ width: '60%' }}>
        <ProductCard products={products} />
      </Box>
    </>
  );
}
