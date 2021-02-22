import React from 'react';
import HeaderContact from '../components/HeaderContact';
import { makeStyles } from '@material-ui/core/styles';
import polygonContact from '../assets/ContactBackground.png';
import { Grid, Box } from '@material-ui/core';
import FirstPartContact from '../components/FirstPartContact';
import SecondPartContact from '../components/SecondPartContact';
import SharedFooter from '../components/FooterShare';
const useStyles = makeStyles((theme) => ({
    background: {
        backgroundImage: `url(${polygonContact})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        minHeight: "87vh"
    },
    color: {
        color: "#212A39"
    }
}));
const ContactPage = () => {
    const classes = useStyles();
    return ( 
        <div>
        <HeaderContact/>
        <Box display="flex" alignItems="center" height={{ xs: "auto", sm: "85%"}}>
        <Grid container lg={12}>
            <Grid container item lg={6} direction="row" justify="center" alignItems="center" className={classes.background}>
            <Box>
            <FirstPartContact/>
            </Box>
            </Grid>
            <Grid container item lg={6} direction="row" justify="center" alignItems="center">
            <SecondPartContact/>
            </Grid>
        </Grid>
        </Box>
            
    <Box mx={4} display="flex" alignItems="flex-end" className={classes.color}>
        <SharedFooter/>
    </Box>
        </div>
     );
}
 
export default ContactPage;