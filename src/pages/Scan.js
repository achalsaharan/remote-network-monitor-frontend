import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        marginTop: theme.spacing(1),
        width: '100%',
    },
}));

export default function SignIn() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <SearchOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Scan Network
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="ip_range"
                        label="IP Range"
                        name="ip_range"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="scan_name"
                        label="Scan Name"
                        id="scan_name"
                    />

                    <FormControl
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <InputLabel id="demo-simple-select-outlined-label">
                            Scan Type
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            // value={age}
                            // onChange={handleChange}
                            label="Scan Type"
                        >
                            <MenuItem value={10}>ping scan</MenuItem>
                            <MenuItem value={20}>quick scan</MenuItem>
                            <MenuItem value={40}>intense scan</MenuItem>
                            <MenuItem value={50}>
                                intense scan, no ping
                            </MenuItem>
                            <MenuItem value={60}>
                                intense scan plus UDP
                            </MenuItem>
                            <MenuItem value={70}>regular scan</MenuItem>
                        </Select>
                    </FormControl>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Scan
                    </Button>
                </form>
            </div>
        </Container>
    );
}
