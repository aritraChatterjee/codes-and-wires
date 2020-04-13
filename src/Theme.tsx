import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2c3e50',
        },
        secondary: {
            main: '#0AAB8B',
        },
    },
    overrides: {
        MuiAppBar: {
            colorDefault: {
                backgroundColor: '#fff',
                color: '#000',
                padding: '25px 0',
            },
        },
    },
});

export default theme;
