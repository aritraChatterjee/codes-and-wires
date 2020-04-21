import React from 'react';
import Container from '@material-ui/core/Container';
import ContainerWithGutter from './ContainerWithGutter';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    starPrimary: {
        borderColor: theme.palette.primary.main,
        margin: '25px auto 30px',
        padding: 0,
        maxWidth: '250px',
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
                    Contact Us
                </Typography>
                <hr className={classes.starPrimary} />
                <Typography
                    className={classes.contactText}
                    color="secondary"
                    align="center">
                    let's give shape to your dream idea together :)
                </Typography>
                <Typography variant="h6" align="center">
                    mail:{' '}
                    <Link href="#" underline="none">
                        pr.codesandwires@gmail.com
                    </Link>
                </Typography>
            </ContainerWithGutter>
        </Container>
    );
};

export default Contact;
