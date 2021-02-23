import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { MobileStepper, Grid, Typography, Button, Box, Container, CssBaseline} from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import background from '../assets/backgroundalt.png';
import left from '../assets/left.png';  
import right from '../assets/body.png';
import secondMap from '../assets/MapTwo.png';
import deviceOne from '../assets/device.png';
import deviceTwo from '../assets/deviceOne.png';
import BoxTwo from '../components/BoxTwo';
import BoxOne from '../components/BoxOne';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  background: {
   height: "auto",
   background: `linear-gradient(to top, rgba(255,255,255,255) 30%, transparent 10%, rgba(7, 31, 58, 0.9)), url(${background})`,
  },
  titleColor: {
    color: "#fff"
  },
  sliderOne: {
    height: "70vh",
    background: `url(${left}) bottom left no-repeat, url(${right}) repeat`,
    backgroundSize: "50% 100%"
  },
  sliderTwo: {
    height: "70vh",
    background: `url(${secondMap}) bottom left no-repeat, url(${right}) repeat`,
    backgroundSize: "50% 100%" 
  },
  image: {
    maxHeight: "65vh"
  },
  text: {
    color: "#212A39"
  },
  textParagraph: {
    color: "#394357"
  }
  }));
const SecondofThird = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 2;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
    return ( 
        <div className={classes.background}>
            <React.Fragment>
              <CssBaseline />
                <Container>
                  <Box pt={10} pb={4}>
                    <Typography variant="h4" align="center" className={classes.titleColor}>Successful implementation</Typography>
                  </Box>
                  <AutoPlaySwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
                  <Box>
                  <Box px={10} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}  mx="auto">
                    <Grid container item lg={12} className={classes.sliderOne}>
                    <Grid container item lg={4}></Grid>
                      <Grid container item lg={4}>
                        <Box mx="auto" my="auto" display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}>
                          <img src={deviceTwo} className={classes.image}></img>
                        </Box>
                      </Grid>
                      <Grid container item lg={4}>
                        <BoxOne/>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box px={10} display={{ xs: 'block', md: 'none' }} mx="auto">
                  <BoxOne/>
                  </Box>
                  </Box>
                  <Box>
                  <Box px={10} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
                    <Grid container item lg={12} className={classes.sliderTwo}>
                      <Grid container item lg={4}>
                        <Box pl={5} my="auto" mx="auto">
                          <Box pb={2} fontWeight="fontWeightBold" textAlign="left" fontSize="h5.fontSize" className={classes.text}>Situational products do perform</Box>
                          <Box align="left" fontSize={16} className={classes.textParagraph}>Based on behaviour, recognize the opportunity and grab the initiative.</Box>
                          <Box pt={2} align="left" fontSize={16} className={classes.textParagraph}>You can anticipate customers intentions and immediately offer the proper insurance product.</Box>
                        </Box>
                      </Grid>
                      <Grid container item lg={4}>
                        <Box mx="auto" my="auto"  display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}>
                          <img src={deviceOne} className={classes.image}></img>
                        </Box>
                      </Grid>
                      <Grid container item lg={4}>
                        <BoxTwo/>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box px={10} display={{ xs: 'block', md: 'none' }} mx="auto">
                  <BoxTwo/>
                  </Box>
                  </Box>
                  </AutoPlaySwipeableViews>
                    <Box mx="auto" width={200}>
                      <MobileStepper steps={maxSteps} position="static" variant="text" activeStep={activeStep} 
                      nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                      }
                      backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        </Button>
                      }
                      />
                    </Box>
                </Container>
            </React.Fragment>
          </div>
     );
}
export default SecondofThird;


