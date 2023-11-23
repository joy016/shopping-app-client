'use client';
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Link from 'next/link';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { RootState } from '../../../../store/store';
import {
  addSingleItemTocart,
  clearItem,
  removeSingleItem,
} from '../../../../store/slices/cartSlice';

export default function OrderDetails() {
  const { cartCount, itemInCart } = useAppSelector(
    (state: RootState) => state.cart
  );

  const dispatch = useAppDispatch();

  const totalIteminBag =
    cartCount <= 1
      ? `Shopping bag(${cartCount} item)`
      : `Shopping bag(${cartCount} items)`;

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '2rem',
        flexDirection: 'column',
        padding: '2rem 0',
      }}
    >
      <Typography>My Bag({cartCount})</Typography>
      <Paper elevation={3} sx={{ padding: '20px 15px', borderRadius: '15px' }}>
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          <span>
            <LocationOnOutlinedIcon />
          </span>
          Delivery Address
        </Typography>
        <Link href="#">
          <Typography variant="caption">
            Login/Register to Add an address (or) View saved addresses
          </Typography>
        </Link>
      </Paper>
      <Box
        sx={{
          padding: '20px',
          backgroundColor: '#00000008',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Typography>{totalIteminBag}</Typography>
        {itemInCart.map((item) => (
          <Paper
            elevation={3}
            sx={{
              padding: '1rem',
              borderRadius: '10px ',
              display: 'flex',
              gap: '20px',
            }}
          >
            <Image src={item.productImage} width={150} height={150} alt={''} />
            <Stack>
              <Typography>{item.name}</Typography>
              <Typography>Usa Men's T-shirt</Typography>
              <Stack
                direction="row"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <IconButton
                  aria-label="remove"
                  color="error"
                  onClick={() => dispatch(removeSingleItem(item))}
                >
                  <RemoveOutlinedIcon />
                </IconButton>
                <Typography>{item.qty}</Typography>
                <IconButton
                  aria-label="add"
                  color="secondary"
                  onClick={() => dispatch(addSingleItemTocart(item))}
                >
                  <AddOutlinedIcon />
                </IconButton>
              </Stack>
            </Stack>
            <Stack sx={{ marginLeft: 'auto' }}>
              <IconButton
                aria-label="close"
                color="secondary"
                onClick={() => dispatch(clearItem(item))}
              >
                <CloseOutlinedIcon />
              </IconButton>
              <Typography>
                {item.amount ? `₱${item.amount}.00` : `₱${item.price}.00`}
              </Typography>
            </Stack>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
