'use client';

import {
  Box,
  Button,
  CardMedia,
  Container,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Link from 'next/link';
import { SwiperSlide, Swiper } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { HIGHLIGHTS_PRODUCT } from '../../../../constants/product';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { addToCart, fetchHighlightsProduct, productSelector } from '../../../../store/slices/productSlice';
import { useEffect } from 'react';

export default function Banner() {

  const products = useAppSelector(productSelector.selectAll);
  const { highlightProductsLoaded } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!highlightProductsLoaded) dispatch(fetchHighlightsProduct());
  }, [dispatch, highlightProductsLoaded]);
  
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          padding: '5rem 0',
        }}
      >
        <Typography variant="body2" sx={{ lineHeight: '50px' }}>
          Latest products
        </Typography>
        <Typography
          variant="h4"
          sx={{
            lineHeight: '50px',
            marginBottom: '20px',
            fontSize: { xs: '1.2rem', md: '1.5rem', lg: '2rem' },
          }}
        >
          Our newest styles are here to help you <br />
          <span>look your best.</span>
        </Typography>
        <Link href="/product">
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              width: 'auto',
              fontSize: {
                xs: 'small',
                sm: 'medium',
              },
            }}
          >
            Explore products
          </Button>
        </Link>
      </Box>

      <Container
        sx={{
          width: { xs: '30rem', md: '60rem', lg: '70rem' },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Swiper
          breakpoints={{
            500: {
              slidesPerView: 3,
              spaceBetween: 1,
            },
            600: {
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} style={{ padding: '1rem 1rem' }}>
              <Link href={`/product/single-product/${product.id}`}>
                <CardMedia
                  sx={{
                    height: { xs: 200, md: 250, lg: 350 },
                    boxShadow: '0 0 0 0 violet',
                    transition: 'box-shadow 0.3s',
                    '&:hover': {
                      boxShadow: '0 0 8px 2px violet',
                    },
                  }}
                  image={product.productImage}
                  title={product.name}
                />
                <Typography>{product.name}</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography>₱{product.price}</Typography>
                  <Box>
                    <IconButton aria-label="heart" color="secondary">
                      <FavoriteBorderOutlinedIcon />
                    </IconButton>
                    <IconButton
                      aria-label="cart"
                      color="secondary"
                      onClick={() => dispatch(addToCart())}
                    >
                      <ShoppingBagOutlinedIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
}
