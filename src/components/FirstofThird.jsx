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
    import hexagon from "../assets/hexfinally.png"
const useStyles = makeStyles((theme) => ({
  background: {
    // height: "80vh",
    backgroundImage: `url(${background})`,
  },
  container: {
    paddingTop: "8%",
    // paddingBottom: "10%",
  },
    titleColor: {
    color: "#fff",
    width: "55%",
    fontWeight: "bold"
  },
  subtitle: {
    color: "#F2F4F6",
    maxWidth: "35%",
    paddingTop: "5%",
  },
  text: {
    color: "#F2F4F6",
    paddingRight: "6%",
    paddingLeft: "6%",
    paddingTop: "6%",
    //  paddingBottom: "8%"
  }
  }));
const FirstofThird = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.background}>
        <React.Fragment>
      <CssBaseline />
      <Container>
      <Grid container className={classes.container}>
        <Grid container item lg={12} direction="row" justify="center" alignItems="baseline">
          <Typography variant="h4" className={classes.titleColor}>
          Cost Efficient Distribution through Digital Channels
          </Typography>
          </Grid>
          <Grid container item lg={12} direction="row" justify="center" alignItems="baseline">
          <Typography variant="body1" className={classes.subtitle}>
          Distribute your insurance products directly through digital (smartphone) channels
          </Typography>
        </Grid>
        <Grid container item lg={4} md={4} sm={12} direction="row" justify="flex-start" alignItems="flex-start">
          <Box className={classes.container}>
            <CardContent>
              <img src={hexagon}></img>
              <Typography variant="body1" className={classes.text}>
                Quote and Sell Insurance Products (New and Traditional) directly through Company Smartphone technology.
              </Typography>
            </CardContent>
          </Box>
        </Grid>
        <Grid container item lg={4} md={4} sm={12}  direction="row" justify="flex-start" alignItems="flex-start">
          <Box className={classes.container}>
            <CardContent>
              <img src={hexagon}></img>
              <Typography variant="body1" className={classes.text}>
                Run Smart Policy Management for your portfolio distributed through digital channels based on Company Digital Policy Management module
              </Typography>
            </CardContent>
          </Box>
        </Grid>
        <Grid container item lg={4} md={4} sm={12} direction="row" justify="flex-start" alignItems="flex-start">
          <Box className={classes.container}>
            <CardContent>
              <img src={hexagon}></img>
              <Typography variant="body1" className={classes.text}>
              Extend your digital distribution indirectly Improve your indirect distribution channel with the Company smartphone SDKapp, reach customers in other parts of the country
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>
</div>
     );
}
 
export default FirstofThird;


