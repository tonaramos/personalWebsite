import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './MenuBar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

class menuBar extends Component {
  // { drawerToggleClicked } = props;
  constructor(props) {
    super(props);
    this.state = {
      winHeight: 0,
      winPosition: 0,
      winInnerWidth: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const isClient = typeof window !== 'undefined';
    if (isClient) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    const isClient = typeof window !== 'undefined';
    if (isClient) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll() {
    const isClient = typeof window !== 'undefined';
    const { innerHeight, innerWidth, scrollY } = isClient ? window : null;
    const { winHeight, winInnerWidth } = this.state;
    if (innerHeight !== winHeight) {
      this.setState({ winHeight: innerHeight });
    }
    if (winInnerWidth !== innerWidth) {
      this.setState({ winInnerWidth: innerWidth });
    }
    this.setState({ winPosition: scrollY });
  }

  render() {
    const isClient = typeof window !== 'undefined';
    const { winHeight, winPosition, winInnerWidth } = this.state;
    const { drawerToggleClicked } = this.props;
    const { innerHeight, innerWidth } = isClient ? window : null;
    let style = null;
    if ((winPosition >= winHeight * 1.18) && (winInnerWidth > 824)) {
      style = {
        backgroundColor: 'rgb(35, 123, 197)', // '#206DD0', #40A4c8
        backgroundImage: 'none',
      };
    }
    let insertLogo = null;
    if (
      (innerWidth < 825 && innerWidth > 499 && innerHeight > 360)
      || (innerWidth < 825 && innerHeight < 499 && innerHeight > 360)
      || (innerWidth > 500 && innerHeight > 574)
      || (innerWidth > 1500 && innerHeight > 2000)) {
      insertLogo = <Logo />;
    }
    return (
      <header className={classes.MenuBar} style={style}>
        {insertLogo}
        <DrawerToggle clicked={drawerToggleClicked} />
        <nav className={classes.DesktopOnly}>
          <NavigationItems />
        </nav>
      </header>
    );
  }
}


menuBar.propTypes = {
  drawerToggleClicked: PropTypes.func.isRequired,
};

export default menuBar;
