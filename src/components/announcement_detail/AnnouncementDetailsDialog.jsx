import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import react, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";
const baseUrl = "https://teamup.liara.run";
const getOne = ({ id }) => {
  const url = `${baseUrl}/announcements/announcements/${id}/`;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(url, config);
};

const createrequest = ({ data, id, accessToken, notifySuccess, notifyError }) => {
  const url = `${baseUrl}/announcements/announcements/${id}/`;
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
  const config = {
    headers: {
      "Content-Type": "application/json",
      // Authentization : `Bearer ${accessToken}`
    },
  };
  console.log(accessToken)

  try{
    axios.patch(url, data, config);
    notifySuccess("success")
  }
  catch (err){
    notifyError("error")
  };
};


const AnnouncementDetailsDialog = ({ open, handleClose, id }) => {
  const [data, setData]=useState({})
  const { accessToken } = useAuth();
  const notifySuccess = () => {
    toast.success('🦄 request sent successfully!', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  
  
  const notifyError = () => {
    toast.error('❌ request failed', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  useEffect(() => {
    const fetchdata = async () => {
      const response = await getOne({id})//pak bad moaref =>:1
      setData(response.data)
      console.log(response)
    }
  fetchdata()
}, [id])

  const send_request = async () => {
    try {
      const response = await createrequest({data , id, accessToken, notifySuccess, notifyError})
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  

  if (data) {
    return (
      <>
      <ToastContainer
                    position="top-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    
                    />
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        sx={{
          "& .MuiDialog-paper": {
            padding: 3,
            borderRadius: 5,
            border: "5px solid #f7bc57",
          },
          "& .MuiDialogContent-root": {
            padding: 2,
          },
          "& .MuiDialogActions-root": {
            padding: 1,
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>Job Detail</DialogTitle>
        <DialogContent>
            <Grid container gap={4}>
            <Box>
                <Typography variant="subtitle1">{"Job Name : "}</Typography>
                <Box sx={{
                    borderRadius: 2,
                    padding: 1,
                    backgroundColor: "#C0C0C0",
                    width: 495,
                }}>
                    <Typography variant="h6">
                        {data.title}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="subtitle1">{"Created at : "}</Typography>
                <Box sx={{
                    borderRadius: 2,
                    padding: 1,
                    backgroundColor: "#C0C0C0",
                    width: 230,
                }}>
                    <Typography variant="h6">
                    {(new Date(data.created_at)).toDateString()}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="subtitle1">{"Status : "}</Typography>
                <Box sx={{
                    borderRadius: 2,
                    padding: 1,
                    backgroundColor: "#C0C0C0",
                    width: 230,
                }}>
                    <Typography variant="h6">
                        {data.active? "Active":"Not active"  }
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="subtitle">{"ِDescription : "}</Typography>
                <Box sx={{
                    borderRadius: 2,
                    padding: 1,
                    backgroundColor: "#C0C0C0",
                    width: 495,
                }}>
                    <Typography variant="h6">
                      {data.description}
                    </Typography>
                </Box>
            </Box>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={send_request} autoFocus>
            Request
          </Button>
        </DialogActions>
      </Dialog>
      </>
    );
  } else {
    return <Box />;
  }
};

export default AnnouncementDetailsDialog;
