import { Container, CssBaseline, Typography, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import hexagon from '../assets/hexfinally.png';
const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        maxWidth: "50%",
        paddingTop: "7%",
        paddingBottom: "8%"
    },
    titleColor: {
        color: "#17A4A4",
    },
    secondTitle: {
        color: "#212A39",
        fontWeight: "bold",
    },
    padding: {
        paddingTop: "10%"
    },
    paddingParagraph: {
        paddingTop: "4%",
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
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.container}>
      <Grid container>
        <Grid item lg={12} align="center" className={classes.titleColor}>
        <Typography variant="h6">
        But there is a smart way of taking Big data even further and Amodo has it ready for you. Read on.
        </Typography>
        </Grid>
        <Grid container className={classes.padding}>
        <Grid item lg={12} align="center">
        <Typography variant="h4" className={classes.secondTitle}>
        Differentiation through New Categories of Insurance Products
        </Typography>
        <Typography variant="body1" className={classes.paddingParagraph}>
        We give you the opportunity to broaden your product <span className={classes.titleColor}>portfolio</span> in a way that will make a difference. And reach out to customers directly, through digital channels
        </Typography>
        </Grid>
        </Grid>
        <Grid container className={classes.padding}>
        <Grid container item lg={6}>
        <Grid item lg={3}><img src={hexagon}></img></Grid>
        <Grid item lg={9} align="left">
        <Typography variant="body1" className={classes.paddingParagraph}>
        Insights fueled by Big data enable insurers to launch new, more personalized products.
        </Typography>
        </Grid>
        </Grid>
        <Grid container item lg={6}>
        <Grid item lg={3}><img src={hexagon}></img></Grid>
        <Grid item lg={9} align="left">
        <Typography variant="body1" className={classes.paddingParagraph}>
        Differentiate with short-term and on-demand insurance products (Comprehensive Motor Insurance , Travel insurance, Accident insurance, etc.).  </Typography>
        </Grid>
        </Grid>
        </Grid>
        <Grid container className={classes.padding}>
        <Grid container item lg={6}>
        <Grid item lg={3}><img src={hexagon}></img></Grid>
        <Grid item lg={8} align="left">
        <Typography variant="body1" className={classes.paddingParagraph}>
        Build a Usage Based Insurance portfolio based on behavior and usage data available through smartphone, in-car, wearables and other data sources.  </Typography>
        </Grid>
        </Grid>
        <Grid container item lg={6}>
        <Grid item lg={3}><img src={hexagon}></img></Grid>
        <Grid item lg={9} align="left">
        <Typography variant="body1" className={classes.paddingParagraph}>
        Cost Efficient Distribution through Digital Channels 
         </Typography>
         </Grid>
        </Grid> 
      </Grid>
      </Grid>
      </Container>
    </React.Fragment>
     );
}
 
export default Section;
