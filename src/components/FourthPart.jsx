import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import background from '../assets/backgroundalt.png';
import { 
    Container,
    CssBaseline,
    Typography,
    Grid,
    CardContent,
    Box
   } 
    from '@material-ui/core';
    import world from '../assets/map.png';
    import FirstLogo from '../assets/Logo1.png';
    import SecondLogo from '../assets/Logo2.png';
    import ThirdLogo from '../assets/logo3.png';
    import FourthLogo from '../assets/Logo4.png';
    import FifthLogo from '../assets/logo5.png';
    import SixthLogo from '../assets/logo6.png';
    import SeventhLogo from '../assets/logo7.png';
    import EighthLogo from '../assets/logo8.png';
    import NinethLogo from '../assets/logo9.png';
    import TenthLogo from '../assets/logo10.png';
    import EleventhLogo from '../assets/logo11.png';
    import TwelvethLogo from '../assets/logo12.png';
    import Last from '../assets/Last.png';
    import Line from '../assets/HrLine.png';
const useStyles = makeStyles((theme) => ({
  background: {
    //   backgroundImage: `url(${background})`,
      height: "auto",
    //   linear-gradient(0deg, rgba(7, 31, 58, 0.9), rgba(7, 31, 58, 0.9)), url(Group.png);
      background: `linear-gradient(0deg, rgba(7, 31, 58, 0.9),  transparent 5%, rgba(7, 31, 58, 0.9),  transparent 100%), url(${background})`,
  },
  titleColor: {
      color: "#fff"
  },
  subtitle: {
      color: "#17A4A4"
  },
  world: {
      backgroundImage: `url(${world})`,
      backgroundSize: "100% 100%",
      height: "65vh"
  },
  text: {
      color: "#F2F4F6",
      opacity: "0.64"
  }
    }));
