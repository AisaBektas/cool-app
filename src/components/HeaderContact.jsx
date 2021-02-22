import React, {} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { Fade, Grid, Toolbar, Tooltip, Typography, Button, Box, Menu, MenuItem} from '@material-ui/core';
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
    color: "#212A39"
  },
  contactButton: {
    backgroundColor: theme.palette.success.main,
  },
  contactLink: {
    textDecoration: "none",
    color: "#212A39"
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
  <Menu elevation={0} getContentAnchorEl={null}
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
    const [anchorEle, setAnchorEle] = React.useState(null);
    const open = Boolean(anchorEle);

    const handleClickOne = (event) => {
      setAnchorEle(event.currentTarget);
    }; 

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleCloseOne = () => {
      setAnchorEle(null);
    };
    return (
        <div className={classes.root}>
          <Box display={{ xs: 'none', sm: 'block' }}>
            <Toolbar position="absolute">
              {/* <Typography variant="h6" className={classes.title} align="left">
                COMPANY
              </Typography> */}
              <Box fontWeight="fontWeightBold" className={classes.title} fontSize="h5.fontSize" letterSpacing={5} textAlign="left">
         COMPANY
                </Box>
              <Tooltip title="Home" interactive>
              <Link to="/" className={classes.contactLink}>
                <Button>Home</Button>
                </Link>
              </Tooltip>
              <Tooltip title="Platform" interactive>
              <Link to="/" className={classes.contactLink}>
                <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClickOne}>Platform</Button>
              </Link>
              </Tooltip>
                  <Menu id="fade-menu" anchorEl={anchorEle} keepMounted open={open} onClose={handleCloseOne} TransitionComponent={Fade}>
                    <MenuItem onClick={handleCloseOne}>ACQUIRE</MenuItem>
                    <MenuItem onClick={handleCloseOne}>CREATE</MenuItem>
                    <MenuItem onClick={handleCloseOne}>ENGAGE</MenuItem>
                    <MenuItem onClick={handleCloseOne}>SELL</MenuItem>
                  </Menu>
              <Tooltip title="Insights" interactive>
              <Link to="/" className={classes.contactLink}>
                <Button>Insights</Button>
              </Link>
              </Tooltip>
              <ThemeProvider theme={themeTwo}>
              <Box mx={{ md: 3, lg: 4 }}>
              <Link to="/Contact" className={classes.contactLink}>
              <Tooltip title="Get in Touch">
              <Box border={1} borderColor="primary.main" px={2}>
                <Button color="primary">Get in touch</Button>
                </Box>
              </Tooltip>
              </Link>
              </Box>
              </ThemeProvider>
              <Tooltip title="Deutch" interactive>
              <Link to="/" className={classes.contactLink}>
                <Button>Deutch</Button>
                </Link>
              </Tooltip>
            </Toolbar>
          </Box>
          <Box display={{ xs: 'block', sm: 'none' }}>
            <Toolbar position="absolute">
            <Box fontWeight="fontWeightBold" className={classes.title} fontSize="h5.fontSize" letterSpacing={5} textAlign="left">
         COMPANY
                </Box>
              {/* <Typography variant="h6" className={classes.title} align="left">
               COMPANY
              </Typography> */}
              <Typography variant="h6" className={classes.title} align="right">
                <Button aria-controls="customized-menu" aria-haspopup="true" onClick={handleClick}>
                  <MenuIcon/>
                </Button>
              <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <Box px={3} pt={3} pb={6}>
                  <Grid container item lg={12} direction="row" justify="space-between"> 
                    {/* <img src={LogoMobile}></img> */}
                    <Box fontWeight="fontWeightBold" className={classes.title} fontSize="h6.fontSize" textAlign="left">
         COMPANY
                </Box>
                    <CloseIcon  onClick={handleClose}/>
                  </Grid>
                </Box>
              <StyledMenuItem>
              <Link to="/" className={classes.contactLink}>
                <ListItemText primary="Home"/>
                </Link>
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
          </Box>
        </div>
      );
}

export default Header;






 

