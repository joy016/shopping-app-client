import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  Checkbox,
  FormGroup,
} from '@mui/material';
import { PRODUCT_PRICE_SORT } from '../../../../constants/product';

export default function ProductSort() {
  return (
    <Paper elevation={2} sx={{ padding: '20px' }}>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="alphabetical"
        name="radio-buttons-group"
      >
        {PRODUCT_PRICE_SORT.map((productPrice) => (
          <FormControlLabel
            value={productPrice.value}
            control={<Radio />}
            label={productPrice.label}
          />
        ))}
      </RadioGroup>

    </Paper>
  );
}
