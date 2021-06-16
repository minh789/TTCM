import React, { Component } from 'react';
import style from './style';
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../Contants';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { red } from '@material-ui/core/colors';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import {Redirect } from 'react-router-dom';

class Footer extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Box
                px ={{xs:3,sm:10}}
                py={{xs:5,sm:10}}
                bgcolor="text.secondary"
                color="white"
            >
                <Container maxWidth="lg">
                    <Grid container spacing={7} >
                        <Grid item xs={12} sm={4} >
                            <Box borderBottom={1} className={classes.tittle}>Về Chúng Tôi</Box>
                            <Box className={classes.size}>
                                Công ty của chúng tôi đã được thành lập vào năm 2000
                                và đã có 21 năm trong lĩnh vực điện thoại và chúng có
                                đã có 2204 chi nhánh trên toàn thế giới
                     </Box>
                            <Box>
                                <List component="nav">

                                    <NavLink to="https://www.facebook.com/minhvuituoi">
                                    {/* <Redirect to="https://www.facebook.com/minhvuituoi" /> */}
                                        <FacebookIcon className={classes.icon} color="primary" style={{ fontSize: 50 }} />
                                    </NavLink>

                                    <NavLink to="https://twitter.com/">
                                        <TwitterIcon className={classes.icon} color="primary" style={{ fontSize: 50 }} />
                                    </NavLink>

                                    <NavLink to="https://www.youtube.com/">
                                        <YouTubeIcon className={classes.icon} style={{ color: red[600], fontSize: 50 }} />
                                    </NavLink>

                                </List>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Box borderBottom={1} className={classes.tittle}>Đường Dẫn</Box>
                            <Box className={classes.size} >
                                <List component="nav">
                                    {ROUTES.map(item => {
                                        return (
                                            <NavLink to={item.path}
                                                exact={item.exact}
                                                className={classes.menuLink}
                                                activeClassName={classes.menuLinkActive}
                                                key={item.path}>
                                                <ListItem className={classes.menuItem} button>
                                                    {item.name}
                                                </ListItem>
                                            </NavLink>
                                        );
                                    })}
                                </List>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Box borderBottom={1} className={classes.tittle}>Thông tin liên hệ</Box>
                            <Box className={classes.location}>
                                <LocationOnIcon style={{ color: red[600], fontSize: 50 }} />
                          Địa chỉ :737/36 Lạc Long Quân Phường 10 Quận Tân Bình
                        </Box>
                            <Box className={classes.telephone}>
                                <PhoneIcon color="primary" style={{ fontSize: 50 }} />
                             SĐT:0379434625
                        </Box>
                            <Box className={classes.email}>
                                <MailIcon color="primary" style={{ fontSize: 50 }} />
                             Email : titeo17012000@gmail.com
                        </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        );
    }
}

export default withStyles(style)(Footer);