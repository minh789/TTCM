import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import DashBoard from '../../../Components/DashBoard';
import PropTypes from 'prop-types'
class ProductLayout extends Component {
    render() {
        const { component:MyComponent,...remainProps }=this.props;
        return (
           <Route 
            {...remainProps} 
            render = {routeProps => {
                    return(
                        <DashBoard {...remainProps}>
                            <MyComponent {...routeProps}/>
                        </DashBoard>
                    )
                }
            }
           />
        );
    }
}

ProductLayout.protoTypes={
    path:PropTypes.string,
    exact:PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    name:PropTypes.string,
}
export default ProductLayout;