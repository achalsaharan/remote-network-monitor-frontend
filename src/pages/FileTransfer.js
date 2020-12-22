import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SendIcon from '@material-ui/icons/Send';
import Axios from 'axios';
const qs = require('querystring')


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

    const [files, setFiles] = useState([]);
    const [file, setFile] = useState('somefile.dmg');
    const [clientId, setClientId] = useState('');

    const res = [
        {'id': 1, 'filename': 'file1.exe'},
        {'id': 2, 'filename': 'file2.exe'},
        {'id': 3, 'filename': 'file3.pdf'}
    ]


    const getFiles = async () => {
        
        try {
            const res = await Axios.get('http://127.0.0.1:5000/filetransfer')
            console.log(res);
            setFiles(res.data);
        } catch (err) {
            console.log('something went wrong', err);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const obj = {'filename': file, 'client_id': clientId}
            console.log('sending post', obj)

            const config = {
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                }
                }

            const res = await Axios.post('http://127.0.0.1:5000/filetransfer', qs.stringify(obj), config)
            console.log(res);
        } catch (err) {
            console.log('something went wrong', err);
        }
    }

    useEffect(() => {
        getFiles();
    }, [])
 
    console.log(files)

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <SendIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    File Transfer
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="ip_range"
                        label="client id"
                        name="ip_range"
                        onChange = {(e) => setClientId(e.target.value)}
                        autoFocus
                    />

                    <FormControl
                        variant="outlined"
                        className={classes.formControl}
                        // onChange = {(e) = setFile(e.target.value)}
                    >
                        <InputLabel id="demo-simple-select-outlined-label" >
                            file to transfer
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                        
                            label="file to transfer"
                        >
                            {files.map((item, idx) => {
                                return (
                                    <MenuItem key={idx} value={item.id}>{item.filename}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Transfer
                    </Button>
                </form>
            </div>
        </Container>
    );
}
