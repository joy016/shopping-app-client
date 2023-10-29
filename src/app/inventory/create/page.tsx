import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { PRODUCT_TYPE_FILTER } from '../../../../constants/product';

export default function CreateProduct() {
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  return (
    <Container maxWidth="md" sx={{ marginTop: '20px' }}>
      <Paper
        square
        elevation={2}
        sx={{
          padding: '20px 30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <Typography variant="h5">Product Details</Typography>
        <TextField
          id="outlined-basic"
          label="Product Name"
          variant="outlined"
          fullWidth
        />
        <Stack direction="row" spacing={2}>
          <TextField
            id="outlined-select-currency-native"
            select
            label="Product Brand"
            defaultValue="EUR"
            SelectProps={{
              native: true,
            }}
            helperText="Please select your product brand"
            sx={{ width: '50%' }}
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency-native"
            select
            label="Product Type"
            defaultValue="1"
            SelectProps={{
              native: true,
            }}
            helperText="Please select your product type"
            sx={{ width: '50%' }}
          >
            {PRODUCT_TYPE_FILTER.map((option) => (
              <option key={option.key} value={option.key}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            sx={{ width: '50%' }}
          />
          <TextField
            id="outlined-basic"
            label="Quantity in Stock"
            variant="outlined"
            sx={{ width: '50%' }}
          />
        </Stack>

        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="Image"
          variant="outlined"
          fullWidth
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained" color="success">
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
