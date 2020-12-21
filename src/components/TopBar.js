import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// react router
import { Link as RouterLink, Router } from 'react-router-dom';
import { ControlPointDuplicateSharp, PublicSharp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    btn: {
        marginRight: theme.spacing(2),
        color: 'white',
    },
    title: {
        flexGrow: 1,
    },
}));

const TopBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        CAPSTONE
                    </Typography>
                    <RouterLink style={{ textDecoration: 'none' }} to="/">
                        <Button className={classes.btn} color="inherit">
                            home
                        </Button>
                    </RouterLink>
                    <RouterLink
                        style={{ textDecoration: 'none' }}
                        to="/allscans"
                    >
                        <Button className={classes.btn} color="inherit">
                            all scans
                        </Button>
                    </RouterLink>
                    <RouterLink style={{ textDecoration: 'none' }} to="/scan">
                        <Button className={classes.btn} color="inherit">
                            scan
                        </Button>
                    </RouterLink>
                    <RouterLink style={{ textDecoration: 'none' }} to="/filetransfer">
                        <Button className={classes.btn} color="inherit">
                            file transfer
                        </Button>
                    </RouterLink>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default TopBar;