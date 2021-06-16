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
import { FormControlLabel, Checkbox } from '@material-ui/core';

class Signup extends Component {
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
                        <div >
                            <Typography variant='caption'>
                                Đăng ký tài khoản để tiếp tục mua sắm ^^
                            </Typography>
                        </div>
                        <form className={classes.form} noValidate>
                            <TextField
                                id='email'
                                label='Email'
                                type='text'
                                className={classes.textField}
                                fullWidth
                                margin='normal'
                            />
                            <TextField
                                id='password'
                                label='Password'
                                type='password'
                                className={classes.textField}
                                fullWidth
                                margin='normal'
                            />

                            <TextField
                                id='cpassword'
                                label='Confirm Password'
                                type='password'
                                className={classes.textField}
                                fullWidth
                                margin='normal'
                            />
                            <FormControlLabel
                                control={<Checkbox value='agree' />}
                                label='Tôi đã đọc chính sách và đồng ý điều khoản'
                                className={classes.fullWidth}
                            />
                            <Link to='/'>
                                <Button variant='contained' color='secondary' fullWidth type='submit'>
                                    Đăng ký tài khoản
                                </Button>
                            </Link>
                            <div className='pt-1 text-md-center'>
                                <Link to='/login'>
                                    <Button>Đã có tài khoản</Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(style)(Signup);