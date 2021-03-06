import React, { useState } from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import { useNavigate } from 'react-router-dom';

const styles = theme => ({
    wrapper: {
      width: '100%',
      //backgroundColor: 'rgba(23, 28, 36, 1)'
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      //backgroundColor: 'rgba(36, 62, 99, 1)'
    },
    menuButtonText: {
      color: 'rgba(36, 62, 99, 1)',
      fontWeight: 'bold',
      textTransform: 'none'
    },
    brandText: {
      fontFamily: theme.title.titleFontFamily,
      //fontWeight: "fontWeightBold" //float: 'right'
    }
});


const TypographyList = classes => 
  <div>
    <Typography
      className={classes.brandText}
      variant="h4"
      display="inline"
      color='rgba(36, 62, 99, 1)'
      fontWeight="fontWeightBold"
    >
      Cu 
    </Typography>
    <Typography
      variant="h4"
      className={classes.brandText}
      fontWeight="fontWeightBold"
      display="inline"
      color="rgba(1, 130, 68, 1)"
    >
      rr
    </Typography>
    <Typography
      variant="h4"
      className={classes.brandText}
      fontWeight="fontWeightBold"
      display="inline"
      color="rgba(171, 0, 137, 1)"
    >
      en
    </Typography>
    <Typography
      variant="h4"
      className={classes.brandText}
      fontWeight="fontWeightBold"
      display="inline"
      color="rgba(235, 94, 0, 1)"
    >
      cy
    </Typography>
    <Typography
      variant="h4"
      className={classes.brandText}
      style={{marginLeft: 10}}
      fontWeight="fontWeightBold"
      display="inline"
      color="orange"
    >
      Rate
    </Typography>
  </div>;


const NavBar = props => {
    const { classes } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div className={classes.wrapper}>
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
              {TypographyList(classes)}
              <div>
                <Button
                  id='menuButton'
                  className={classes.menuButtonText}
                  size="large"
                  aria-controls={open? 'menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open? 'true' : undefined}
                  onClick={handleClick}
                >
                  Menu
                </Button>
                <Menu
                  id='menu'
                  aria-labelledby='menuButton'
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <MenuItem onClick={()=>navigate('/')}>Home</MenuItem>
                  <MenuItem onClick={()=>navigate('/currency_converter')}>Currency converter</MenuItem>
                  <MenuItem onClick={()=>navigate('/historical_currency_converter')}>Historical currency converter</MenuItem>
                  <MenuItem onClick={()=>navigate('/rates')}>Rates</MenuItem>
                  <MenuItem onClick={()=>navigate('/historical_rates')}>Historical rates</MenuItem>
                </Menu>
                <Button
                  className={classes.menuButtonText}
                  size="large"
                  href="https://github.com/YinHk-myProject/currency-app"
                >
                  Github
                </Button>
                <Button
                  className={classes.menuButtonText}
                  size="large"
                >
                  About
                </Button>
              </div>
            </Toolbar>
        </AppBar>
      </div>  
    );
};


NavBar.propTypes = {
    classes: PropTypes.object.isRequired  
};
  
export default withStyles(styles)(NavBar);