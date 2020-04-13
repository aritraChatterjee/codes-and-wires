import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import Header from './Header';
import theme from './Theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header />
        </ThemeProvider>
    );
}

export default App;
