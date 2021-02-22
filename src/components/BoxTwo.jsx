import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';
import aiglogo from '../assets/aig_logo.png';
import line from '../assets/HrLine.png';
const useStyles = makeStyles((theme) => ({
  text: {
    color: "#212A39",
    borderColor: "#F22A2B"
  },
  colorText: {
    color: "#17A4A4"
  },
  span: {
    fontWeight: "bold"
  },
  paddingButton: {
    width: "65%"
  }
  }));
const BoxTwo = () => {
  const classes = useStyles();
    return ( 
          <Box bgcolor="background.paper" my="auto" align="left" p={4} className={classes.text}  borderBottom={5} borderRight={5} mx="auto">
              <img src={aiglogo}></img>
              <Box fontSize="h5.fontSize" fontWeight="fontWeightBold">Traveling abroad?</Box>
              <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.colorText}>We’ll offer you travel insurance!</Box>
              <Box><img src={line}></img></Box>
              <Box fontSize={18}><span className={classes.span}>More than 8%</span> of  the total market onboarded in less than 18 months</Box>
              <Box pt={4}><Button variant="contained" color="primary" className={classes.paddingButton}>Read more</Button></Box>
          </Box>
     );
}
export default BoxTwo;


