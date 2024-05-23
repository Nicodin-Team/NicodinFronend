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

const createrequest = ({ data, id }) => {
  const url = `${baseUrl}/announcements/announcements/${id}/`;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.patch(url, data, config);
};


const AnnouncementDetailsDialog = ({ open, handleClose, id }) => {
  const [data, setData]=useState({})
  useEffect(() => {
    const fetchdata = async () => {
      const response = await getOne({id:1})//pak bad moaref =>:1
      setData(response.data)
      console.log(response)
    }
  fetchdata()
}, [id])

  const send_request = async () => {
    try {
      const response = await createrequest({data , id})
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  if (data) {
    return (
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
                        {data.created_at}
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
          <Button variant="contained" onClick={handleClose} autoFocus>
            Request
          </Button>
        </DialogActions>
      </Dialog>
    );
  } else {
    return <Box />;
  }
};

export default AnnouncementDetailsDialog;
