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
                            {list.price.toLocaleString('vi-VN')} VNĐ
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
                                <TableCell align="left">Hình ảnh</TableCell>
                                <TableCell align="left">Tên</TableCell>
                                <TableCell align="left">Mã Bảo Hành</TableCell>
                                <TableCell align="left">Bảo hành</TableCell>
                                <TableCell align="left">Số lượng</TableCell>
                                <TableCell align="left">Giá</TableCell>
                                <TableCell align="left">Xóa sản phẩm</TableCell>
                                <TableCell align="left">Sửa sản phẩm</TableCell>
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