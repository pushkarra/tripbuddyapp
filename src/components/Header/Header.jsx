import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useAuth0} from "@auth0/auth0-react";
import useStyles from './styles';
import Button from '@material-ui/core/Button';


const Header = ({ onLoad, onPlaceChanged }) => {
    const classes = useStyles();
    const { loginWithRedirect, isAuthenticated, logout, user} = useAuth0();
    return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h5' className={classes.title}>
                    TripBuddy
                </Typography>

                
                {/* <div>
                <Button onClick={() => loginWithRedirect()}>Log In</Button>
                </div>
                <div>
                <Button onClick={() => logout({ returnTo: window.location.origin })}>
                    Log Out
                </Button>
                </div> */}
                
                <Box display='flex'>
                    <Typography variant='h6' className={classes.title}>
                        Explore new places
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                    </Autocomplete>
                </Box>
                <div className={classes.liod}>
                    {isAuthenticated && <p>
                        Welcome, {user.name} </p>}
                </div>
                
                    {
                        isAuthenticated ? (<div>
                        <Button className={classes.btnsi} onClick={() => logout({ returnTo: window.location.origin })}>
                            Log Out
                        </Button>
                        </div>)
                        : (<div>
                            <Button className={classes.btns} onClick={() => loginWithRedirect()}>Log In</Button>
                            </div>)
                    }
            </Toolbar>
        </AppBar>
    );
};

export default Header;