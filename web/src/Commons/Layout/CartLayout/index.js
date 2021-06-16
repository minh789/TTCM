import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types'
class CartLayout extends Component {
    render() {
        const { component:MyComponent,...remainProps }=this.props;
        return (
           <Route 
            {...remainProps} 
            render = {routeProps => {
                    return <MyComponent {...routeProps}/>
                }
            }
           />
        );
    }
}

CartLayout.protoTypes={
    path:PropTypes.string,
    exact:PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    name:PropTypes.string,
    icon:PropTypes.object,
}
export default CartLayout;