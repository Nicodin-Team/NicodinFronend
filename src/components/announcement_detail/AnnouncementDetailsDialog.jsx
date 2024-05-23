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
import react from "react";

const AnnouncementDetailsDialog = ({ open, handleClose, data }) => {
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
                    width: 230,
                }}>
                    <Typography variant="h6">
                        {data.jobName}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="subtitle1">{"Company Name : "}</Typography>
                <Box sx={{
                    borderRadius: 2,
                    padding: 1,
                    backgroundColor: "#C0C0C0",
                    width: 230,
                }}>
                    <Typography variant="h6">
                        {data.companyName}
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
                        {"2/23/2024"}
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
                        {"Active"}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="subtitle">{"ِDescription : "}</Typography>
                <Box sx={{
                    borderRadius: 2,
                    padding: 1,
                    backgroundColor: "#C0C0C0",
                    width: 500,
                }}>
                    <Typography variant="h6">
                        {"We are looking for a person ready for hard positions in office with good english to talk. if you are good at this request for it or whatffffffffffffffffffffffffffffffffff"}
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
