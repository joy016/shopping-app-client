import { Paper, TextField } from '@mui/material';

export default function SearchProduct() {
  return (
    <Paper elevation={2}>
      <TextField id="outlined-search" label="Search products" type="search" />
    </Paper>
  );
}
