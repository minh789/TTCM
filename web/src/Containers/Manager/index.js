import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Card } from '@material-ui/core';
import sytle from './style';
import { withStyles } from '@material-ui/styles'
import {bindActionCreators} from 'redux';
import *as  taskActions from'./../../Actions/task';
import { connect } from 'react-redux';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { IconButton } from '@material-ui/core';
import { red,blue } from '@material-ui/core/colors';
import CardMedia from '@material-ui/core/CardMedia';

import EditIcon from '@material-ui/icons/Edit';
class Manager extends Component {
 
    componentDidMount(){
        const {taskActionCreators}=this.props;
        const { fetchListTask}=taskActionCreators;
        fetchListTask();
    }

    showCartItem(){
        const { classes,listTask } = this.props;
        let result = null;
            result = listTask.map((list, key) => {
                return (
                    <TableRow key={key}>
                        <TableCell >
                            <CardMedia
                                className={classes.media}
                                image={list.img}
                            />
                        </TableCell>
                        <TableCell>
                            {list.name}
                        </TableCell>
                        <TableCell>
                            {list.warranty_code}
                        </TableCell>
                        <TableCell>
                            {list.guarantee}
                        </TableCell>
                        <TableCell>
                            {list.inventory}
                        </TableCell>
                        <TableCell>
                            {list.price.toLocaleString('vi-VN')} VN??
                        </TableCell>
                        <TableCell>
                            <IconButton onClick={this.openDelete}>
                                <DeleteForeverIcon style={{ color: red[500], fontSize: 30 }} />
                            </IconButton>
                        </TableCell>
                        <TableCell>
                            <IconButton onClick={this.openDelete}>
                                <EditIcon style={{ color: blue[500], fontSize: 30 }} />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                );
            })
        return result;
    }

    render() {
        const { classes} = this.props;
        return (
            <div>
                <TableContainer component={Card}>
                    <Table className={classes.table} >
                        <TableHead >
                            <TableRow className={classes.tableRow}>
                                <TableCell align="left">H??nh ???nh</TableCell>
                                <TableCell align="left">T??n</TableCell>
                                <TableCell align="left">M?? B???o H??nh</TableCell>
                                <TableCell align="left">B???o h??nh</TableCell>
                                <TableCell align="left">S??? l?????ng</TableCell>
                                <TableCell align="left">Gi??</TableCell>
                                <TableCell align="left">X??a s???n ph???m</TableCell>
                                <TableCell align="left">S???a s???n ph???m</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.showCartItem()}
                        </TableBody>
                    </Table>
                </TableContainer>           
             </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      listTask: state.task.listTask,
    };
  };

const mapDispacthToProps= dispatch =>{
    return{
        taskActionCreators:bindActionCreators(taskActions,dispatch),
        // fetchListTaskIphone :()=>dispatch(fetchListTaskIphone())
    }; 
};


export default withStyles(sytle)(connect(mapStateToProps, mapDispacthToProps,)(Manager),);