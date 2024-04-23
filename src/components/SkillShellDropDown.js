import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { skillInfo } from './Data';

export default function SkillShellDropDown({ onChange }) {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillChange = (event, newValue) => {
    setSelectedSkill(newValue);
    onChange(newValue);
  };

  return (
    <Autocomplete
      disablePortal
      id="dropdown"
      options={skillInfo}
      getOptionLabel={(option) => option.skill}
      sx={{ width: 300, backgroundColor: "#fff", borderRadius: "10px" }}
      onChange={handleSkillChange}
      renderInput={(params) => <TextField {...params} label="Choose a skill..." />}
    />
  );
}
