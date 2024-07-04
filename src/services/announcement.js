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
export const getAll = ({page}) => {
  const url = `${baseUrl}/announcements/announcements/?page=${page}`;
  const config = {
    headers: {
      "Content-Type": "application/json",
    }
  };
  return axios.get(url, config);
};

//? DELETE - for delete
export const deleteOne = async ({ id, authToken }) => {
  if (!id) {
    throw new Error("ID is required for deleting an announcement.");
  }

  const url = `${baseUrl}/announcements/announcements/${id}/`;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  try {
    const response = await axios.delete(url, config);
    return response.data;
  } catch (error) {
    console.error("Error deleting announcement:", error);
    throw error;
  }
};
//------------

//---------------

//? PUT / PATCH - for update
export const update = ({ id, data ,authToken}) => {
  const url = `${baseUrl}/announcements/announcements/${id}/`;
  
  try{
    const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  return axios.put(url, data, config);
}catch(error){
  console.error("Error puting announcement:", error);
    throw error;
}
  
};

//? POST - For create somethig
export const create = ({ data }) => {
  const url = `${baseUrl}/announcements/announcements/`;
  try{const config = {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${authToken}`,
    },
  };
  return axios.post(url, data, config);} catch(error){
    console.error("Error updating announcement:", error);
    throw error;
  }
  
};