const FourthPart = () => {
    const classes = useStyles();
    return ( 
    <div className={classes.background}>
            <Box pt={10} >
            <Container>
      <Grid container>
        <Grid container item lg={12} direction="row" justify="center" alignItems="baseline">
          <Typography variant="h4" className={classes.titleColor}>
          Trusted by clients on 5 continents
          </Typography>
          </Grid>
          <Grid container item lg={12} direction="row" justify="center" alignItems="baseline">
          <Box py={1}><Typography variant="body1" className={classes.subtitle}>
          Over 20 connected insurance projects in various markets
          </Typography>
          </Box>
        </Grid>
        <Box display={{ xs: 'none', md: 'block' }} >
                <Grid container item lg={12} direction="row" justify="center" alignItems="flex-end">
          <Box pt={1} className={classes.world} width="80%" display="flex" alignItems="flex-start" justifyContent="center"> 
             <Box mx={10}>
                 <Typography className={classes.text}>          
                     We work across the globe. Markets worldwide have different road infrastructure, legal environment and general market conditions. Companies apply different strategies to tackle opportunities. No templates exists that can be universally applied across the board. A tailored solution is the only solution that will fit perfectly. Drop us a note.
                 </Typography> 
            </Box>
          </Box>
        </Grid>
        </Box>
        <Grid container item lg={12} direction="row" justify="center" alignItems="baseline">
          <Typography variant="h4" className={classes.titleColor}>
          Live Company platforms
          </Typography>
          </Grid>
          <Grid container item lg={12} direction="row" justify="center" alignItems="baseline">
          <Box py={1}><Typography variant="body1" className={classes.subtitle}>
          Already a part of digital transformation projects
          </Typography>
          </Box>
        </Grid>
        <Box p={10}>
        <Grid container item lg={12} direction="row" justify="center" alignItems="baseline" spacing={3}>
         <Grid item lg={2} xl={2} md={4} sm={6} xs={12}>
           <img src={FirstLogo}></img>
         </Grid>  <Grid item lg={2} xl={2} md={4} sm={6} xs={12}>
           <img src={SecondLogo}></img>
         </Grid>  <Grid item lg={2} xl={2} md={4} sm={6} xs={12}>
           <img src={ThirdLogo}></img>
         </Grid>  <Grid item lg={2} xl={2} md={4} sm={6} xs={12}>
           <img src={FourthLogo}></img>
         </Grid>  <Grid item lg={2} xl={2} md={4} sm={6} xs={12}>
           <img src={FifthLogo}></img>
         </Grid>  <Grid item lg={2} xl={2} md={4} sm={6} xs={12}>
           <img src={SixthLogo}></img>
         </Grid>  <Grid item lg={2} xl={2} md={4} sm={6} xs={12}>
           <img src={SeventhLogo}></img>
         </Grid>  <Grid item lg={2} xl={2} md={4} sm={6} xs={12}>
           <img src={EighthLogo}></img>
         </Grid>  <Grid item lg={2} xl={2} md={4} sm={6} xs={12}>
           <img src={NinethLogo}></img>
         </Grid>  <Grid item lg={2} xl={2} md={4} sm={6} xs={12}>
           <img src={TenthLogo}></img>
         </Grid>  <Grid item lg={2} xl={2} md={4} sm={6} xs={12}>
           <img src={EleventhLogo}></img>
         </Grid>  
         <Grid item lg={2} xl={2} md={4} xs={6}>
           <img src={TwelvethLogo}></img>
         </Grid>
        </Grid>
        </Box>
        <Box p={10}>
        <Grid container item lg={12} direction="row" justify="centef" alignItems="center">
            <Grid item lg={4} xs={12}>
                <Box>
                    <Typography variant="h4" className={classes.titleColor} align="left">
                    ISO 
                    </Typography>
                    <Typography variant="h4" className={classes.titleColor} align="left">
                    certified
                    </Typography>
                    <Typography variant="h4" className={classes.titleColor} align="left">
                    <img src={Line}></img>
                    </Typography>
                </Box>
            </Grid>
            <Grid container item lg={8} xs={12}>
            <Grid item lg={6}>
                <Box>
                    <Typography className={classes.text} align="left">
                    It makes a difference. We’ve passed all the tests, we are safe from data breaching and within ISO quality standards. Amodo is certified for Quality Management and Information Security Management.
                    </Typography>
                </Box>
                </Grid>
                <Box display={{ xs: 'none', sm: 'none', md: 'block', xl: 'block' }} pl={{md: 1,lg: 10}}>
                <Grid item lg={6}>
                <img src={Last}></img>
                </Grid>
                </Box>
            </Grid>
        
        </Grid>
        </Box>
        <Box p={10}>
        <Grid container item lg={12} direction="row" justify="center" alignItems="baseline">
            <Grid item lg={4} xs={12}>
                <Box>
                    <Typography variant="h4" className={classes.titleColor} align="left">
                    We’ve won
                    </Typography>
                    <Typography variant="h4" className={classes.titleColor} align="left">
                    already
                    </Typography>
                    <Typography variant="h4" className={classes.titleColor} align="left">
                    <img src={Line}></img>
                    </Typography>
                </Box>
            </Grid>
            <Grid item lg={8} xs={12}>
        
                <Box pb={3}>
                    <Typography className={classes.text} align="left">
                    Company is announced as the leading company in the Insurance industry for Customer Engagement by Best Review magazine in the USA.
 </Typography>
                </Box>
                <Box  pb={3}>
                    <Typography className={classes.text} align="left">
Implementation of Company technology got us into the award winning business Triglav’s UBI smartphone app is named the #1 app in Europe in 2018 by the world’s most comprehensive mobile insurance study created by PTOLEMUS
 </Typography>
                </Box>
                <Box  pb={3}>
                    <Typography className={classes.text} align="left">
UBI smartphone app is named the Top #3 Mobile Insurance Proposition in Asia, Middle-East and Africa, in 2018, by PTOLEMUS.
 </Typography>
                </Box>
              
            </Grid>
        
        </Grid>
        </Box>
      </Grid>
      </Container>
            </Box>
    </div> );
}
 
export default FourthPart;