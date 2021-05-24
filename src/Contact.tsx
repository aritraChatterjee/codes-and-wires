import React from 'react';
import Container from '@material-ui/core/Container';
import ContainerWithGutter from './ContainerWithGutter';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    starPrimary: {
        borderColor: theme.palette.primary.main,
        margin: '10px auto 30px',
        padding: 0,
        maxWidth: '200px',
        border: 0,
        borderTop: 'solid 5px',
        textAlign: 'center'
    },
    uppercase: {
        textTransform: 'uppercase',
        fontWeight: 700,
        fontSize: '2.4em'
    },
    contactText: {
        fontSize: 26
    }
}));

const Contact = (props: any) => {
    const classes = useStyles();

    return (
        <Container fixed>
            <ContainerWithGutter>
                <Typography
                    color="primary"
                    align="center"
                    className={classes.uppercase}>
                    Contact
                </Typography>
                <hr className={classes.starPrimary} />
                <Typography
                    className={classes.contactText}
                    color="secondary"
                    align="center">
                    You can reach me via
                </Typography>
                <Typography variant="h6" align="center">
                    mail:{' '}
                    <Link href="#" color="primary" underline="hover">
                        aritra.cnw@gmail.com
                    </Link>
                </Typography>
            </ContainerWithGutter>
        </Container>
    );
};

export default Contact;
