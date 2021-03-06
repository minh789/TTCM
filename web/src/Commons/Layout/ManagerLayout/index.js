import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import ManagerBoard from '../../../Components/ManagerBoard';
import PropTypes from 'prop-types'
class ManagerLayout extends Component {
    render() {
        const { component:MyComponent,...remainProps }=this.props;
        return (
           <Route 
            {...remainProps} 
            render = {routeProps => {
                    return(
                        <ManagerBoard {...remainProps}>
                            <MyComponent {...routeProps}/>
                        </ManagerBoard>
                    )
                }
            }
           />
        );
    }
}

ManagerLayout.protoTypes={
    path:PropTypes.string,
    exact:PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    name:PropTypes.string,
}
export default ManagerLayout;