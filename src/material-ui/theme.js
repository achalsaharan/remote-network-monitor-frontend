import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#64b5f6',
            light: '#9be7ff',
            dark: '#2286c3',
            contrastText: '#ffffff',
        },
        primary: {
            main: '#1976d2',
            light: '#63a4ff',
            dark: '#004ba0',
        },
    },
});

export default theme;
