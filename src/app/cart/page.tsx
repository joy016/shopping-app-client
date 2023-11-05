import { Box, Container, Grid } from '@mui/material';
import OrderDetails from './components/OrderDetails';
import PaymentDetails from './components/PaymentDetails';

export default function Cart() {
  return (
    <div className="pageContainer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <OrderDetails />
          </Grid>
          <Grid item xs={12} md={4}>
            <PaymentDetails />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
