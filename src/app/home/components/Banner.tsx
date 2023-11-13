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
import { useAppDispatch } from '../../../../store/hooks';
import { addToCart } from '../../../../store/slices/productSlice';

export default function Banner() {
  const dispatch = useAppDispatch();
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
          sx={{ lineHeight: '50px', marginBottom: '20px' }}
        >
          Our newest styles are here to help you <br />
          <span>look your best.</span>
        </Typography>
        <Link href="/product">
          <Button variant="outlined" color="secondary">
            Explore products
          </Button>
        </Link>
      </Box>

      <Container
        sx={{
          maxWidth: '45rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {HIGHLIGHTS_PRODUCT.map((product) => (
            <SwiperSlide key={product.key} style={{ padding: '1rem 1rem' }}>
              <Link href={`/product/single-product/${product.key}`}>
                <CardMedia
                  sx={{
                    height: 350,
                    boxShadow: '0 0 0 0 violet',
                    transition: 'box-shadow 0.3s',
                    '&:hover': {
                      boxShadow: '0 0 8px 2px violet',
                    },
                  }}
                  image={product.imageSrc}
                  title={product.productName}
                />
                <Typography>{product.productName}</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography>₱{product.productPrice}</Typography>
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
