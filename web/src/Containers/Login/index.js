import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import style from './style';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';  
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        const { classes } = this.props;
        return (
                    <Grid container component="main" className={classes.root}>
                        <CssBaseline />
                        <Grid item xs={false} sm={4} md={7} className={classes.image} />
                        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                            <div className={classes.paper}>
                                <Avatar className={classes.avatar}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Đăng nhập để tiếp tục mua sắm 
                                </Typography>
                                <form className={classes.form} noValidate>
                                    <TextField
                                        id='email'
                                        label='Email'
                                        type='text'
                                        className={classes.textField}
                                        fullWidth
                                        margin='normal'
                                        autoFocus
                                    />
                                    <TextField
                                        id='password'
                                        label='Password'
                                        type='password'
                                        className={classes.textField}
                                        fullWidth
                                        margin='normal'
                                    />
                                    <Link to='/'>
                                        <Button variant='contained' color='secondary' fullWidth type='submit'>
                                            Đăng nhập
                                        </Button>
                                    </Link>
                                    <div className='pt-1 text-md-center'>
                                        <Link to='/signup'>
                                            <Button>Đăng ký tài khoản</Button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </Grid>
                    </Grid>
        );
    }
}

export default withStyles(style)(Login);