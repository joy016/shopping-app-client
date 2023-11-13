'use client';

import {
  AppBar,
  Badge,
  Box,
  Container,
  CssBaseline,
  Fab,
  Fade,
  Paper,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import Link from 'next/link';

import { useAppSelector } from '../../store/hooks';
import FixedHeader from './header/FixedHeader';
import ResponsiveHeader from './header/ResponsiveHeader';

//icons
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountsHeader from './header/AccountsHeader';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function Header(props: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const counterCart = useAppSelector((state) => state.products.counterCart);
  return (
    <>
      <CssBaseline />
      <AppBar color="secondary">
        <Toolbar
          variant="dense"
          sx={{
            padding: '1.5rem 0.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            // width: { xs: '100%', sm: '90%', lg: '100%' },
          }}
        >
          {isMobile ? <ResponsiveHeader /> : <FixedHeader />}
          <Stack direction="row" spacing={1} alignItems="center">
            <Link href="#">
              <Badge badgeContent={4}>
                <FavoriteBorderOutlinedIcon />
              </Badge>
            </Link>
            <Link href="/cart">
              <Badge badgeContent={counterCart === 0 ? '0' : counterCart}>
                <ShoppingBagOutlinedIcon />
              </Badge>
            </Link>
            <AccountsHeader />
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top" color="secondary">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
