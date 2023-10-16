'use client';
import {
  Avatar,
  Box,
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
import { useEffect, useState } from 'react';
import agent from '../api/agent';

export default function Product() {
  const [products, setProducts] = useState([]);




  return (
    <Box sx={{ width: '60%' }}>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Card sx={{ width: 250, padding: '0 10px' }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              title="Womens Pointed Toe Ankle Boots"
            />
            <CardMedia
              sx={{ height: 140 }}
              image="https://m.media-amazon.com/images/I/61ndjxi8POL._AC_UX679_.jpg"
              title="green iguana"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                $300
              </Typography>
              <Typography variant="body2" color="text.secondary">
                NetCore/Boards
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
      </Grid>
    </Box>
  );
}
