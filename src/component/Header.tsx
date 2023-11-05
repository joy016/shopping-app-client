'use client';

import { Badge, Box, Paper, Stack } from '@mui/material';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useAppSelector } from '../../store/hooks';

export default function Header() {
  const counterCart = useAppSelector((state) => state.products.counterCart);
  return (
    <Paper
      square
      elevation={3}
      sx={{
        padding: '2rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        width: '96%',
        position: 'fixed',
        top: '0',
        zIndex: '100',
      }}
    >
      <Link href="#">Test</Link>
      <Stack spacing={2} direction="row">
        <Link href="/">HOME</Link>
        <Link href="/shop">SHOP</Link>
        <Link href="#">CONTACTS</Link>
        <Link href="#">BLOGS</Link>
        <Link href="/inventory">INVENTORY</Link>
      </Stack>
      <Stack spacing={2} direction="row">
        <Link href="#">
          <Badge badgeContent={4} color="secondary">
            <FavoriteBorderOutlinedIcon />
          </Badge>
        </Link>
        <Link href="/cart">
          <Badge
            badgeContent={counterCart === 0 ? '0' : counterCart}
            color="secondary"
          >
            <ShoppingBagOutlinedIcon />
          </Badge>
        </Link>
        <Link href="/login">LOGIN</Link>
        <Link href="/register">REGISTER</Link>
      </Stack>
    </Paper>
  );
}
