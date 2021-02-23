import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
   mainColor: {
       color: "#212A39"
   },
   subColor: {
       color: "#929FAD"
   },
   green: {
       color: "#17A4A4"
   }
}));
const FirstPartContact = () => {
    const classes = useStyles();
    return ( 
        <div>
            <Box align="left" m={3}>
            <Box display={{ xs: 'none', sm: 'block' }} >
                <Box fontWeight="fontWeightBold" className={classes.subColor} fontSize="h2.fontSize" textAlign="left">
                    Let's get
                </Box>
                <Box mt={-7} fontWeight="fontWeightBold" className={classes.mainColor} fontSize="h1.fontSize" textAlign="left">
                    in touch
                </Box>
                </Box>
                <Box display={{ xs: 'block', sm: 'none' }} >
                <Box fontWeight="fontWeightBold" className={classes.subColor} fontSize="h4.fontSize" textAlign="left">
                    Let's get
                </Box>
                <Box mt={-5} fontWeight="fontWeightBold" className={classes.mainColor} fontSize="h3.fontSize" textAlign="left">
                    in touch
                </Box>
                </Box>
                <Box className={classes.green} fontSize="h6.fontSize" my={2}>
                    OFFICES
                </Box>
                <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.mainColor} pb={0.5}>Zagreb</Box>
                <Box fontSize={18} className={classes.mainColor}>Koranska 1c, 10000 Zagreb, Croatia</Box>
                <Box>
                    <Typography className={classes.green}>+385 1 2345 578</Typography>
                    <Typography className={classes.green}>+385 1 2345 679</Typography>
                </Box>
                <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.mainColor} mt={2} pb={0.5}>London</Box>
                <Box fontSize={18} className={classes.mainColor}>Vienna Street 21, 1210 London, UK</Box>
                <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.mainColor}  mt={2} pb={0.5}>Los Angeles</Box>
                <Box fontSize={18} className={classes.mainColor}>Gold Street #3026, CA 94108, Los Angeles, USA</Box>
            </Box>
        </div>
     );
}
 
export default FirstPartContact;