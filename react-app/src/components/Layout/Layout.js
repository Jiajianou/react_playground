import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';



 class Layout extends Component {

    state={

        showSideDrawer:true
    }

    sideDrawerClosedHandler = () =>{

        this.setState({showSideDrawer:false});

    }

    sideDrawerToggleHandler = () =>{

        //set the state when the new state depends on the old state;
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.prevState};
        });
    }

    render(){
        return (
            <Aux>

            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        
            <main className={classes.content}>
                {this.props.children}
            </main>
        
            </Aux>
        );
    }

 }

export default Layout;