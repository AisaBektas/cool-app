import React from 'react';
import HeaderContact from '../components/HeaderContact';
import { makeStyles } from '@material-ui/core/styles';
import polygonContact from '../assets/ContactBackground.png';
import { Grid, Box } from '@material-ui/core';
import FirstPartContact from '../components/FirstPartContact';
import SecondPartContact from '../components/SecondPartContact';
import SharedFooter from '../components/FooterShare';
import backgroundMobile from '../assets/backgroundMobile.png';
import Proba from '../components/Proba';
const useStyles = makeStyles((theme) => ({
    background: {
        backgroundImage: `url(${polygonContact})`,
        backgroundSize: "45% 100%",
        backgroundRepeat: "no-repeat",
        // maxHeight: "auto"
    },
    backgroundTwo: {
        backgroundImage: `url(${backgroundMobile})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "no-repeat",
        minHeight: "76vh"
    },
    color: {
        color: "#212A39"
    }
}));
const ContactPage = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.background}>
        <HeaderContact/>
        <Box display="flex" alignItems="center" height={{ xs: "auto", sm: "85%"}}>
        <Grid container lg={12}>
            <Grid container item lg={6} direction="row" justify="center" alignItems="center">
            <Box>
            <FirstPartContact/>
            </Box>
            </Grid>
            <Grid container item lg={6} direction="row" justify="center" alignItems="center">
            <Box className={classes.backgroundTwo} mt={1} mx={{xs: 0, lg: 10}}>
            <SecondPartContact/>
            </Box>
            </Grid>
        </Grid>
        </Box>
            
    <Box mx={5} display="flex" alignItems="flex-end" className={classes.color}>
        <SharedFooter/>
    </Box>
   
        </div>
     );
}
 
export default ContactPage;