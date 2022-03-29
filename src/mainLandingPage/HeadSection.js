import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Card, Button, Hidden, Box } from "@mui/material";
import { withStyles } from "@mui/styles";

import WaveBorder from "../components/WaveBorder";

const styles = (theme) => ({
    extraLargeButtonLabel: {
      fontSize: theme.typography.body1.fontSize,
      [theme.breakpoints.up("sm")]: {
        fontSize: theme.typography.h6.fontSize,
      },
    },
    extraLargeButton: {
      paddingTop: theme.spacing(1.5),
      paddingBottom: theme.spacing(1.5),
      [theme.breakpoints.up("xs")]: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      },
      [theme.breakpoints.up("lg")]: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
      },
    },
    card: {
      boxShadow: theme.shadows[4],
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("xs")]: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
      },
      [theme.breakpoints.up("sm")]: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
      },
      [theme.breakpoints.up("md")]: {
        paddingTop: theme.spacing(5.5),
        paddingBottom: theme.spacing(5.5),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
      },
      [theme.breakpoints.up("lg")]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
      },
      [theme.breakpoints.down("xl")]: {
        width: "auto",
      },
    },
    wrapper: {
      position: "relative",
      backgroundColor: theme.palette.secondary.main,
      paddingBottom: theme.spacing(2),
    },
    image: {
      maxWidth: "100%",
      verticalAlign: "middle",
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[4],
    },
    container: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(12),
      [theme.breakpoints.down("lg")]: {
        marginBottom: theme.spacing(9),
      },
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(6),
      },
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(3),
      },
    },
    containerFix: {
      [theme.breakpoints.up("md")]: {
        maxWidth: "none !important",
      },
    },
    waveBorder: {
      paddingTop: theme.spacing(9),
    },
});


const HeadSection = props => {
  const { classes, theme } = props;
  
  return (
    <Fragment>
     <p>Hello</p>
     {
      <WaveBorder 
        upperColor="#FFFFFF"
        lowerColor={theme.palette.secondary.main}
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />}
    </Fragment>
  );
}


HeadSection.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
}; 

export default withStyles(styles, { withTheme: true })(HeadSection);
