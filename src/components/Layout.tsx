import * as React from 'react';
import AppBar from './AppBar'

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <AppBar />
        {props.children}
    </React.Fragment>
);