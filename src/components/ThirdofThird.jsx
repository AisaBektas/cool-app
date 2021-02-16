import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Container,
  CssBaseline,
  Typography,
  Grid,
  CardContent,
  Box
 } 
  from '@material-ui/core';
    import hexagon from "../assets/hexfinal.png"
    import first from '../assets/first.png';
    import second from '../assets/second.png';
    import third from '../assets/third.png';
import {Class} from '@material-ui/icons'
const useStyles = makeStyles((theme) => ({
  background: {
  backgroundColor: "#fff"
  },
  container: {
    backgroundColor: "#fff",
    borderColor: "#B4E0E0",
  },
  hover: {
    '&:hover': {
      borderColor: "#D5BB78",
   },
  },
    titleColor: {
    color: "#212A39",
    width: "55%",
    fontWeight: "bold",
    paddingBottom: "4%"
  },
  subtitle: {
    color: "#212A39",
    maxWidth: "35%",
    paddingTop: "5%",
  },
  text: {
    color: "#394357",
    paddingRight: "6%",
    paddingLeft: "6%",
    paddingTop: "6%",
  },
  paragraph: {
    color: "#17A4A4",
    maxWidth: "50%",
    marginTop: "5%" 
},
top: {
  paddingTop: "8%"
},
iconspc: {
  position: "relative",
   top: "-45px",
},
iconspca: {
  position: "relative",
   top: "-35px",
}
  }));
const ThirdofThird = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.background}>
        <React.Fragment>
      <CssBaseline />
      <Container>
      <Grid container className={classes.top}>
        <Grid container item lg={12} direction="row" justify="center" alignItems="baseline">
          <Typography variant="h4" className={classes.titleColor}>
          Monetize on Just in Time Marketing capabilities of Company Platform
          </Typography>
          </Grid>
            <Box boxShadow={3}>
            <Grid container lg={12}>
        <Grid container item lg={4} md={4} sm={12} direction="row" justify="center" alignItems="flex-end">
        <Grid container item lg={12} md={12} sm={12} direction="row" justify="center" alignItems="flex-start">
              <img src={first} className={classes.iconspc}></img>
              </Grid>
          <Box className={`${classes.container} ${classes.hover}`} borderBottom={5}>
            <CardContent>
              <Typography variant="body1" className={classes.text}>
              Company does advanced behavior profiling based on geo-location, usage and behavior data from multiple sources.
              </Typography>
            </CardContent>
          </Box>
        </Grid>
        <Grid container item lg={4} md={4} sm={12}  direction="row" justify="center" alignItems="flex-end">
        <Grid container item lg={12} md={12} sm={12} direction="row" justify="center" alignItems="flex-start">
              <img src={second} className={classes.iconspc}></img>
              </Grid>
          <Box className={`${classes.container} ${classes.hover}`} borderBottom={5}>
            <CardContent>
              {/* <img src={hexagon}></img> */}
              <Typography variant="body1" className={classes.text}>
              Customer segmentation built on behaviour data with significantly stronger predictive capability than any demographic data. 
            </Typography>
            </CardContent>
          </Box>
        </Grid>
        <Grid container item lg={4} md={4} sm={12} direction="row" justify="center" alignItems="flex-end">
        <Grid container item lg={12} md={12} sm={12} direction="row" justify="center" alignItems="flex-start">
              <img src={third} className={classes.iconspca}></img>
              </Grid>
          <Box className={`${classes.container} ${classes.hover}`} borderBottom={5}>
            <CardContent>
              {/* <img src={hexagon}></img> */}
              <Typography variant="body1" className={classes.text}>
              Run automated and scheduled promotion campaigns through various channels: SMS, WhatsApp, email, Push Notification, all via Company Digital Communication module.
         </Typography>
            </CardContent>
          </Box>
        </Grid>
        </Grid>
        </Box>
        <Grid container item lg={12} direction="row" justify="center" alignItems="baseline">
          <Typography variant="subtitle1" className={classes.paragraph}>
          After recording more than 1.5 billion kilometers of user mobility and using the data in the customer engagement process, we have achieved an 18% rise of conversion rates
       </Typography>
          </Grid>
      </Grid>
      </Container>
    </React.Fragment>
</div>
     );
}
 
export default ThirdofThird;


