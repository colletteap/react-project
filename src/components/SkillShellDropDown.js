import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { skillInfo } from './Data';
import { useNavigate } from 'react-router-dom';

export default function SkillShellDropDown() {
const navigate = useNavigate();

const handleSkillSelect = (event, skill) => {
if (skill) {
    navigate(skill.linkTo);
}
};

  return (
    <Autocomplete
    disablePortal
    id="dropdown"
    options={skillInfo}
    getOptionLabel={(option) => option.skill}
    sx={{ width: 300, backgroundColor: "#87ACDF", borderRadius: "10px" }}
    onChange={handleSkillSelect}
    renderInput={(params) => <TextField {...params} label="Choose a skill..." />}
  />
  );
}
