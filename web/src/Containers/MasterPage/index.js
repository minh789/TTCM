import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import sytle from './style';
import TaskBoard from '../TaskBoard';
    // import Banner from '../../Components/DashBoard/Banner';
import MessengerCustomerChat from 'react-messenger-customer-chat';
class MasterPage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                {/* <Banner /> */}
                <div className={classes.tittle}>Những sản phẩm nổi bật của cửa hàng :</div>
                <TaskBoard />
                <MessengerCustomerChat
                    pageId="342319423252897"
                    appId="528779658245205"
                />
            </div>
        );
    }
}

export default withStyles(sytle)(MasterPage);