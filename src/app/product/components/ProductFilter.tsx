import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
} from '@mui/material';
import { PRODUCT_TYPE_FILTER } from '../../../../constants/product';

export default function ProductFilter() {
  return (
    <>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <FormGroup>
          <FormLabel id="Price" sx={{ fontWeight: 'bold' }}>
            Brand
          </FormLabel>
          {PRODUCT_TYPE_FILTER.map((type) => (
            <FormControlLabel
              key={type.key}
              control={<Checkbox />}
              label={type.label}
            />
          ))}
        </FormGroup>
      </Paper>
    </>
  );
}
