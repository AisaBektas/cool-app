import { Box, Container, CssBaseline, Typography, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import hexagon from '../assets/hexfinally.png';
const useStyles = makeStyles((theme) => ({
    titleColor: {
        color: "#17A4A4",
    },
    secondTitle: {
        color: "#212A39",
        fontWeight: "bold",
    },
    padding: {
        paddingTop: "5%"
    },
    paragraph: {
        color: "#394257"
    },
    hexagon: {
        height: "50px",
        widht: "50px",
    }
}));
const Section = () => {
    const classes = useStyles();
    return ( 
        <div>
        <Box display="flex" justifyContent="center" width="40%" mx="auto" pt={10} pb={7}>
        <Typography variant="h6"  className={classes.titleColor}>
         But there is a smart way of taking Big data even further and Amodo has it ready for you. Read on.
         </Typography>
        </Box>
        <Box display="flex" justifyContent="center" width="50%" mx="auto" pb={4}>
        <Typography variant="h4"  className={classes.secondTitle}>
        Differentiation through New Categories of Insurance Products
         </Typography>
        </Box>
        <Box display="flex" justifyContent="center" width="50%" mx="auto" pb={7}>
        <Typography variant="body1"  className={classes.paragraph}>
        We give you the opportunity to broaden your product <span className={classes.titleColor}>portfolio</span> in a way that will make a difference. And reach out to customers directly, through digital channels 
         </Typography>
        </Box>
        <Box pb={7} display="flex" justifyContent="flex-start" width="45%" mx="auto">
        <Grid container item={12}>
       <Grid container item lg={6}>
       <Grid item lg={3}><img src={hexagon}></img></Grid>
       <Grid item lg={9} align="left">
       <Typography variant="body1" className={classes.paragraph}>
       Insights fueled by Big data enable insurers to launch new, more personalized products.
       </Typography>
       </Grid>
       </Grid>
       <Grid container item lg={6}>
       <Grid item lg={3}><img src={hexagon}></img></Grid>
       <Grid item lg={9} align="left">
       <Typography variant="body1" className={classes.paragraph}>
       Differentiate with short-term and on-demand insurance products (Comprehensive Motor Insurance , Travel insurance, Accident insurance, etc.).  </Typography>
       </Grid>
       </Grid>
       <Grid container item lg={6} className={classes.padding}>
       <Grid item lg={3}><img src={hexagon}></img></Grid>
       <Grid item lg={8} align="left">
       <Typography variant="body1" className={classes.paragraph}>
       Build a Usage Based Insurance portfolio based on behavior and usage data available through smartphone, in-car, wearables and other data sources.  </Typography>
       </Grid>
       </Grid>
       <Grid container item lg={6} className={classes.padding}>
       <Grid item lg={3}><img src={hexagon}></img></Grid>
       <Grid item lg={9} align="left">
       <Typography variant="body1" className={classes.paragraph}>
       Cost Efficient Distribution through Digital Channels 
        </Typography>
        </Grid>
       </Grid>  
       </Grid>
        </Box>
        </div>
     );
}
 
export default Section;
