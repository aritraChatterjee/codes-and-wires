import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import Header from './Header';
import theme from './Theme';
import Footer from './Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Home from './Home';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </BrowserRouter>

            <Footer />
        </ThemeProvider>
    );
}

export default App;
