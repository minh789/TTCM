import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import React, { Component } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router';
import style from './style';
import { AUTHORIZATION_KEY, CART, ROUTES } from '../../../Contants';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import { connect } from 'react-redux'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import axiosService from '../../../Service/axiosService';
import MenuIcon from '@material-ui/icons/Menu';
import {bindActionCreators} from 'redux';
import *as  taskActions from '../../../Actions/task';
const menuId = 'primary-search-account-menu';

class Header extends Component {
  state = {
    anchorEl: null,
  }; 


  handleChange= e =>{
    const {value} =e.target;
    const {taskActionCreators}=this.props;
    const { filterTask}=taskActionCreators;
    filterTask(value); 
  }


  handleProfileMenuOpen = event => {
    this.setAnchorEl(event.currentTarget);
  };

  setAnchorEl(currentTarget) {
    this.setState({
      anchorEl: currentTarget
    });
  }

  handleMenuClose = () => {
    this.setAnchorEl(null);
  };

  handleToggleSidebar = () => {
    const { showSidebar, onToggleSidebar } = this.props;
    if (onToggleSidebar) {
      onToggleSidebar(!showSidebar);
    }
  };

  handleLogout = () => {
    localStorage.removeItem(AUTHORIZATION_KEY);
    // axiosService.removeHeader('Authorization');
    const { history } = this.props;
    if (history) {
      history.push('/login');
    }
  };

  renderDesktopMenu() {
    const isMenuOpen = Boolean(this.state.anchorEl);
    const { anchorEl } = this.state;
    return (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
      </Menu>
    );
  }

  renderMenu() {
    const { classes } = this.props;
    return (
      <List component="nav">
        {ROUTES.map(item => {
          return (
            <NavLink to={item.path}
              exact={item.exact}
              className={classes.menuLink}
              activeClassName={classes.menuLinkActive}
              key={item.path}>
              {item.name}
            </NavLink>
          );
        })}
      </List>
    );
  }

  renderCart() {
    const { classes,numberCart } = this.props;
    return (
      <List component="nav">
        {CART.map(item => {
          return(
          <NavLink to={item.path}
            exact={item.exact}
            className={classes.menuLink}
            activeClassName={classes.menuLinkActive}
            key={item.path}>
           <IconButton  aria-label="cart" color="inherit">
                <Badge badgeContent={numberCart} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
           </IconButton>
              {item.name}
          </NavLink>
      );
    })}
      </List>
    );
  }

  render() {
    const { classes,name} = this.props;
    return (
      <div className={classes.grow}>
        <AppBar position="relative" >
          <Toolbar >
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleToggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Avatar alt="MinMin" src="Capture.png"  className={classes.large} />
          <Typography className={classes.MinMin} variant="h6"  noWrap>
          {name}
          </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Tìm kiếm tên sản phẩm"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ 'aria-label': 'Search' }}
                onChange={this.handleChange}
              />
            </div>
            {this.renderMenu()}
            {this.renderCart()}
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="Account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {this.renderDesktopMenu()}
     </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string,
  showSidebar: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
  numberCart: PropTypes.number,
};

const mapStateToProps = state => {
  return {
    numberCart: state.task.numberCart
  }
}


const mapDispacthToProps= dispatch =>{
  return{
      taskActionCreators:bindActionCreators(taskActions,dispatch),

  }; 
};



export default withStyles(style)(connect(mapStateToProps, mapDispacthToProps)(withRouter(Header)),);