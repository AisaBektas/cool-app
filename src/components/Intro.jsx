import React, {} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import imgone from '../assets/proba.jpg.jpg';
import image from '../assets/image.png';
import Header from '../components/Header';
import IntroContent from '../components/IntroContent';
import {
  Box} from '@material-ui/core';
// import icon from "../assets/icon.png"; ne znam je staviti preko background image
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${image})`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // position: "relative",
  },
  rootxs: {
    backgroundImage: `url(${image})`,
    height: "30vh",
    backgroundSize: "100% 100%",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // background: `linear-gradient(to top, rgba(255,255,255,255) 50%, transparent 0%), url(${image})`,
  },
  text: {
    minHeight: "70vh"
  }
}));

const Intro = () => {
    const classes = useStyles();
    return (
        <div>
        <Box display={{ xs: 'none', sm: 'block' }} className={classes.root}>
         <Header/>
         <IntroContent/>
         </Box>
         <Box display={{ xs: 'block', sm: 'none' }} className={classes.rootxs}>
         <Header/>
           </Box>
        <Box display={{ xs: 'block', sm: 'none' }} className={classes.text}>
          <IntroContent/>
        </Box>
        </div>
      );
}

export default Intro;






 

