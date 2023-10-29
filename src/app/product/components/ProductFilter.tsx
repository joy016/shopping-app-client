import { Checkbox, FormControlLabel, FormGroup, Paper } from '@mui/material';
import { PRODUCT_TYPE_FILTER } from '../../../../constants/product';

export default function ProductFilter() {
  return (
    <>
      <Paper elevation={2} sx={{ padding: '20px' }}>
        <FormGroup>
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
