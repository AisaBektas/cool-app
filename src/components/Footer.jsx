import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import backgroundImg from '../assets/FooterImage.png';
const useStyles = makeStyles((theme) => ({
  background: {
      backgroundImage: `url(${backgroundImg})`,
      height: "600px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
  }
    }));
const Footer = () => {
    const classes = useStyles();
    return ( 
    <div className={classes.background}>

    </div> );
}
 
export default Footer;