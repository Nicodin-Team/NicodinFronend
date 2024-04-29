import React, { useState } from "react";
import "../components/Edituser.module.css";
// import { axios } from 'axios';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';

// const currencies = [
// 	{
// 	  label: 'Select City'
// 	},
// 	{
// 	  value: 'EUR',
// 	  label: '€',
// 	},
// 	{
// 	  value: 'BTC',
// 	  label: '฿',
// 	},
// 	{
// 	  value: 'JPY',
// 	  label: '¥',
// 	},
//   ];
export default function EditProfile() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const setfirstname = (e) => {
    setFirstname(e.target.value);
  };
  const setlastname = (e) => {
    setLastname(e.target.value);
  };
  const setusername = (e) => {
    setUsername(e.target.value);
  };
  const setemail = (e) => {
    setEmail(e.target.value);
  };
  const setgender = (e) => {
    setGender(e.target.value);
  };
  const setage = (e) => {
    setAge(e.target.value);
  };
  const setcountry = (e) => {
    setCountry(e.target.value);
  };
  const setcity = (e) => {
    setCity(e.target.value);
  };

  const setupdate = () => {
    console.log(firstname);
    console.log(lastname);
    console.log(Username);
    console.log(email);
    console.log(gender);
    console.log(age);
    console.log(country);
    console.log(city);
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
              <div className=" card mb-4 mb-xl-0 ">
                <div className="card-header">Profile Picture</div>
                <div className="card-body text-center">
                  <img
                    className="img-account-profile rounded-circle mb-2"
                    src="http://bootdey.com/img/Content/avatar/avatar7.png"
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
              <div className="card h-100 rounded-3">
                <div className="card-body">
                  <div className="row gutters ">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mb-2 text-primary d-flex Font-weight-bolder " style={{fontSize : '20px'}}>
                        Personal Details
                      </h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="firstname" className="d-flex my-1 py-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstname"
                          placeholder="Enter your firstname"
                          onChange={setfirstname}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="Last Name" className="d-flex my-1 py-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="Last Name"
                          placeholder="Enter your Lastname"
                          onChange={setlastname}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="User Name" className="d-flex my-1 py-2">
                          User Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="User Name"
                          placeholder="Enter your username"
                          onChange={setusername}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="Email" className="d-flex my-1 py-2">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="Email"
                          placeholder="Enter your Lastname"
                          onChange={setemail}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="Gender" className="d-flex my-1 py-2">
                          Gender
                        </label>
                        <select
                          name="gender"
                          className="form-control"
                          onChange={setgender}
                        >
                          <option value="male">men</option>
                          <option value="female">women</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor=" Age" className="d-flex my-1 py-2">
                          Age
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id=" Age"
                          placeholder="Enter your Age"
                          onChange={setage}
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
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="city" className="d-flex my-1 py-2">
                          City
                        </label>
                        <div className="ui-select">
                          <select
                            id="city"
                            className="form-control"
                            onChange={setcity}
                          >
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
                            <option value="24">
                              Chaharmahal and Bakhtiari
                            </option>
                            <option value="25">Yazd</option>
                            <option value="26">Sistan and Baluchestan</option>
                            <option value="27">Ilam</option>
                            <option value="28">
                              Kohgiluyeh and Boyer-Ahmad
                            </option>
                            <option value="29">North Khorasan</option>
                            <option value="30">South Khorasan</option>
                            <option value="31">Alborz</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row gutters d-grid">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="text-right my-3 button ">
                          <button
                            type="button"
                            id="submit"
                            name="submit"
                            className="btn btn-warning text-white py-2 "
                            onClick={setupdate}
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <hr />
    </>
  );
}
