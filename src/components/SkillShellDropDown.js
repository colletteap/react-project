import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { skillInfo } from './Data';

export default function SkillShellDropDown({ onChange }) {

  return (
    <Autocomplete
    disablePortal
    id="dropdown"
    options={skillInfo}
    getOptionLabel={(option) => option.skill}
    sx={{ width: 300, backgroundColor: "#fcf9da", borderRadius: "10px" }}
    onChange={onChange}
    renderInput={(params) => <TextField {...params} label="Choose a skill..." />}
  />
  );
}
