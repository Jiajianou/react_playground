import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

const layout = (props) => (

    <Aux>

    <div>
        <p>Tool Bar, SideDrawer, Backdrop</p>
    </div>

    <main className={classes.content}>
        {props.children}
    </main>

    </Aux>

);

export default layout;