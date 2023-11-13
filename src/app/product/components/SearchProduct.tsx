import { Paper, TextField } from '@mui/material';

export default function SearchProduct() {
  return (
    <Paper elevation={2}>
      <TextField sx={{width: '100%'}} id="searchProduct" label="Search products" type="search" />
    </Paper>
  );
}
