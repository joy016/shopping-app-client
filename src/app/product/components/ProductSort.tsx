import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
} from '@mui/material';

export default function ProductSort() {
  return (
    <Paper elevation={2} sx={{ padding: '20px' }}>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="Alphabetical"
        />
        <FormControlLabel
          value="male"
          control={<Radio />}
          label="Price - High to low"
        />
        <FormControlLabel
          value="other"
          control={<Radio />}
          label="Price - Low to high"
        />
      </RadioGroup>
    </Paper>
  );
}
