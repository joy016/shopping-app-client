import { Paper, Stack, Badge } from '@mui/material';
import Link from 'next/link';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useAppSelector } from '../../../store/hooks';
import { NAVLINK } from '../../../constants/navbar';

export default function FixedHeader() {
  const counterCart = useAppSelector((state) => state.products.counterCart);

  return (
    <>
      <Link href="#">Test</Link>
      <Stack spacing={2} direction="row">
        {NAVLINK.map((nav) => (
          <Link key={nav.navLabel} href={nav.link}>
            {nav.navLabel}
          </Link>
        ))}
      </Stack>
    </>
  );
}
