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
                            {list.price.toLocaleString('vi-VN')} VN??
                        </TableCell>
                        <TableCell>
                            {this.TotalPrice(list.price, list.quantity)} VN??
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
                <DialogTitle id="alert-dialog-title">{"B???n c?? mu???n x??a s???n ph???m kh??ng "}</DialogTitle>
                <DialogActions>
                    <Button onClick={() => this.props.deleteCart(key)} color="primary">
                        C??
                    </Button>
                    <Button onClick={() => this.handleClose(false)} color="primary">
                        Kh??ng
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
                <DialogTitle id="alert-dialog-title">{"C???m ??n b???n ???? mua s???m t???i trang web ch??ng t??i"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <CheckCircleIcon className={classes.payDialog} style={{ color: green[500], fontSize: 150 }} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.clear()} color="primary">
                        ????ng
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
                                <TableCell align="left">H??nh ???nh</TableCell>
                                <TableCell align="left">T??n</TableCell>
                                <TableCell align="left">M?? B???o H??nh</TableCell>
                                <TableCell align="left">B???o h??nh</TableCell>
                                <TableCell align="left">S??? l?????ng</TableCell>
                                <TableCell align="left">Gi??</TableCell>
                                <TableCell align="left">T???ng Gi??</TableCell>
                                <TableCell align="left">B??? s???n ph???m</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.showCartItem(Carts)}
                        </TableBody>
                    </Table>
                </TableContainer>
                
                <div className={classes.total}>
                    T???ng gi?? c??c s???n ph???m : {this.showTotalAmount(Carts)} VN??
                </div>
                <div className={classes.pay} >
                    {/* <Link to='/Customer information' className={classes.none}>
                        <Button className={classes.information} >
                            Nh???p th??ng tin nh???n h??ng
                        </Button>
                    </Link> */}
                
                    <Button color='primary' variant='contained'  className={classes.paybtn} onClick={this.openForm}>
                        Thanh to??n
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