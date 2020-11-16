import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Container } from '@material-ui/core';
import { SentimentSatisfied } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        marginTop: theme.spacing(11),
        
    },
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#ddd',
        margin: '0 auto',
        alignItems: 'center'
    },
    
}));

const FileTransfer = () =>{
    const classes = useStyles();
    const [files, setFiles] = useState([]);

    const res = [
        {'id': 1, 'filename': 'file1.exe'},
        {'id': 2, 'filename': 'file2.exe'},
        {'id': 3, 'filename': 'file3.pdf'}
    ]

    useEffect(() => {
        setFiles(res);
    }, [])
 
    console.log(files)

    return(
        <Container className = {classes.container}>
            <div className = {classes.root}>
                <TextField id="standard-basic" label="Standard" />
                {/* <input type="text" placeholder="select file to transfer"></input> */}
                <List component="nav" aria-label="secondary mailbox folders">
                    {files.map((item, idx) => {
                        return (
                            <React.Fragment key = {idx}>
                                <ListItem>{item.filename}</ListItem>
                            </React.Fragment>
                        );
                    })}
                </List>
            </div>
        </Container>
    )
}

export default FileTransfer