import React, { Component } from 'react';
import style from './style';
import { withStyles } from '@material-ui/styles'
import Header from './Header'
import cn from 'classnames';
import Sidebar from './Sidebar'
import {connect} from 'react-redux'
import {compose,bindActionCreators} from 'redux';
import *as uiActions from './../../Actions/ui';
class ManagerBoard extends Component {
    handleToggleSidebar = value => {
        const { uiActionCreators } = this.props;
        const { showSidebar, hideSidebar } = uiActionCreators;
        if (value === true) {
          showSidebar();
        } else {
          hideSidebar();
        }
      };
    
      render() {
        const { children, classes, name, showSidebar } = this.props;
        return (
          <div className={classes.dashboard}>
            <Header
              name={name}
              showSidebar={showSidebar}
              onToggleSidebar={this.handleToggleSidebar}
            />
            <div className={cn(classes.wrapper, {
                  [classes.shiftLeft]: showSidebar === false,
                })}>
              <Sidebar
                showSidebar={showSidebar}
                onToggleSidebar={this.handleToggleSidebar}
              />
              <div className={classes.wrapperContent}>
                {children}
              </div>
            </div>
          </div>
        );
      }
    }
    

const mapStateToProps =state=>{
    return {
        showSidebar:state.ui.showSidebar
    };
};

const mapDispatchToProps =dispatch => {
    return{
        uiActionCreators:bindActionCreators(uiActions,dispatch) 
    };
};

const withConnect =connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(withConnect,withStyles(style)) (ManagerBoard);