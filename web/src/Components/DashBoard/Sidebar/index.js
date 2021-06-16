import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles'
import sytle from './style';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ROUTES } from '../../../Contants';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
class Sidebar extends Component {
    //Phải có hàm dựng constructor mới dùng state được 
    constructor(props)
    {
        super(props);
        this.state={
            open:true,
        };
    }
    toggleDrawer =value =>{
        this.setState( {
            open:value,
            });
    };

    renderList() {
    const {classes}=this.props;
    let menuList=null;
    menuList =(
        <div className={classes.list}>
            <List component="nav">
                {ROUTES.map(item =>{
                    return (
                        <NavLink to={item.path} 
                        exact={item.exact} 
                        className={classes.menuLink} 
                        activeClassName={classes.menuLinkActive} 
                        key={item.path}>
                        <ListItem  button>
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
        const {open} =this.state;
        const {classes} =this.props;
        return (
         <Drawer 
          open={open} 
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