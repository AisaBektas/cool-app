import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import background from '../assets/backgroundalt.png';
import { 
  Box,
  Container,
  CssBaseline,
  Typography,
  Grid,
  CardMedia
 } 
  from '@material-ui/core';
  import left from '../assets/left.png';
  import right from '../assets/body.png';
const useStyles = makeStyles((theme) => ({
  background: {
    // backgroundImage: `url(${background}), linear-gradient(to bottom, #071F3A 70%, white 30%)`,
    // background: `url(${background})`,
  // backgroundRepeat: "no-repeat",
  // backgroundSize: "600px",
  // background: `url(${background}) no-repeat center`, 
  // backgroundSize: "cover",
  height: "100vh",
  // position: "relative"
   background: `linear-gradient(to top, rgba(255,255,255,255) 30%, transparent 10%, rgba(7, 31, 58, 0.9)), url(${background})`,
  },
  container: {
    paddingTop: "8%",
  },
  secondPart: {
    color: "#fff",
    maxWidth: "35%",
    fontWeight: "bold",
    // paddingBottom: "3%",
  },
  titleColor: {
    color: "#fff"
  },
  size: {
    height: "70vh",
    backgroundColor: "#ddd"
  },
  image: {
    minWidth: "100%",
    maxHeight: "565px"
  },
  // main: {
  //   height: "110vh"
  // }
  }));
const SecondofThird = () => {
    const classes = useStyles();
    return ( 
      // < className={classes.main}>
        <div className={classes.background}>
        <React.Fragment>
      <CssBaseline />
      <Container>
      {/* <Grid container className={classes.container} direction="row" justify="center"> */}
        {/* <Grid container item lg={12} direction="row" justify="center" alignItems="center"> */}
        <Box pt={10} pb={4}>
          <Typography variant="h4" align="center" className={classes.titleColor}>
            Successful implementation
          </Typography>
          </Box>
        {/* </Grid> */}
        <Grid container item lg={12} className={classes.size}>
          <Grid container item lg={6} xs={12}>
          {/* <img className={classes.image} src={left}/> */}
          </Grid>
          <Grid container item lg={6} xs={12}>
        {/* <img className={classes.image} src={right}/> */}
          </Grid>
        </Grid>
      {/* </Grid> */}
      </Container>
    </React.Fragment>
</div>
// </
     );
}
 
export default SecondofThird;


