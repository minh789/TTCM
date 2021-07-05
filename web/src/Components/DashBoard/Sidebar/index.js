import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles'
import sytle from './style';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {  PRODUCT } from '../../../Contants';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
class Sidebar extends Component {
    
    toggleDrawer = value => {
        const { onToggleSidebar } = this.props;
        if (onToggleSidebar) {
          onToggleSidebar(value);
        }
      };

    renderList() {
    const {classes}=this.props;
    let menuList=null;
    menuList =(
        <div className={classes.list}>
            <List component="div">
                {PRODUCT.map(item =>{
                    return (
                        <NavLink to={item.path} 
                        exact={item.exact} 
                        className={classes.menuLink} 
                        activeClassName={classes.menuLinkActive} 
                        key={item.path}>
                        <ListItem className={classes.menuItem} button>
                            {item.name}
                        </ListItem>
                        </NavLink>                
                    );
                })}
            </List>
        </div>
    );
    return menuList;
}
    render() {
        const {classes,showSidebar} =this.props;
        return (
         <Drawer 
          open={showSidebar} 
          onClose={() => this.toggleDrawer(false)}
          classes={{    
              paper:classes.drawerPaper,
          }}
          variant='permanent'
          >
          {this.renderList()}
          </Drawer>
        );
    }
}

Sidebar.propTypes ={
    classes:PropTypes.object,
    showSidebar: PropTypes.bool,
    onToggleSidebar: PropTypes.func,
}

export default withStyles(sytle)(Sidebar);