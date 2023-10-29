import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

export default function ProductInventory() {
  return (
    <Container maxWidth="md" sx={{ backgroundColor: 'pink' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography>Inventory</Typography>
        <Link href="/inventory/create">
          <Button variant="contained">Create Product</Button>
        </Link>
      </Box>
    </Container>
  );
}
