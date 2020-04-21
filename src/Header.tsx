import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Link from '@material-ui/core/Link';
import { Link as RouteLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    brand: {
        fontSize: '1.9em',
        color: '#000',
        '&:hover': {
            color: theme.palette.secondary.main
        }
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        fontSize: '0.95em',
        textTransform: 'none',
        minWidth: 10,
        marginLeft: '15px',
        letterSpacing: '1px'
    },
    headerMargin: {
        marginTop: 150
    }
}));

const Header = (props: any) => {
    const classes = useStyles();

    const [value, setValue] = useState(0);

    const preventDefault = () => {
        console.log('[Header] : preventDefault ');
    };

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <AppBar elevation={0} position="fixed" color="default">
                <Container fixed>
                    <Toolbar>
                        <Link
                            href="#"
                            onClick={preventDefault}
                            underline="none">
                            <Typography className={classes.brand}>
                                codes & wires
                            </Typography>
                        </Link>
                        <Tabs
                            className={classes.tabContainer}
                            value={value}
                            onChange={handleChange}>
                            <Tab
                                className={classes.tab}
                                component={RouteLink}
                                to="/codesandwires"
                                label="Home"
                            />
                            <Tab
                                className={classes.tab}
                                component={RouteLink}
                                to="/about"
                                label="About"
                            />
                            <Tab
                                className={classes.tab}
                                component={RouteLink}
                                to="/contact"
                                label="Contact"
                            />
                        </Tabs>
                    </Toolbar>
                </Container>
            </AppBar>
            <div className={classes.headerMargin} />
        </>
    );
};

export default Header;
