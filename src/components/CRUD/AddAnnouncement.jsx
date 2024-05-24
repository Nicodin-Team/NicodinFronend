import React, { useState } from "react";
import {
    Box,
    Button,
    Dialog,
    DialogTitle,
    FormControl,
    Input,
    InputLabel,
    Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const modalSchema = yup.object({
    title: yup.string().required("این فیلد اجباری میباشد"),
    description: yup.string().required("این فیلد اجباری میباشد"),
    created_at: yup.string().required("این فیلد اجباری میباشد"),
    active: yup.string().required("این فیلد اجباری میباشد"),
});

const AddAnnouncements = ({ open, handleClose, handleSave, data }) => {
    const [touched, setTouched] = useState({
        title: false,
        description: false,
        created_at:  false,
        active: false
    });

    const handleTouch = ({ name }) => {
        const newTouched = {
            title: touched.title,
            description: touched.description,
            created_at: touched.created_at,
            active: touched.active
        };
        switch (name) {
            case "title":
                newTouched.title = true;
                break;
            case "description":
                newTouched.description = true;
                break;
            case "created_at":
                newTouched.created_at = true;
                break;
            case "active":
                newTouched.active = true;
                break;
            default:
                return;
        }
        setTouched(newTouched);
    };
    const formik = useFormik({
        initialValues: {
            title: data.title,
            description: data.description,
            created_at: data.created_at,
            active: data.active
        },
        validationSchema: modalSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                handleSave(values);
                resetForm();
                handleClose();
            } catch (error) {
                console.log(error);
            }
        },
    });
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            sx={{
                "& .MuiDialog-paper": {
                    borderRadius: 5,
                },
            }}>
            <Box
                width={600}
                pt={3}
                pb={5}
                px={3}>
                <DialogTitle>
                    <Typography
                        variant="h6"
                        fontWeight={700}>
                        {"Announcement"}
                    </Typography>
                </DialogTitle>
                <Box
                    px={2}
                    display="flex"
                    flexDirection="column"
                    alignItems="center">
                    <FormControl
                        fullWidth
                        sx={{
                            mt: 3,
                        }}>
                        <InputLabel shrink>
                            <Typography
                                variant="h6"
                                fontWeight={700}>
                                {`Title : `}
                            </Typography>
                        </InputLabel>
                        <Input
                            value={formik.values.title}
                            onFocus={() => handleTouch({ name: "title" })}
                            name="title"
                            onChange={formik.handleChange}
                        />
                    </FormControl>
                    {touched.title && formik.errors.title && (
                        <Typography
                            variant="subtitle2"
                            mt={0.5}
                            ml={1}
                            color="error">
                            {formik.errors.title}
                        </Typography>
                    )}
                    <FormControl
                        fullWidth
                        sx={{
                            mt: 3,
                        }}>
                        <InputLabel shrink>
                            <Typography
                                variant="h6"
                                fontWeight={700}>
                                {`Description : `}
                            </Typography>
                        </InputLabel>
                        <Input
                            value={formik.values.description}
                            onFocus={() => handleTouch({ name: "description" })}
                            name="description"
                            onChange={formik.handleChange}
                        />
                    </FormControl>
                    {touched.description && formik.errors.description && (
                        <Typography
                            variant="subtitle2"
                            mt={0.5}
                            ml={1}
                            color="error">
                            {formik.errors.description}
                        </Typography>
                    )}
                    <FormControl
                        fullWidth
                        sx={{
                            mt: 3,
                        }}>
                        <InputLabel shrink>
                            <Typography
                                variant="h6"
                                fontWeight={700}>
                                {`Created_at : `}
                            </Typography>
                        </InputLabel>
                        <Input
                            value={formik.values.created_at}
                            onFocus={() => handleTouch({ name: "created_at" })}
                            name="created_at"
                            onChange={formik.handleChange}
                        />
                    </FormControl>
                    {touched.created_at && formik.errors.created_at && (
                        <Typography
                            variant="subtitle2"
                            mt={0.5}
                            ml={1}
                            color="error">
                            {formik.errors.created_at}
                        </Typography>
                    )}
                    <FormControl
                        fullWidth
                        sx={{
                            mt: 3,
                        }}>
                        <InputLabel shrink>
                            <Typography
                                variant="h6"
                                fontWeight={700}>
                                {`Active : `}
                            </Typography>
                        </InputLabel>
                        <Input
                            value={formik.values.active}
                            onFocus={() => handleTouch({ name: "active" })}
                            name="active"
                            onChange={formik.handleChange}
                        />
                    </FormControl>
                    {touched.active && formik.errors.active && (
                        <Typography
                            variant="subtitle2"
                            mt={0.5}
                            ml={1}
                            color="error">
                            {formik.errors.active}
                        </Typography>
                    )}
                </Box>
                <Box
                    display="flex"
                    justifyContent="end"
                    mt={4}
                    px={2}>
                    <Button
                        onClick={handleClose}
                        disableElevation
                        sx={{
                            borderRadius: 2.5,
                            mr: 1.5,
                            color: "#000",
                            borderColor: "#000",
                            px: 4,
                            "&:hover": {
                                backgroundColor: "#fff",
                                border: "1px solid #5627FF",
                            },
                        }}
                        variant="outlined">
                        <Typography>{"cancel"}</Typography>
                    </Button>
                    <Button
                        onClick={formik.handleSubmit}
                        disableElevation
                        sx={{
                            borderRadius: 2.5,
                            px: 4,
                        }}
                        variant="contained">
                        <Typography>{"submit"}</Typography>
                    </Button>
                </Box>
            </Box>
        </Dialog>
    );
};

export default AddAnnouncements;


