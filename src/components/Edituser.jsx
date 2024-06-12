
import React, { useState , useEffect } from "react";
// import "../components/Edituser.module.css";

import avatar from "../assets/Images/c2.png";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import SoftSkillData from "./softSkillData";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const fetchCities = async () => {
  try {
    const response = await axios.get("https://teamup.liara.run/resources/cities/");
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function EditProfile() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorFirstname, setErrorFirstname] = useState("");
  const [errorLastname, setErrorLastname] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorAge, setErrorAge] = useState("");
  const [cities, setCities] = useState([]);
  const [data, setData] = useState(null);
  const [value, setValue] = useState(0);
  const [file, setFile] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState("https://bootdey.com/img/Content/avatar/avatar7.png");
  const [skill, setSkill] = useState([]);
  const { accessToken } = useAuth();

  useEffect(() => {
    const fetchCityData = async () => {
      const fetchedCities = await fetchCities();
      setCities(fetchedCities);
    };

    const fetchData = async () => {
      try {
        const result = await axios.get("https://teamup.liara.run/accounts/users/profile/", {//bayad ezafe kon
          headers: { Authorization: `Bearer ${accessToken}` }
        });
        console.log(result);
        setData(result.data);
        setFirstname(result.data.first_name);
        setLastname(result.data.last_name);
        setUsername(result.data.username);
        setSelectedCity(result.data.city);
        setGender(result.data.gender);
        setAge(result.data.age);
        setCountry(result.data.country);
      } catch (e) {
        console.log(e);
      }
    };

    const fetchApi = async () => {
      try {
        const response = await axios.get("https://teamup.liara.run/resources/skillset/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setSkill(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchApi();
    fetchData();
    fetchCityData();
  }, [accessToken]);

  const handleTabChange = (event, newValue) => {
    
    setValue(newValue);
    setUpdate();
    // handleupdate(formData);
    console.log('updating data:');
    // api for updating data related to 
  };

  
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const setfirstname = (e) => {
    setFirstname(e.target.value);
    if (!e.target.value) {
      setErrorFirstname("وارد کردن نام الزامی میباشد!");
    } else if (e.target.value.length < 3) {
      setErrorFirstname("نام حداقل باید 3 حرف باشد!");
    } else if (!/^[آ-ی\s]+$/.test(e.target.value)) {
      setErrorFirstname("نام باید شامل حروف فارسی باشد!");
    } else {
      setErrorFirstname("");
    }
  };

  const setlastname = (e) => {
    setLastname(e.target.value);
    if (!e.target.value) {
      setErrorLastname("وارد کردن نام خانوادگی الزامی میباشد!");
    } else if (e.target.value.length < 3) {
      setErrorLastname("");
    }
  };

  const setusername = (e) => {
    setUsername(e.target.value);
    if (!Username) {
      setErrorUsername("Username is required");
    } else {
      setErrorUsername("");
    }
  };

  const setemail = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(email)) {
      setErrorEmail("Invalid email format");
    } else {
      setErrorEmail("");
    }
  };

  const setgender = (e) => {
    setGender(e.target.value);
  };

  const setage = (e) => {
    setAge(e.target.value);

    if (!age) {
      setErrorAge("First name is required");
    } else {
      setErrorAge("");
    }
  };

  const setcountry = (e) => {
    setCountry(e.target.value);
  };

  const setcity = (event, newValue) => {
    console.log("شهر انتخاب شده:", event.target.value);
    setSelectedCity(event.target.value);
  };

  const handleDelete = (skillToDelete) => {
    setSkill(skill.filter((skills) => skills !== skillToDelete));
  };

  const handleAdd = (newSkill) => {
    if (!skill.includes(newSkill)) {
      setSkill([...skill, newSkill]);
    }
  };

  const setUpdate = async () => {
    console.log(setUpdate);
    const formData = new FormData();
    formData.append("bio", "");
    formData.append("photo", imagePreviewUrl);
    formData.append("first_name", firstname);
    formData.append("last_name", lastname);
    formData.append("username", Username);
    formData.append("gender", gender);
    formData.append("age", age);
    formData.append("country", country);
    formData.append("city", selectedCity);

    // formData.append("Chip", skill);
    // formData.append("softSkill" , )//skill and soft skill ezafe kone

    // let data = {
    //   photo: "",
    //   first_name: firstname,
    //   last_name: lastname,
    //   username: Username,
    //   gender: gender,
    //   age: age,
    //   country: country,
    //   city: selectedCity,
    // };

    console.log(accessToken);

    setTimeout(() => {
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    }, 1000);
    const res = await axios
      .patch(`https://teamup.liara.run/accounts/users/update/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      .catch((e) => {
        console.log(e);
      });
    console.log(res);
   
    if (res && res.data.Status === 'Success') {
      const data = res;
      setImagePreviewUrl(data.profilePictureUrl || imagePreviewUrl);
      setFirstname(data.firstName || firstname);
      setLastname(data.lastName || lastname);
      setUsername(data.username || Username);
      setEmail(data.email || email);
      setGender(data.gender || gender);
      setAge(data.age || age);
      setCountry(data.country || country);
      setSelectedCity(data.city || selectedCity);
      // setSkill(data.skill || skill);
      console.log(data);
      console.log("Profile updated successfully!");
    } else {
      const errorData = await res;
      console.log(
        "Failed to update profile:",
        errorData.message || res.statusText
      );
      return errorData;
    }
  };

  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };


  return (
    <>
      <div className="container bootstrap snippets bootdey">
        <h1
          className="font-weight-bold h1 d-flex ps-2"
          style={{ color: "#f1bd4c", fontFamily: "venose" }}
        >
          Edit User Profile
        </h1>
        <hr />
        <div className="d-flex flex-row align-items-center justify-content-between">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 d-flex flex-column align-items-center">
            <div className=" card mb-4 mb-xl-0" >
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center my-4">
              <Stack direction="row" spacing={1}>
                <Avatar
                  className="img-account-profile rounded-circle mb-2"
                  src={imagePreviewUrl}
                  alt=""
                  sx={{ width: 310, height: 315 }}
                />
                </Stack>
                <div className="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 5 MB
                </div>
                <input
                  type="file"
                  className="form-control"
                  onChange={photoUpload}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
            <div className="card h-100 rounded-4">
              <div className="card-body my-1 py-1">
                {/* <h6
                    className="mb-2 text-primary d-flex Font-weight-bolder "
                    style={{ fontSize: "20px" }}
                  >
                    Personal Details
                  </h6> */}
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleTabChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label="Personal Details" {...a11yProps(0)} />
                      <Tab label="Skills" {...a11yProps(1)} />
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                    <div className="row gutters">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label
                            htmlFor="firstname"
                            className="d-flex my-1 py-2"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            placeholder="Enter your firstname"
                            onChange={setfirstname}
                            value={firstname}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label
                            htmlFor="Last Name"
                            className="d-flex my-1 py-2"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="Last Name"
                            placeholder="Enter your Lastname"
                            onChange={setlastname}
                            value={lastname}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label
                            htmlFor="User Name"
                            className="d-flex my-1 py-2"
                          >
                            User Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="User Name"
                            placeholder="Enter your username"
                            onChange={setusername}
                            value={Username}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="Email" className="d-flex my-1 py-2">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="Email"
                            placeholder="Enter your email"
                            onChange={setemail}
                            value={email}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="Gender" className="d-flex my-1 py-2">
                            Gender
                          </label>
                          <Form.Select
                            aria-label="Default select example"
                            name="gender"
                            className="form-control"
                            onChange={setgender}
                            value={gender}
                          >
                            <option value="male">male</option>
                            <option value="female">female</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                        <label htmlFor="age" className="d-flex my-1 py-2">
                            age
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="age"
                            placeholder="Enter your age"
                            onChange={setage}
                            value={age}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="Country" className="d-flex my-1 py-2">
                            Country
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="Country"
                            placeholder="Enter your Country"
                            onChange={setcountry}
                            value={country}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="city" className="d-flex my-1 py-2">
                            City
                          </label>
                          <div className="ui-select">
                            <Form.Select
                              aria-label="Default select example"
                              id="city"
                              className="form-control"
                              onChange={setcity}
                              value={selectedCity}
                            >
                              <option value="">Select City</option>
                              {cities.slice(0, 50).map((city) => (
                                <option key={city.id} value={city.name}>
                                  {city.name}
                                </option>
                              ))}
                            </Form.Select>
                          </div>
                        </div>
                      </div>
                      <div className="row gutters d-flex">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="text-right my-3 button">
                            <button
                              type="button"
                              id="submit"
                              name="submit"
                              className="btn btn-warning text-white py-2 click"
                              onClick={setUpdate}
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    <div
                      className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                      style={{ height: "420px", width: "700px" }}
                    >
                      <div className="my-3 py-2 d-inline">
                      <div className="d-flex">
                        <p>hardskill</p>
                        </div>
                        <Paper
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            listStyle: "none",
                            p: 4,
                            m: 2,
                          }}
                          component="ul"
                        >
                          
                          <Autocomplete
                              multiple
                              id="checkboxes-tags-demo"
                              // options={top5Songs}
                              options={skill}
                              // onClick={() => handleAdd(skill)}
                              onDelete={() => handleDelete(skill)} 
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
                            
                          
                          {/* <Chips/> */}

                          {/* {chipData.map((data) => {
                            let icon;

                            if (data.label === "React") {
                              icon = <TagFacesIcon />;
                            }

                            return (
                              <ListItem key={data.key}>
                                <Chip
                                  icon={icon}
                                  label={data.label}
                                  onDelete={
                                    data.label === "React"
                                      ? undefined
                                      : handleDelete(data)
                                  }
                                />
                              </ListItem>
                            );
                          })} */}
                        </Paper>
                        <hr />
                        <div className="d-flex">
                        <p>softskill</p>
                        </div>
                        <Paper
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            listStyle: "none",
                            p: 2,
                            m: 2,
                            
                          }}
                          component="ul"
                        >
                          <SoftSkillData/>
                         
                          {/* <FormGroup style={{ display: "inline-block" }}>
                          {softSkillData.map((data) => (
                              <FormControlLabel
                                key={data.id}
                                control={<Checkbox checked={data.checked}  name={data.name}/>}
                                label={data.name}
                              />
                            ))} */}
                            
                          {/* </FormGroup> */}
                        </Paper>
                      </div>
                    </div>
                  </CustomTabPanel>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
