import React, {} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import imgone from '../assets/proba.jpg.jpg';
import Header from '../components/Header';
import IntroContent from '../components/IntroContent';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${imgone})`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // position: "relative",
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






 

