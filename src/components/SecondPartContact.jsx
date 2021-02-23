import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useFormik } from 'formik';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogContent from '@material-ui/core/DialogContent'
import * as yup from 'yup';
import {Button, TextField, Checkbox, Dialog, DialogContentText} from '@material-ui/core';
import backgroundMobile from '../assets/backgroundMobile.png';

const validationSchema = yup.object({
    fullname: yup
    .string('Enter your full name')
    .required('Full name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
      message: yup
      .string('Enter your message')
      .required('Message is required'),
      acceptedTerms: yup.boolean()
      .required('Required')
      .oneOf([true], 'You must accept the terms and conditions!'),
        });
      
        const DialogContent = withStyles((theme) => ({
          root: {
            backgroundImage: `url(${backgroundMobile})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "no-repeat",
            
          },
        }))(MuiDialogContent);
const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: "#fff",
    fontSize: "12px"
  },
  text: {
    color: "#394357"
  },
  otherColor: {
    color: "#929FAD"
  },
  dialogTitle: {
    color: "#212A39",
  },
}));
const SecondPartContact = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
    const formik = useFormik({
        initialValues: {
          fullname: '',
          email: '',
          message: '',
          acceptedTerms: false,
        },
        validationSchema: validationSchema,
        onSubmit: (values, {setSubmitting, resetForm}) => {
          setTimeout(() => {
            setOpen(true);
             console.log((JSON.stringify(values, null, 2)));
             resetForm();
             setSubmitting(false);
          })
      }});
    const classes = useStyles();
    return ( 
        <div>
            <Box align="center" mx="auto" my={4} width="80%" className={classes.text}>
            <form onSubmit={formik.handleSubmit}>
            <Box pt={3} pb={1} align="left" fontSize={16} fontWeight="fontWeightBold">Full name</Box>
            <Box>
            <TextField
            className={classes.color}
          fullWidth
          id="fullname"
          name="fullname"
          label="Type your name"
          value={formik.values.fullname}
          onChange={formik.handleChange}
          variant="outlined"
            defaultValue="Default Value"
          error={formik.touched.fullname && Boolean(formik.errors.fullname)}
          helperText={formik.touched.fullname && formik.errors.fullname}
        />
        </Box>
        <Box pt={3} pb={1} align="left" fontSize={16} fontWeight="fontWeightBold">Work email</Box>
        <Box>
        <TextField
          className={classes.color}
          fullWidth
          id="email"
          name="email"
          label="Type your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          variant="outlined"
          defaultValue="Default Value"
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        </Box>
        <Box pt={3} pb={1} align="left" fontSize={16} fontWeight="fontWeightBold">Message</Box>
        <Box>
            <TextField
          className={classes.color}
          fullWidth
          id="message"
          name="message"
          label="Type your message"
          value={formik.values.message}
          onChange={formik.handleChange}
          multiline
          rows={3}
          variant="outlined"
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        </Box>
        <Box pt={3} align="left" fontSize={14} className={classes.otherColor}>Company will use provided information for the purposes of sending the requested information, send product and service promotions and announce company news to you.  Company will maintain a record of data until you revoke the consent that you have given.</Box>
        <Box pt={3} align="left" fontSize={14} fontWeight="fontWeightBold">
        <Checkbox d="acceptedTerms" name="acceptedTerms" checked={formik.values.acceptedTerms} onChange={formik.handleChange} required
          // error={formik.touched.acceptedTerms && Boolean(formik.errors.acceptedTerms)}
          // helperText={formik.touched.acceptedTerms && formik.errors.acceptedTerms}
      />I agree
        </Box>
        <Box pt={2}>
        <Button color="primary" variant="contained" fullWidth type="submit">Send Message</Button>
        </Box>
      </form>
            </Box>
            <Dialog open={open} onClose={handleClose}>
        <DialogContent>
        <Box pt={{xs: 0, lg: 10}} px={{ xs: 0, lg: 10}} pb={{xs: 0, lg: 4}}>
          <DialogContentText>
          <Box align="center" fontSize="h4.fontSize" fontWeight="fontWeightBold" className={classes.dialogTitle}>Thank you for reaching out to us!</Box>
          <Box fontSize="h6.fontSize" align="center" className={classes.text}>
          We will have a look at your message and one of our colleagues will get back to you as soon as possible.
          </Box>
          </DialogContentText>
          <Box pt={10} align="center">
          <Button onClick={handleClose} color="primary">
          send another message
          </Button>
          </Box>
          </Box>
        </DialogContent>
      </Dialog>
        </div>
     );
}
 
export default SecondPartContact;