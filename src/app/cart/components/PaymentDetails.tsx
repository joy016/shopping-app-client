'use client';

import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { useAppSelector } from '../../../../store/hooks';
import { RootState } from '../../../../store/store';

export default function PaymentDetails() {
  const { subTotal, cartCount, shippingFee, totalAmount } = useAppSelector(
    (state: RootState) => state.cart
  );

  const subTotalAmount =
    cartCount <= 1
      ? `Sub-total(${cartCount} item)`
      : `Sub-total(${cartCount} items)`;

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '2rem',
        flexDirection: 'column',
        padding: '2rem 0',
      }}
    >
      <Typography>Cashback & Voucher</Typography>
      <Paper
        elevation={3}
        sx={{
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          borderRadius: '10px',
        }}
      >
        <DiscountOutlinedIcon color="secondary" />
        <TextField
          id="standard-basic"
          label="Enter Voucher"
          variant="standard"
        />
        <IconButton aria-label="arrow">
          <KeyboardArrowRightOutlinedIcon />
        </IconButton>
      </Paper>
      <Typography>Order Summary</Typography>
      <Paper
        elevation={3}
        sx={{
          padding: '1rem',
          borderRadius: '10px',
        }}
      >
        <Stack spacing={2}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="subtitle2">{subTotalAmount}</Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
              {`₱ ${subTotal}.00`}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="subtitle2">
              Shipping Fee(1% of subtotal)
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
              {`₱ ${shippingFee}.00`}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6">Total</Typography>
            <Typography variant="h6">{`Php ${totalAmount}.00`}</Typography>
          </Box>

          <Button variant="contained" color="secondary">
            Proceed to Buy
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
