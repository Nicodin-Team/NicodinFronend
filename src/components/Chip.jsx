
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const top5Songs = [
  { title: "Organize" },
  { title: "Joha" },
  { title: "Terminator" },
  { title: "Dull" },
  { title: "Nzaza" },
  { title: "c#" },
  { title: "c++" },
  { title: "html" },
  { title: "css" },
  { title: "js" },
  { title: "vue.js" },
  { title: "react" },
  { title: "adem" },
];

export default function Chips() {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={top5Songs}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox icon={icon} checkedIcon={checkedIcon} checked={selected} />
          {option.title}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Checkboxes" placeholder="Checkboxes" />
      )}
    />
  );
}