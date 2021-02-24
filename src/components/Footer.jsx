import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import backgroundImg from '../assets/FooterImage.png';
import {Container, Box, Grid, Typography, CardMedia} from '@material-ui/core';
import SharedFooter from '../components/FooterShare';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FooterPolygon from '../assets/FooterPolygon.png';
import text from '../assets/textF.png';
import textMobile from '../assets/FM.png';
const useStyles = makeStyles((theme) => ({
  background: {
      backgroundImage: `url(${backgroundImg})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundSize: "cover",
      maxHeight: "auto", 
      backgroundSize: "100% 100%"
},
titleColor: {
    color: "#fff"
},
borderColor: {
    borderColor: " #B4E0E9",
    maxWidth: "80%",
    alignSelf: "center",
},
hover: {
    '&:hover': {
      borderColor: "#D5BB78",
   },
  },
specialBackground: {
    backgroundImage: `url(${FooterPolygon})`,
    backgroundSize: "75% 90%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right"
},
color: {
    color: "#D5BB78",
    fontSize: "120px"
},
colorText: {
    color: "#212A3D"
}
    }));
const Footer = () => {
    const classes = useStyles();
    return ( 
    <div className={classes.background}>
       <Box bgcolor="background.paper" mx="auto" borderBottom={5} display={{ xs: 'none', md: 'block' }} className={`${classes.borderColor} ${classes.hover}`}>
        <Grid container item lg={12}>
            <Grid item lg={7}>
                        <Box pt={4} pl={6} align="left">
                         <Typography color="primary">DIVE DEEPER</Typography>
                        </Box>
                    <Box pt={6} align="left" pl={4}><img src={text}></img></Box>
                    <Box align="left" pl={4}><ExpandMoreIcon  className={classes.color}/></Box>
                </Grid>
                <Grid item lg={5} className={classes.specialBackground}>
                <Box className={classes.colorText} display={{ xs: 'none', lg: 'block' }} pt={15} align="left">
                        <Box fontWeight="fontWeightBold" fontSize="h6.fontSize">
                        Invalid GPS 
                        </Box>
                        <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" pb={3}>
                         point filtering 
                        </Box>
                        <Typography variant="body1">
                        Low accuracy, abnormal speed ...
                        </Typography>
                    </Box>
                </Grid>
        </Grid>
    </Box>
    <Box bgcolor="background.paper" mx="auto" pl={3} borderBottom={5} display={{ xs: 'block', md: 'none' }} className={`${classes.borderColor} ${classes.hover}`}>
        <Grid container>
            <Grid container item lg={12}  direction="row" alignItems="center">
                <Grid item lg={6} xs={12} align="left">
                <Box>
                    <Grid item lg={12}>
                        <Box pl={3} pt={4}>
                         <Typography color="primary">DIVE DEEPER</Typography>
                        </Box>
                    </Grid>
                <Grid item lg={12}>
                    <Box  display={{ xs: 'block', md: 'none' }} pt={6}><img src={textMobile}></img></Box>
                </Grid>
                <Grid item lg={12}>               
                    <Box><ExpandMoreIcon  className={classes.color}/></Box>
                </Grid>
                </Box>
                </Grid>
            </Grid>
        </Grid>
    </Box>
    <Box width="80%" mx="auto" className={classes.titleColor}>
        <SharedFooter/>
    </Box>
    </div> );
}
export default Footer;