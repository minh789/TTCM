import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import sytle from './style';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

class Guarantee extends Component {
    renderProduct() {
        let product = null;
        const { classes } = this.props;
        product = (
            <Card className={classes.root}>
                <CardMedia
                    className={classes.cover}
                    image="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12_2__3.jpg"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            Thông tin điện thoại
  </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Mac Miller
  </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Mac Miller
  </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Mac Miller
  </Typography>
                    </CardContent>
                </div>
            </Card>
        );

        return product;
    }
    render() {
        const { classes } = this.props;
        return (
            <div >
                <Typography className={classes.center} component="h5" variant="h5">
                    Mã bão hành của bạn là:
                    <TextField
                        className={classes.text}
                        type="text"
                        name="searchValue"
                        value=""
                        placeholder="Nhập mã bão hành"
                        onChange={this.onSelectProduct}
                        size="medium"
                    />
                    <Button variant="contained" color="secondary">
                        Tìm kiếm
                    </Button>   
                </Typography>
                {this.renderProduct()}
            </div>
        );
    }
}

export default withStyles(sytle)(Guarantee);