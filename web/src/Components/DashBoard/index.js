import React, { Component } from 'react';
import style from './style';
import { withStyles } from '@material-ui/styles'
import ProTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
class DashBoard extends Component {
    render() {
        const { children, classes, name } = this.props;
        return (
            <div className={classes.dashboard}>
                <Header name={name} />
                    <div className={classes.wrapperContent}>
                        {children}
                        <Footer/>
                    </div>
            </div>
        );
    }
}

DashBoard.ProTypes = {
    children: ProTypes.object,
    classes: ProTypes.object,
    name: ProTypes.string
};

export default withStyles(style)(DashBoard);