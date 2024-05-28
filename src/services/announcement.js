import axios from "axios";

const baseUrl = "https://teamup.liara.run";

//? GET - for read
export const getUser = ({ authToken }) => {
  const url = `${baseUrl}/accounts/user/token/`;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  return axios.get(url, config);
};

//? GET - for read
export const getAll = ({page,search}) => {
  const url = `${baseUrl}/announcements/announcements/?page=${page}`;
  const config = {
    headers: {
      "Content-Type": "application/json",
    }
  };
  return axios.get(url, config);
};

//? DELETE - for delete
export const deleteOne = ({ id,authToken }) => {
  const url = `${baseUrl}/announcements/announcements/${id}/`;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  return axios.delete(url, config);
};

//? PUT / PATCH - for update
export const update = ({ id, data ,authToken}) => {
  const url = `${baseUrl}/announcements/announcements/${id}/`;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  return axios.put(url, data, config);
};

//? POST - For create somethig
export const create = ({ data }) => {
  const url = `${baseUrl}/announcements/announcements/`;
  const config = {
    headers: {
      "Content-Type": "application/json",
    //   Authorization: `Bearer ${authToken}`,
    },
  };
  return axios.post(url, data, config);
};


