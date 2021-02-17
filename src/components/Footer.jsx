import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import backgroundImg from '../assets/FooterImage.png';
import {Container, Box, Grid, Typography, CardMedia} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FooterPolygon from '../assets/FooterPolygon.png';
import text from '../assets/textF.png';
const useStyles = makeStyles((theme) => ({
  background: {
      backgroundImage: `url(${backgroundImg})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundSize: "cover",
      height: "60vh", 
      backgroundSize: "100% 100%",
},
titleColor: {
    color: "#fff"
},
borderColor: {
    borderColor: " #B4E0E0",
    maxWidth: "80%",
    alignSelf: "center"
},
img: {
    maxHeight: "500px",
    maxWidth: "300px"
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
       <Box  bgcolor="background.paper" 
           position="relative"
        top="-10%"
        left="0%"
        zIndex="tooltip"
        mx="auto"
        borderBottom={5} 
        pl={10}
        display={{ xs: 'none', md: 'block' }}
        className={classes.borderColor}>
        <Grid container>
            <Grid container item lg={12}  direction="row" alignItems="center">
                <Grid item lg={6} xs={12} align="left">
                    <Grid item lg={12}>
                        <Box pl={3} pt={4}>
                         <Typography color="primary">DIVE DEEPER</Typography>
                        </Box>
                    </Grid>
                <Grid item lg={12}>
                    <Box pt={6}><img src={text}></img></Box>
                </Grid>
                <Grid item lg={12}>               
                    <Box><ExpandMoreIcon  className={classes.color}/></Box>
                </Grid>
                </Grid>
                <Grid container item lg={6} xs={12} direction="row" justify="center" alignItems="center">
                <Grid item lg={6}>
                <Box className={classes.colorText}>
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
                <Grid item lg={6}>
                   <Box display={{ xs: 'none', md: 'block' }} color="primary.main">
                         <CardMedia className={classes.img} align="right" component="img" image={FooterPolygon}></CardMedia>
                    </Box>
                </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
    <Box  display={{ xs: 'none', md: 'block' }}>
        <Container>
        <Grid container direction="row" justify="space-between" alignItems="flex-end">
            <Grid container item lg={12}>
                <Grid item lg={6}>
                    <Typography variant="body1" className={classes.titleColor}>© COMPANY  Privacy policy</Typography>
                </Grid>
            <Grid item lg={6} className={classes.titleColor}>
                <Typography>
                    <LinkedInIcon/>
                    <FacebookIcon/>
                    <TwitterIcon/>
                </Typography>
            </Grid>
            </Grid>
        </Grid>
    </Container>
    </Box>

    </div> );
}
 
export default Footer;