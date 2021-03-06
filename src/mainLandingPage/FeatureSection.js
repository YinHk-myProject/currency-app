import React from "react";
import { Card, CardHeader, CardContent, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import { motion } from "framer-motion";

const styles = theme => ({
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 350,
        paddingBottom: 50
    },
    cardContainer: {
        display: 'flex',
        //flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        '@media (max-width:  960px)': {
            flexDirection: 'column'
        },
        '@media (min-width:  961px)': {
            flexDirection: 'row'
        },

    },
    cardWrapper: {
        height: '100%',
        backgroundColor: '#fafafa',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginRight: 55,
        '@media (max-width:  960px)': {
            marginTop: 50
        }
    },
    CardHeader: {
        color: '#2e00b8'
    },
    cardContent: {
        width: '90%',
        minHeight: 200,
        padding: 30,
        borderRadius: 6
        
    },
    title: {
        paddingBottom: 100,
        fontSize: theme.title.titleFontSize,
        fontWeight: theme.title.titleFontWeight, 
        fontFamily: theme.title.titleFontFamily,
        color: theme.title.titleColor
    },
    typography1: {
        color: "#00aad9",
        fontFamily:  '"Boogaloo", cursive'
    },
    typography2: {
        color: "textPrimary",
        fontSize: 20
    }
});

const featuresList = [
    {
        title: 'Feature 1',
        heading: 'Accurate and reliable rates', 
        description: 'All the exchange rates provided are accurate, reliable and fast response'
    },
    {
        title: 'Feature 2',
        heading: 'Support many currencies', 
        description: 'Convert 170+ major currencies used in 200 countries, and you can find the exchange rate of specific currency'
    },
    {
        title: 'Feature 3',
        heading: 'Historical exchange rates', 
        description: 'You can find out the past exchange rates from 2000 to current'
    }
];

const FeatureSection = props => {
    const { classes } = props;

    return (
      <div className={classes.wrapper}>
        <Typography className={classes.title} gutterBottom >
           Features
        </Typography>
        <div className={classes.cardContainer}>
       
        {featuresList.map(item => 
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 1.2}}
            >
                <Card className={classes.cardWrapper} sx={{ maxWidth: 345 }}>
                    <CardHeader className={classes.CardHeader} title={item.title} titleTypographyProps={{fontWeight: 580, fontFamily: '"Secular One", sans-serif' }} />
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.typography1} gutterBottom variant="h5"  component="p">
                            {item.heading}
                        </Typography>
                        <Typography className={classes.typography2} gutterBottom variant="body"  component="p">
                            {item.description}
                        </Typography>
                    </CardContent>
                </Card>
            </motion.div>
        )}
        </div>
      </div>
    );
};


FeatureSection.propTypes = {
    classes: PropTypes.object.isRequired  
};

export default withStyles(styles)(FeatureSection);