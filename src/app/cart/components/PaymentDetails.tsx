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

export default function PaymentDetails() {
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
            <Typography variant="subtitle2">Sub-total (1 item)</Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
              Php 889.00
            </Typography>
          </Box>

          <Typography>Shipping</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h6'>Total</Typography>
            <Typography variant="h6">Php 889.00</Typography>
          </Box>

          <Button variant="contained" color="secondary">
            Proceed to Buy
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
