import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Container } from '@material-ui/core';
import Axios from 'axios';

// react router
import { Link as RouterLink, Router, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#ddd',
        margin: '0 auto',
    },
    container: {
        width: '100%',
        marginTop: theme.spacing(10),
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function AllScans() {
    const classes = useStyles();
    const [scans, setScans] = useState([]);
    const getScans = async () => {
        try {
            const res = await Axios.get('http://127.0.0.1:5000/allscans');
            console.log(res);
            setScans(res.data);
        } catch (err) {
            console.log('something went wrong', err);
        }
    };

    useEffect(() => {
        getScans();
    }, []);

    // const handleClick = (scan) => {
    //     console.log('click: ', scan);
    //     return <Redirect to="/" />;
    // };

    return (
        <Container className={classes.container}>
            <div className={classes.root}>
                <List component="nav" aria-label="secondary mailbox folders">
                    {scans.map((scan, idx) => {
                        return (
                            <React.Fragment key={idx}>
                                <Link
                                    style={{ textDecoration: 'none' }}
                                    to={{
                                        pathname: '/scanresult',
                                        state: {
                                            scanname: scan,
                                        },
                                    }}
                                >
                                    <ListItem button>{scan}</ListItem>
                                </Link>
                                <Divider />
                            </React.Fragment>
                        );
                    })}
                </List>
            </div>
        </Container>
    );
}
