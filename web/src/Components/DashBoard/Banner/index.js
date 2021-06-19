import React, { Component } from 'react';
import Carousel from "react-material-ui-carousel"
import style from './style';
import { withStyles } from '@material-ui/styles'
import autoBind from "auto-bind"
import {
    CardMedia,
    Grid,
} from '@material-ui/core';
import { imgBanner } from '../../../Contants';
class Banner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: true,
            animation: "fade",
            indicators: true,
            timeout: 100,
            navButtonsAlwaysVisible: false,
            navButtonsAlwaysInvisible: false,
            cycleNavigation: true
        }
        autoBind(this);
    }

    Banner ()
    {
        const { classes } = this.props;
        let banner = null;
        banner=imgBanner.map((item,index) =>{
            return (
          <CardMedia
                    key={index}
                    className={classes.media}
                    image={item.img}
                />   
            );  
        });
        return banner ;
    }

    render(){
        const {classes}=this.props;
        const { autoPlay,animation,indicators, timeout } = this.state;
        return (
            <Carousel
                autoPlay={autoPlay}
                animation={animation}
                indicators={indicators}
                timeout={timeout}
                cycleNavigation={this.state.cycleNavigation}
                navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
                // next={(now, previous) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                // prev={(now, previous) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                // onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
            >
                <Grid className={classes.banner}>
                        {this.Banner()}
                </Grid>
            </Carousel>
        );
    }
}

export default withStyles(style)(Banner);