import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import sytle from './style';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { addCart } from './../../Actions/task'
import Rating from '@material-ui/lab/Rating';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

class TaskItem extends Component {
    render() {
        const { classes, sp } = this.props;
        return (
            <Grid item xs={8} sm={4} key={sp.name}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <ButtonBase
                            focusRipple
                            className={classes.image}
                            focusVisibleClassName={classes.focusVisible}
                            onClick={() => this.props.addCart(sp)}
                        >
                            <CardMedia
                                className={classes.media}
                                image={sp.img}
                            />
                            <span className={classes.imageBackdrop} />
                            <span className={classes.imageButton}>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    className={classes.imageTitle}
                                >
                                    Thêm vào giỏ hàng
                                    <span className={classes.imageMarked} />
                                </Typography>
                            </span>
                        </ButtonBase>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" >
                                {sp.name}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2" >
                                {sp.price.toLocaleString('vi-VN')} VNĐ
                            </Typography>
                            <div className={classes.star}>
                                <Rating name="half-rating-read" defaultValue={sp.rating} precision={0.5} readOnly />
                            </div>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link to='/Customer information' className={classes.none}>
                            <ShoppingCartIcon color='primary' className={classes.setIcon} />
                            <Button size="big" color="primary">
                                Xem giỏ hàng
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}
const mapDispacthToProps = dispatch => {
    return {
        addCart: sp => dispatch(addCart(sp))
    };
}
export default withStyles(sytle)(connect(null, mapDispacthToProps)(TaskItem));