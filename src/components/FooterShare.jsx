import React from 'react';
import {Box, Grid, Typography} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
const SharedFooter = () => {
    return ( 
        <Grid container>
        <Grid container item lg={12} direction="row" justify="space-between"> 
        <Box  display={{ xs: 'none', md: 'block' }} >
        <Typography variant="body1">© COMPANY  Privacy policy</Typography>
        </Box>
        <Box  display={{ xs: 'block', md: 'none' }} >
        <Typography variant="body1">© AMODO  Privacy policy</Typography>
        </Box>
        <Typography>
            <LinkedInIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
        </Typography>
        </Grid>
    </Grid>
     );
}
 
export default SharedFooter;