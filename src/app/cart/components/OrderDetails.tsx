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

export default function OrderDetails() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '2rem',
        flexDirection: 'column',
        padding: '2rem 0',
      }}
    >
      <Typography>My Bag(1)</Typography>
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
        <Typography>Shopping bag (2 items)</Typography>
        <Paper
          elevation={3}
          sx={{
            padding: '1rem',
            borderRadius: '10px ',
            display: 'flex',
            gap: '20px',
          }}
        >
          <Image
            src="/images/latest/banner1.webp"
            width={150}
            height={150}
            alt={''}
          />
          <Stack>
            <Typography>Nike</Typography>
            <Typography>Usa Men's T-shirt</Typography>
            <Stack
              direction="row"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <IconButton aria-label="remove" color="error">
                <RemoveOutlinedIcon />
              </IconButton>
              <Typography>1</Typography>
              <IconButton aria-label="add" color="secondary">
                <AddOutlinedIcon />
              </IconButton>
            </Stack>
          </Stack>
          <Stack sx={{ marginLeft: 'auto' }}>
            <IconButton aria-label="close" color="secondary">
              <CloseOutlinedIcon />
            </IconButton>
            <Typography>₱450.00</Typography>
          </Stack>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            padding: '1rem',
            borderRadius: '10px ',
            display: 'flex',
            gap: '20px',
          }}
        >
          <Image
            src="/images/latest/banner1.webp"
            width={150}
            height={150}
            alt={''}
          />
          <Stack>
            <Typography>Nike</Typography>
            <Typography>Usa Men's T-shirt</Typography>
            <Stack
              direction="row"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <IconButton aria-label="remove" color="error">
                <RemoveOutlinedIcon />
              </IconButton>
              <Typography>1</Typography>
              <IconButton aria-label="add" color="secondary">
                <AddOutlinedIcon />
              </IconButton>
            </Stack>
          </Stack>
          <Stack sx={{ marginLeft: 'auto' }}>
            <IconButton aria-label="close" color="secondary">
              <CloseOutlinedIcon />
            </IconButton>
            <Typography>₱450.00</Typography>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}
