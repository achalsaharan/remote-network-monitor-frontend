import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Divider } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import '../App.css';

import scan2 from '../scan.js';
import Axios from 'axios';

import qs from 'qs';

const useStyles = makeStyles((theme) => ({
    grid: {
        height: '45vh',
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: 0,
        height: '100%',
        width: '100%',
        textAlign: 'center',
        overflow: 'scroll',
        color: theme.palette.text.secondary,
    },
    paper2: {
        padding: theme.spacing(2),
        height: '100%',
        width: '100%',
        textAlign: 'left',
        overflow: 'scroll',
        color: theme.palette.text.secondary,
    },
}));

const DeviceDisplay = (props) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <h4>Devices on The Newtork</h4>
            <Divider />
            <List>
                {props.devices.map((ip, idx) => {
                    return <ListItem key={idx}>{ip}</ListItem>;
                })}
            </List>
        </Paper>
    );
};

const ProductsDisplay = (props) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <h4>Products in The Network</h4>
            <Divider />
            <List>
                {props.products.map((product, idx) => {
                    return <ListItem key={idx}>{product}</ListItem>;
                })}
            </List>
        </Paper>
    );
};

const IpsDisplay = (props) => {
    const classes = useStyles();
    const ips = [];
    props.scan.hosts.forEach((host) => ips.push(host.ip));
    return (
        <Paper className={classes.paper}>
            <h4> Hosts in The Network </h4>
            <Divider />
            <ul>
                {ips.map((ip, idx) => {
                    return (
                        <li key={idx}>
                            <button onClick={() => props.setIp(ip)}>
                                {ip}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </Paper>
    );
};

const PortsDisplay = (props) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <h4>Open Ports in The Network</h4>
            <Divider />
            <ul>
                {props.ports.map((port, idx) => {
                    return (
                        <li key={idx}>
                            <button>{port}</button>
                        </li>
                    );
                })}
            </ul>
        </Paper>
    );
};

const HostInfo = (props) => {
    const classes = useStyles();
    const ips = [];
    props.scan.hosts.forEach((host) => ips.push(host.ip));

    let data;
    props.scan.hosts.forEach((host) => {
        if (host.ip == props.ip) {
            data = host;
        }
    });
    return (
        <Paper className={classes.paper}>
            <h4>Host Data</h4>
            <Divider />
            <Paper className={classes.paper2}>
                <p>IP Address: {data.ip}</p>
                <p>MAC Address: {data.mac}</p>
                {data.vendor !== '' ? <p>Vendor: {data.vendor}</p> : null}
                {data.os !== '' ? <p>OS: {data.os}</p> : null}
                {data.os_accuracy !== '' ? (
                    <p>OS accuracy: {data.os_accuracy}</p>
                ) : null}
                <table>
                    <thead>
                        <tr>
                            <th>Port</th>
                            <th>State</th>
                            <th>Serivice</th>
                            <th>Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.services.map((entry) => {
                            return (
                                <tr key={entry.port}>
                                    <td>
                                        {entry.port}/{entry.tcp_ip}
                                    </td>
                                    <td>{entry.state}</td>
                                    <td>{entry.service}</td>
                                    <td>{entry.banner}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Paper>
        </Paper>
    );
};

export default function ScanResult(props) {
    const classes = useStyles();

    const [scan, setScan] = useState(null);
    const [ip, setIp] = useState(null);

    const getData = async (scanName) => {
        try {
            const data = qs.stringify({
                grant_type: 'refresh_token',
                file: scanName,
            });

            const headers = {
                'Content-Type':
                    'application/x-www-form-urlencoded;charset=UTF-8',
            };

            const res = await Axios.post(
                'http://127.0.0.1:5000/scanresult',
                data,
                headers
            );
            setScan(res.data);
            setIp(res.data.hosts[0].ip);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        console.log('useeffect');
        // setIp('172.31.151.5');

        const data = getData(props.location.state.scanname);
        // console.log(data);
        // setScan(data);
    }, []);

    return (
        <div className={classes.root}>
            {scan == null || ip == null ? null : (
                <Grid container spacing={1}>
                    {/* ips online */}
                    <Grid item xs={3} className={classes.grid}>
                        <IpsDisplay scan={scan} setIp={setIp} />
                        {/* {scan.devices.map((device, idx) => {
                            return <p key={idx}>{device}</p>;
                        })} */}
                    </Grid>
                    {/* ports open */}
                    <Grid item xs={3} className={classes.grid}>
                        <PortsDisplay ports={scan.ports} />
                    </Grid>
                    {/* hosts details */}
                    <Grid item xs={6} className={classes.grid}>
                        <HostInfo ip={ip} scan={scan} />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.grid}>
                        <ProductsDisplay products={scan.products} />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.grid}>
                        <DeviceDisplay devices={scan.devices} />
                    </Grid>
                </Grid>
            )}
        </div>
    );
}
