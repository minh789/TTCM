import React, { Component } from 'react';
import styles from './style';
import { withStyles } from '@material-ui/styles'
import LoadingIcon from './../../Assets/Imagine/loading.gif'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux';
import *as uiActions from './../../Actions/ui';

class GlobalLoading extends Component {
    render() {
        let loading = null;
        const { classes, showLoading } = this.props;
        if (showLoading) {
          loading = (
            <div className={classes.backdrop}>
              <img
                src={LoadingIcon}
                alt="loading"
                className={classes.iconLoading}
              />
            </div>
          );
        }
        return loading;
      }
    }

const mapStateToProps = state => {
    return {
        showLoading: state.ui.showLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        uiActionCreators: bindActionCreators(uiActions, dispatch)
    };
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(withConnect, withStyles(styles))(GlobalLoading);