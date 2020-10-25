import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid,
    Paper,
    Button,
    Chip,
    Divider,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main: {
        padding: theme.spacing(1),
        justifyContent: 'center',
    },
    paper: {
        marginTop: '15vh',
        padding: theme.spacing(2),
        height: '50vh',
        textAlign: 'center',
    },
    text: {
        marginTop: theme.spacing(15),
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <Container className={classes.main}>
            <Paper elevation={0} className={classes.paper}>
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.text}
                >
                    Design and Develope a Framework for Network Scanning and
                    Vulnerebality Detection
                </Typography>
            </Paper>
        </Container>
    );
};

export default Home;
