import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import sytle from './style';
import { connect } from "react-redux";
import { deleteCart, increaseQuantity, decreaseQuantity } from "./../../Actions/task"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Card } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Header from './../../Components/DashBoard/Header'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            open1: false
        };
    }

    handleClose = value => {
        this.setState({
            open: value,
        });
    };

    TotalPrice(price, tonggia) {
        return Number(price * tonggia).toLocaleString('vi-VN');
    }

    showTotalAmount = (Carts) => {
        var total = 0;
        if (Carts.length > 0) {
            for (var i = 0; i < Carts.length; i++) {
                total += Carts[i].price * Carts[i].quantity;
            }
        }
        return total.toLocaleString('vi-VN');
    }


    showCartItem = (Carts) => {
        var { classes } = this.props;
        var result = null;
        if (Carts.length > 0) {
            result = Carts.map((list, key) => {
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
                            <IconButton onClick={() => this.props.increaseQuantity(key)}>
                                <AddIcon color="primary" />
                            </IconButton>
                            {list.quantity}
                            <IconButton onClick={() => this.props.decreaseQuantity(key)}>
                                <RemoveIcon color="primary" />
                            </IconButton>
                        </TableCell>
                        <TableCell>
                            {list.price.toLocaleString('vi-VN')} VNĐ
                        </TableCell>
                        <TableCell>
                            {this.TotalPrice(list.price, list.quantity)} VNĐ
                        </TableCell>
                        <TableCell>
                            <IconButton onClick={this.openDelete}>
                                <DeleteForeverIcon style={{ color: red[500], fontSize: 30 }} />
                            </IconButton>
                            {this.ConfirmDelete(key)}
                        </TableCell>
                    </TableRow>
                );
            })
        }
        return result;
    }

    ConfirmDelete(key) {
        const { open } = this.state;
        let dialogPay = null;
        dialogPay = (
            < Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Bạn có muốn xóa sản phẩm không "}</DialogTitle>
                <DialogActions>
                    <Button onClick={() => this.props.deleteCart(key)} color="primary">
                        Có
                    </Button>
                    <Button onClick={() => this.handleClose(false)} color="primary">
                        Không
                    </Button>
                </DialogActions>
            </Dialog >
        );
        return dialogPay;
    }

    openDelete = () => {
        this.setState({
            open: true
        });
    }

    paySuccess() {
        const { open1 } = this.state;
        const { classes } = this.props;
        let dialogPay = null;
        dialogPay = (
            < Dialog
                open={open1}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Cảm ơn bạn đã mua sắm tại trang web chúng tôi"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <CheckCircleIcon className={classes.payDialog} style={{ color: green[500], fontSize: 150 }} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.clear()} color="primary">
                        Đóng
                    </Button>
                </DialogActions>
            </Dialog >
        );
        return dialogPay;
    }

    clear = () => {
        window.location.reload();
    }

    openForm = () => {
        this.setState({
            open1: true
        });
    }

    render() {
        const { classes, Carts } = this.props;
        return (
            <div>
                <Header />
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
                                <TableCell align="left">Tổng Giá</TableCell>
                                <TableCell align="left">Bỏ sản phẩm</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.showCartItem(Carts)}
                        </TableBody>
                    </Table>
                </TableContainer>
                
                <div className={classes.total}>
                    Tổng giá các sản phẩm : {this.showTotalAmount(Carts)} VNĐ
                </div>
                <div className={classes.pay} >
                    {/* <Link to='/Customer information' className={classes.none}>
                        <Button className={classes.information} >
                            Nhập thông tin nhận hàng
                        </Button>
                    </Link> */}
                
                    <Button color='primary' variant='contained'  className={classes.paybtn} onClick={this.openForm}>
                        Thanh toán
                    </Button>
                    {this.paySuccess()}
                    
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        Carts: state.task.Carts,
        quantity: state.task.quantity,
    }
}

const mapDispacthToProps = dispatch => {
    return {
        //fetchListTaskRequest :()=>dispatch(fetchListTaskRequest())
        deleteCart: list => dispatch(deleteCart(list)),
        increaseQuantity: list => dispatch(increaseQuantity(list)),
        decreaseQuantity: list => dispatch(decreaseQuantity(list)),
    };
};


export default withStyles(sytle)(connect(mapStateToProps, mapDispacthToProps)(Cart));