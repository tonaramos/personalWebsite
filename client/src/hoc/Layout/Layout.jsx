import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import MenuBar from '../../components/Navigation/MenuBar/MenuBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

//   SideDrawer,Backdrop ## also go in this page along with the menuBar

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false,
    };
    this.sideDrawerCloseHandler = this.sideDrawerCloseHandler.bind(this);
    this.sideDrawerToggleHandler = this.sideDrawerToggleHandler.bind(this);
  }

  sideDrawerCloseHandler() {
    this.setState({ showSideDrawer: false });
    // console.log('at side drawer CLOSE handler in Layout');
  }

  sideDrawerToggleHandler() {
    // const { showSideDrawer } = this.state;
    // console.log('at side drawer TOGGLE handler in Layout');
    // console.log('new state for toggle bar', this.state.showSideDrawer);
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  }


  render() {
    const { children } = this.props;
    const { showSideDrawer } = this.state;
    return (
      <Aux>
        <MenuBar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={showSideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        <main className={classes.Content}>
          {children}
        </main>
      </Aux>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};


export default Layout;
