import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from 'react';


const Dropdown = () => {

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choose variant</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Choose variant"
            onChange={handleChange}
        >
          <MenuItem value={10}>Discowery</MenuItem>
          <MenuItem value={20}>Media</MenuItem>
          <MenuItem value={30}>BBC</MenuItem>
        </Select>
      </FormControl>
  )
};

export default Dropdown;