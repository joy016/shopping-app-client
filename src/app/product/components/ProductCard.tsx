import { ProductFormValues } from '@/app/models/Product';
import { Product } from '@/app/types/product';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';

interface Props {
  products: Product[];
}

export default function ProductCard({ products }: Props) {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={4}>
          <Card sx={{ width: 250, padding: '0 10px' }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              title={product.name}
            />
            <CardMedia
              sx={{ height: 140 }}
              image="https://m.media-amazon.com/images/I/61ndjxi8POL._AC_UX679_.jpg"
              title={product.name}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {`$${product.price}`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.brand}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="text" size="small" sx={{ fontWeight: 'bold' }}>
                ADD TO CART
              </Button>
              <Button variant="text" size="small" sx={{ fontWeight: 'bold' }}>
                VIEW
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
