import { Product } from '@/app/types/product';
import {
  Box,
  CardMedia,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useAppDispatch } from '../../../../store/hooks';
import { addCart } from '../../../../store/slices/cartSlice';

interface Props {
  products: Product[];
}

export default function ProductCard({ products }: Props) {
  const dispatch = useAppDispatch();
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
      {products.map((product) => (
        <Grid item xs={6} sm={4} md={6} lg={4} key={product.id}>
          <Box
            sx={{
              width: { xs: '10rem', sm: '10rem', md: '11rem' },
              margin: '0 auto',
            }}
          >
            <Link
              href={`/product/single-product/${product.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <CardMedia
                sx={{
                  height: { xs: 150, sm: 200, lg: 150 },
                  boxShadow: '0 0 0 0 violet',
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0 0 8px 2px violet',
                  },
                }}
                image={product.productImage}
                title={product.name}
              />

              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                {product.name}
              </Typography>
            </Link>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography sx={{ fontSize: { xs: '13px', sm: '15px' } }}>
                ₱{product.price}
              </Typography>
              <Stack direction="row">
                <IconButton aria-label="heart" color="secondary">
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
                <IconButton
                  aria-label="cart"
                  color="secondary"
                  onClick={() => dispatch(addCart(product))}
                >
                  <ShoppingBagOutlinedIcon />
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
