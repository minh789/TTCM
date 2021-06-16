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

// import StarIcon from '@material-ui/icons/Star';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import StarHalfIcon from '@material-ui/icons/StarHalf';
class TaskItem extends Component {
    render() {
        const { classes, sp } = this.props;
        return (
            <Grid item xs={8} sm={4} key={sp.name}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={sp.img}
                            onClick={() => this.props.addCart(sp)}
                        />
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