import { useState, useEffect } from "react";
import "../components/Edituser.module.css";
import Form from "react-bootstrap/Form";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import avatar from "../assets/Images/c2.png";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from "axios";
import {useAuth} from '../context/AuthContext'
// import { useAuth } from 'path/to/auth/hook';

const fetchCities = async () => {
  try {
    const response = await axios.get(
      "https://teamup.liara.run/resources/cities/"
    );
    const { data } = response;
    console.log(data);
    return data;
  } catch (error) {
    // console.error("Error fetching cities:", error);
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
  // const [city, setCity] = useState("");
  const [profilePicture, setProfilePicture] = useState(
    "https://bootdey.com/img/Content/avatar/avatar7.png"
  );
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorFirstname, setErrorFirstname] = useState("");
  const [errorLastname, setErrorLastname] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorAge, setErrorAge] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [data, setData] = useState(null);
  const [value, setValue] = useState(0);
  // const [newfirstname , setNewfirstname] = useState("");
  const [chipData, setChipData] = useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
    { key: 5, label: "c++" },
    { key: 6, label: "c#" },
    { key: 7, label: "html" },
    { key: 8, label: "css" },
    { key: 9, label: "javascript" },
    { key: 10, label: "java" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const setcity = (event, newValue) => {
    setSelectedCity(newValue);
  };

  useEffect(() => {
    const fetchCityData = async () => {
      const fetchedCities = await fetchCities();
      setCities(fetchedCities);
    };
    const id = 1;
    async function fetchData() {
      const result = await axios.get(`https://teamup.liara.run/accounts/users/${id}`);
      // console.log(typeof(result.data))
      
      setData(result.data);
      setFirstname(result.data.first_name)
      setLastname(result.data.last_name)
      setUsername(result.data.username)
      setcity(result.data.city)
      setGender(result.data.gender)
      setAge(result.data.age)
      setCountry(result.data.country)
    }

    fetchData();
    fetchCityData();
  }, []);
   
  // const handleChange = (event) => {
  //   // setSelectedCity(event.target.value);
  //   console.log('VALUE', event.target.value);
  //   setValue(event.target.value);
  // };

  const handleTabChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  }


  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };


  const setfirstname = (e) => {
    setFirstname(e.target.value);
    
    if (!firstname) {
      setErrorFirstname("First name is required");
    } else {
      setErrorFirstname("");
    }
  };

  const setlastname = (e) => {
    setLastname(e.target.value);
    if (!lastname) {
      setErrorLastname("Last name is required");
    } else {
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
    const newAge = parseInt(e.target.value);
    if (!isNaN(newAge) && newAge >= 18) {
      setAge(newAge);
      setErrorAge("");
    } else {
      setErrorAge("Age must be a number greater than or equal to 18");
    }
  };

  const setcountry = (e) => {
    setCountry(e.target.value);
  };

  // const setcity = (e) => {
  //   setCity(e.target.value);
  // };

  const handleProfilePictureChange = (e) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target.result) {
        setSelectedFile(e.target.files[0]);
        setProfilePicture(e.target.result); // Set preview image URL
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  
  const { accessToken } = useAuth();
  
  const setUpdate = async () => {
    console.log(setUpdate)
      const formData = new FormData();
      // formData.append("photo", selectedFile); 
      formData.append("photo", ''); 

      // Add other form data
      formData.append("bio", '');
      formData.append("first_name", firstname);
      formData.append("last_name", lastname);
      formData.append("username", Username);
      formData.append("gender", gender); 
      formData.append("age", age); 
      formData.append("country", country); 
      formData.append("city", selectedCity);
      
     console.log(accessToken)
      try {
        const response = await fetch(
          "https://teamup.liara.run/accounts/users/update/",
          {
            
            method: "PATCH",
            body: formData,
            headers: { 
              "Content-Type": "multipart/form-data",
              'Authorization': `Bearer ${accessToken}`
            }
          }
        );
        console.log(response)
        if (response.ok) {
          const data = await response.json();
          setProfilePicture(data.profilePictureUrl || profilePicture);
          setFirstname(data.firstName || firstname);
          setLastname(data.lastName || lastname);
          setUsername(data.username || Username);
          setEmail(data.email || email);
          setGender(data.gender || gender);
          setAge(data.age || age);
          setCountry(data.country || country);
          setSelectedCity(data.city || selectedCity);
          console.log(data)
          console.log("Profile updated successfully!");
        } else {
          
          const errorData = await response.json();
          console.log(
            "Failed to update profile:",
            errorData.message || response.statusText
          );
        }
      } catch (error) {
        console.log("Error updating profile:", error);
      }
    
    
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
            <div className=" card mb-4 mb-xl-0">
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center my-4">
                <img
                  className="img-account-profile rounded-circle mb-2"
                  src={profilePicture || data.photo}
                  alt=""
                />
                <div className="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 5 MB
                </div>
                <input type="file" className="form-control" />
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
                          <label htmlFor=" Age" className="d-flex my-1 py-2">
                            Age
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id=" Age"
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
                              <option value=''>Select City</option>
                              {cities.slice(0, 50).map((city) => (
                                <option key={city.id} value={city.name}>
                                  {city.name}
                                </option>
                              ))}
                            </Form.Select>
                            {/* 
                          <option value="">Select City</option>
                          <option value="1">Tehran</option>
                          <option value="2">Gilan</option>
                          <option value="3">East Azerbaijan</option>
                          <option value="4">Khuzestan</option>
                          <option value="5">Fars</option>
                          <option value="6">Isfahan</option>
                          <option value="7">Razavi Khorasan</option>
                          <option value="8">Qazvin</option>
                          <option value="9">Semnan</option>
                          <option value="10">Qom</option>
                          <option value="11">Markazi</option>
                          <option value="12">Zanjan</option>
                          <option value="13">Mazandaran</option>
                          <option value="14">Golestan</option>
                          <option value="15">Ardabil</option>
                          <option value="16">West Azerbaijan</option>
                          <option value="17">Hamadan</option>
                          <option value="18">Kurdistan</option>
                          <option value="19">Kermanshah</option>
                          <option value="20">Lorestan</option>
                          <option value="21">Bushehr</option>
                          <option value="22">Kerman</option>
                          <option value="23">Hormozgan</option>
                          <option value="24">Chaharmahal and Bakhtiari</option>
                          <option value="25">Yazd</option>
                          <option value="26">Sistan and Baluchestan</option>
                          <option value="27">Ilam</option>
                          <option value="28">Kohgiluyeh and Boyer-Ahmad</option>
                          <option value="29">North Khorasan</option>
                          <option value="30">South Khorasan</option>
                          <option value="31">Alborz</option>
                        </select> */}
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
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 " style={{height:'380px',width:'700px'}}>
                    <div className="my-3 py-2 d-inline"> 
                    <Paper
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        listStyle: "none",
                        p: 4,
                        m: 5,
                      }}
                      component="ul"
                    >
                      {chipData.map((data) => {
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
                      })}
                    </Paper>
                    <hr/>
                    <Paper
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        listStyle: "none",
                        p: 2,
                        m: 5,
                      }}
                      component="ul"
                    >
                    <FormGroup style={{display:'inline-block'}}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="روابط عمومی" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="تیم سازی" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="مهارت در ارائه" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="مدیریت استرس" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="خودشناسی" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="مسئولیت پذیری" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="رقابت جویی" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="گزارش نویسی" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="کاریزما" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="مدیریت بحران" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="خلاقیت وایده پردازی" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="قدرت مذاکره" />
                    </FormGroup>
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
