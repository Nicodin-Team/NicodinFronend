import axios from "axios";

const baseUrl = "https://teamup.liara.run";


// export const getOne = ({ uid }) => {
//   const url = `${baseUrl}/${uid}/`;
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
      
//     },
//   };
//   return axios.get(url, config);
// };


export const getAll = ({page,search}) => {
  const url = `${baseUrl}/announcements/announcements/?page=${page}`;
  const config = {
    headers: {
      "Content-Type": "application/json",
    }
  };
  return axios.get(url, config);
};




export const deleteOne = ({ id }) => {
  const url = `${baseUrl}/announcements/announcements/${id}/`;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.delete(url, config);
};

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


