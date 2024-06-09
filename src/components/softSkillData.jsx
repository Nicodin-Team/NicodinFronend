
import { useEffect } from 'react';
import axios from 'axios';
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useAuth } from '../context/AuthContext';


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


export default function SoftSkillData() {
  const [skillSoft , setSkillSoft] = React.useState([]);

  const { accessToken } = useAuth();

  useEffect(() => {
    const fetchsoftApi = async () => {
      try{
        const responce = await axios.get('https://teamup.liara.run/resources/softskills/',{
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        console.log(responce)
        setSkillSoft(responce.data)
      } catch(err){
         console.log(err)
      }
    }
    fetchsoftApi();
  },[])

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={skillSoft}
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox icon={icon} checkedIcon={checkedIcon} checked={selected} />
          {option.name}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Checkboxes" placeholder="Checkboxes" />
      )}
    />
  );
}