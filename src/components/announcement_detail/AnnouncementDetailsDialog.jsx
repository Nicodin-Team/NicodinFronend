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
                <Typography variant="subtitle1">{"Salary : "}</Typography>
                <Box sx={{
                    borderRadius: 2,
                    padding: 1,
                    backgroundColor: "#C0C0C0",
                    width: 230,
                }}>
                    <Typography variant="h6">
                        {data.salary}
                    </Typography>
                </Box>
            </Box>
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
                <Typography variant="subtitle1">{"Location : "}</Typography>
                <Box sx={{
                    borderRadius: 2,
                    padding: 1,
                    backgroundColor: "#C0C0C0",
                    width: 230,
                }}>
                    <Typography variant="h6">
                        {"Ghazvin"}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="subtitle1">{"Skills needed : "}</Typography>
                <Box sx={{
                    borderRadius: 2,
                    padding: 1,
                    backgroundColor: "#C0C0C0",
                    width: 230,
                }}>
                    <Typography variant="h6">
                        {"Ghazvin"}
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
