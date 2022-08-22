import { Container } from '@mui/material';
import * as React from 'react';
import AppBar from './AppBar'

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <AppBar/>
        <Container>
            {props.children}
        </Container>
    </React.Fragment>
);

