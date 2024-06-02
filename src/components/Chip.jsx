
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

// const top5Songs = [
//   { title: "Organize" },
//   { title: "Joha" },
//   { title: "Terminator" },
//   { title: "Dull" },
//   { title: "Nzaza" },
//   { title: "c#" },
//   { title: "c++" },
//   { title: "html" },
//   { title: "css" },
//   { title: "js" },
//   { title: "vue.js" },
//   { title: "react" },
//   { title: "adem" },
// ];




export default function Chips() {
  const [skill , setSkill] = React.useState([]);

  const { accessToken } = useAuth();

  useEffect(() => {
    const fetchApi = async () => {
      try{
        const responce = await axios.get('https://teamup.liara.run/resources/skillset/',{
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        console.log(responce)
        setSkill(responce.data)
      } catch(err){
         console.log(err)
      }
    }
    fetchApi();
  },[])

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      // options={top5Songs}
      options={skill}
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