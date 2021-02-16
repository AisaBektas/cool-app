import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import background from '../assets/backgroundalt.png';
const useStyles = makeStyles((theme) => ({
  background: {
      backgroundImage: `url(${background})`,
      height: "200vh",
      marginTop: "3%"
  }
    }));
const FourthPart = () => {
    const classes = useStyles();
    return ( 
    <div className={classes.background}>

    </div> );
}
 
export default FourthPart;