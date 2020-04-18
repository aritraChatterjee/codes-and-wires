import React from 'react';
import { Container } from '@material-ui/core';
import ContainerWithGutter from './ContainerWithGutter';

const About = (props: any) => {
    return (
        <Container fixed>
            <ContainerWithGutter></ContainerWithGutter>
        </Container>
    );
};

export default About;
