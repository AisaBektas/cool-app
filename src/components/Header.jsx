import React, {} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Grid, Toolbar, Tooltip, Typography, Button, Box, Menu, MenuItem} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import logo from "../assets/Company.png";
import MenuIcon from '@material-ui/icons/Menu';
import Background from '../assets/backgroundMobile.png';
import LogoMobile from '../assets/MobileCompany.png';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';
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
  },
  fontSize: {
    fontSize: "30px",
    fontWeight: "bold"
  }
}));
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    height: "100vh",
    width: "100%",
    backgroundImage: `url(${Background})`,
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    textTransform: "uppercase",
    textAlign: "center",
    justifyContent: "center",
    '&:focus': {
      backgroundColor: "#17A4A4",
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: "#212A39"
      },
    },
  },
}))(MenuItem);
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
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div className={classes.root}>
          {/* <AppBar position="absolute"> */}
          <Box display={{ xs: 'none', sm: 'block' }}>
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
          </Box>

          <Box display={{ xs: 'block', sm: 'none' }}>
            <Toolbar position="absolute">
              <Typography variant="h6" className={classes.title} align="left">
                <img src={logo} ></img>
              </Typography>
              <Typography variant="h6" className={classes.title} align="right">
              <Button aria-controls="customized-menu" aria-haspopup="true" color="secondary" onClick={handleClick}>
       <MenuIcon/>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
       <Box px={3} pt={3} pb={6}>
       <Grid container item lg={12} direction="row" justify="space-between"> 
        <img src={LogoMobile}></img>
        <CloseIcon  onClick={handleClose}/>
        </Grid>
        </Box>
        <StyledMenuItem>
          <ListItemText primary="Home"/>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Platform" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText secondary="Acquire" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText secondary="Create" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText secondary="Engage" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText secondary="Sell" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Insights" />
        </StyledMenuItem>
        <StyledMenuItem>
        <Link to="/Contact" className={classes.contactLink}>
        <Button variant="contained" color="primary">Get in touch</Button>
        </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText secondary="Deutch" />
        </StyledMenuItem>
      </StyledMenu>
              </Typography>
            </Toolbar>
          {/* </AppBar> */}
          </Box>
        </div>
      );
}

export default Header;






 

