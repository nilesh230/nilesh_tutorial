import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
/**
 * Component: Add Post Form
 * Description: Add New Post Entry
 * @param {*} props 
 * @returns 
 */
const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    title: yup
        .string('Enter your Title')
        .required('Title is required'),
    desc: yup
        .string('Enter your Description')
        .required('Description is required'),
});
const AddPost = (props) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            title: '',
            desc: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            props.setPostData(values)
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="title"
                    name="title"
                    label="Title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                />
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />

                <TextField
                    fullWidth
                    id="desc"
                    name="desc"
                    label="Description"
                    value={formik.values.desc}
                    onChange={formik.handleChange}
                    error={formik.touched.desc && Boolean(formik.errors.desc)}
                    helperText={formik.touched.desc && formik.errors.desc}
                />
                <br /><br />
                <Box display="flex" justifyContent="space-between">
                    <Button variant={"outlined"} type="submit">
                        Submit
                    </Button>
                    <Button variant={"outlined"} onClick={props.toggle} title={'Cancel'}>
                        Cancel
                    </Button>

                </Box>
            </form>
        </div>
    );

}

export default AddPost;
