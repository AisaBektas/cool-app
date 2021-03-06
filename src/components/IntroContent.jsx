import React from 'react';
import {
  Box,
  CssBaseline,
  Typography,
  Container,
  CardContent,
  Grid,
  List,
  ListItemIcon,
  ListItem} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../assets/Text.png';
import LogoMobile from '../assets/HeaderMobile.png';
import { Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import FolderIcon from '@material-ui/icons/Folder';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat'
const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh"
    },
    special: {
      paddingLeft: "6%",
    },
    paragraph: {
      maxWidth: 430,
      paddingTop: "4%"
    },
    color: {
      color: "#fff"
    },
    specialColor: {
      color: "#929FAD"
    },
  contactLink: {
    textDecoration: "none"
  },
  colorMobile: {
    color: "#394257"
  }
  }));

  const theme = createMuiTheme({
    palette: {
        primary: {
          main: "#17A4A4"
        },
        secondary: {
          main: "#fff"
        }
      }
  });
export default function SimpleContainer() {
      const classes = useStyles();
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Box display={{ xs: 'none', sm: 'block' }}>
      <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={9} align="left">
        <Box pl={{ sm: 3, lg: 7}}>
        <Box fontWeight="fontWeightBold" fontSize="h2.fontSize"  className={classes.specialColor}>
          Perfect
        </Box>
        <Box fontWeight="fontWeightBold" fontSize="h1.fontSize" mt={-9} className={classes.color}>
          Insurance
        </Box>
        </Box>
        {/* <img  className={classes.special} src={Logo}></img> */}
        <ThemeProvider theme={theme}>
        <CardContent className={classes.special}>
          <Typography  variant="h5" color="primary">
          Risk Prevention through Behavior Based Incentivess
          </Typography>
          <Typography className={classes.paragraph} color="secondary" component="p">
          Users who display low risk behaviour will get discounts and other benefits of your choice. So far, we have deployed successfully in more than 18 countries around the world.

          </Typography>
        </CardContent>
            <List>
                <ListItem>
                  <ListItemIcon className={classes.color}>
                    <TrendingFlatIcon/>
                  </ListItemIcon>
                  <Link to="/Contact" className={classes.contactLink}>
                  <Typography color="secondary">
                  Risk Prevention, through behavior based incentives
                  </Typography>
                  </Link>
                </ListItem>
                <ListItem>
                  <ListItemIcon className={classes.color}>
                  <TrendingFlatIcon/>
                  </ListItemIcon>
                  <Link to="/Contact" className={classes.contactLink}>
                  <Typography color="secondary">
                Lower Claims, through carefully selected and engaged customer base
                  </Typography>
                  </Link>
                </ListItem>
                <ListItem>
                  <ListItemIcon  className={classes.color}>
                  <TrendingFlatIcon/>
                  </ListItemIcon>
                  <Link to="/Contact" className={classes.contactLink}>
                  <Typography color="secondary">
                Fraud control by real-time verification of the insured object and/or claim over the smartphone camera
                  </Typography>
                  </Link>
                </ListItem>
            </List>
            </ThemeProvider>
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
      </Container>
      </Box>
      <Box display={{ xs: 'block', sm: 'none' }} pt={2}>
      <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} align="left">
        <img  className={classes.special} src={LogoMobile}></img>
        <ThemeProvider theme={theme}>
        <CardContent className={classes.special}>
          <Typography  variant="h6" color="primary">
          Risk Prevention through Behavior Based Incentivess
          </Typography>
          <Typography className={`${classes.paragraph} ${classes.colorMobile}`} component="p" variant="body2">
          Users who display low risk behaviour will get discounts and other benefits of your choice. So far, we have deployed successfully in more than 18 countries around the world.

          </Typography>
        </CardContent>
            <List>
                <ListItem>
                  <ListItemIcon className={classes.colorMobile}>
                    <TrendingFlatIcon/>
                  </ListItemIcon>
                  <Link to="/Contact" className={classes.contactLink}>
                  <Typography className={classes.colorMobile} variant="body2">
                  Risk Prevention, through behavior based incentives
                  </Typography>
                  </Link>
                </ListItem>
                <ListItem>
                  <ListItemIcon className={classes.colorMobile}>
                  <TrendingFlatIcon/>
                  </ListItemIcon>
                  <Link to="/Contact" className={classes.contactLink}>
                  <Typography  className={classes.colorMobile} variant="body2">
                Lower Claims, through carefully selected and engaged customer base
                  </Typography>
                  </Link>
                </ListItem>
                <ListItem>
                  <ListItemIcon  className={classes.colorMobile}>
                  <TrendingFlatIcon/>
                  </ListItemIcon>
                  <Link to="/Contact" className={classes.contactLink}>
                  <Typography  className={classes.colorMobile} variant="body2">
                Fraud control by real-time verification of the insured object and/or claim over the smartphone camera
                  </Typography>
                  </Link>
                </ListItem>
            </List>
            </ThemeProvider>
        </Grid>
      </Grid>
      </Container>
      </Box>
    </React.Fragment>
  );
}


