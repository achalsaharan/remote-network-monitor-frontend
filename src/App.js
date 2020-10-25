import React from 'react';
import {
    createMuiTheme,
    makeStyles,
    ThemeProvider,
} from '@material-ui/core/styles';
import './App.css';

//material ui theme
import theme from './material-ui/theme';

// importing components
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Scan from './pages/Scan';
import AllScans from './pages/AllScans';
import ScanResult from './pages/ScanResult';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <TopBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/scan" component={Scan} />
                    <Route exact path="/allscans" component={AllScans} />
                    <Route exact path="/scanresult" component={ScanResult} />
                </Switch>
            </ThemeProvider>
        </Router>
    );
};

export default App;
