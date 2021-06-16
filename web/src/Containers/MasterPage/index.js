import React, { Component} from 'react';
import { withStyles } from '@material-ui/styles'
import sytle from './style';
import TaskBoard from '../TaskBoard';
import Banner from '../../Components/DashBoard/Banner';
class MasterPage extends Component {
    render() {
        const {classes}=this.props;
        return (
            <div>
                <Banner/>
            <div className={classes.tittle}>Những sản phẩm của cửa hàng :</div>
                    <TaskBoard />
            </div>
        );
    }
}

export default withStyles(sytle)(MasterPage);