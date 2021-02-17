import React, {} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Tooltip, Typography, Button, Box} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import logo from "../assets/Company.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textTransform: "uppercase",
    color: "#fff"
  },
  contactButton: {
    backgroundColor: theme.palette.success.main,
  },
  contactLink: {
    textDecoration: "none",
    marginLeft: "3%",
    marginRight: "3%"
  }
}));
const themeTwo = createMuiTheme({
    palette: {
        primary: {
          main: "#17A4A4"
        },
        secondary: {
          main: "#fff"
        }
      }
  });

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          {/* <AppBar position="absolute"> */}
            <Toolbar position="absolute">
              <Typography variant="h6" className={classes.title} align="left">
                <img src={logo} ></img>
              </Typography>
              <Tooltip title="Home" interactive>
                <Button color="secondary">Home</Button>
              </Tooltip>
              <Tooltip title="Platform" interactive>
                <Button color="secondary">Platform</Button>
              </Tooltip>
              <Tooltip title="Insights" interactive>
                <Button color="secondary">Insights</Button>
              </Tooltip>
              <ThemeProvider theme={themeTwo}>
              <Link to="/Contact" className={classes.contactLink}>
              <Tooltip title="Get in Touch">
                <Button variant="contained" color="primary">Get in touch</Button>
              </Tooltip>
              </Link>
              </ThemeProvider>
              <Tooltip title="Deutch" interactive>
                <Button color="secondary">Deutch</Button>
              </Tooltip>

            </Toolbar>
          {/* </AppBar> */}
        </div>
      );
}

export default Header;






 

