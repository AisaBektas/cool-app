import React, {} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import imgone from '../assets/proba.jpg.jpg';
import image from '../assets/image.png';
import Header from '../components/Header';
import IntroContent from '../components/IntroContent';
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
  icon: {
    paddingTop: "90vh"
  }
}));

const Intro = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
         <Header/>
         <IntroContent/>
        </div>
      );
}

export default Intro;






 

