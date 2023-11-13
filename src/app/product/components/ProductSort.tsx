import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  Checkbox,
  FormGroup,
  styled,
  Stack,
  Button,
} from '@mui/material';
import {
  PRODUCT_PRICE_SORT,
  PRODUCT_SIZE,
  PRODUCT_TYPE_FILTER,
} from '../../../../constants/product';

export default function ProductSort() {
  return (
    <>
      <Paper elevation={3} sx={{ padding: '20px', borderRadius: '10px' }}>
        <FormLabel id="Price" sx={{ fontWeight: 'bold' }}>
          Price
        </FormLabel>

        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={PRODUCT_PRICE_SORT[0].value}
          name="radio-buttons-group"
        >
          {PRODUCT_PRICE_SORT.map((productPrice) => (
            <FormControlLabel
              key={productPrice.value}
              value={productPrice.value}
              control={<Radio />}
              label={productPrice.label}
            />
          ))}
        </RadioGroup>
      </Paper>
      <Paper elevation={3} sx={{ padding: '10px', borderRadius: '10px' }}>
        <FormLabel id="Price" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Size
        </FormLabel>

        <Stack direction="row" spacing={1} sx={{ marginTop: '5px' }}>
          {PRODUCT_SIZE.map((size) => (
            <Button
              key={size.key}
              variant="outlined"
              color="secondary"
              size="small"
            >
              {size.label}
            </Button>
          ))}
        </Stack>
      </Paper>
    </>
  );
}
