'use client';

import { Badge, Box, Stack } from '@mui/material';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header() {
  return (
    <Box
      sx={{
        borderBottom: '0.5px solid',
        padding: '1rem 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#1976d2',
        color: '#ffffff',
      }}
    >
      <Link href="#">Test</Link>
      <Stack spacing={2} direction="row">
        <Link href="/">Products</Link>
        <Link href="#">About</Link>
        <Link href="#">Contacts</Link>
        <Link href="/inventory">Product Inventory</Link>
      </Stack>
      <Stack spacing={2} direction="row">
        <Link href="#">
          <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon sx={{ color: '#ffffff' }} />
          </Badge>
        </Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </Stack>
    </Box>
  );
}
