import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import style from './style';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';  
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import validate from './validate';
import { Form } from 'redux-form';
import { FORM_NAME } from '../../Contants/task';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import renderTextField from '../FormHelper/TextField';
import renderNumber from '../FormHelper/Number';
class Login extends Component {
  
    render() {
        const { classes,invalid,submitting,handleSubmit } = this.props;
        return (
                    <Grid container component="main" className={classes.root}>
                        <CssBaseline />
                        <Grid item xs={false} sm={4} md={7} className={classes.image} />
                        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                            <div className={classes.paper}>
                                <Avatar className={classes.avatar}>
                                    <LockOutlinedIcon />
                                </Avatar>
                            <Form className={classes.form} >
                                <Typography component="h1" variant="h5">
                                    Đăng nhập để tiếp tục mua sắm 
                                </Typography>
                                    <Field
                                        id='Email'
                                        label='Email'
                                        name='email'
                                        className={classes.textField}
                                        fullWidth
                                        autoFocus
                                        component={renderTextField}
                                    />
                                    <Field
                                        id='password'
                                        name='password'
                                        label='Mật khẩu'
                                        type='password'
                                        component={renderNumber}
                                        className={classes.textField}
                                        fullWidth
                                        margin='normal'
                                    />
                                    <Link className={classes.none} to='./'>
                                         <Button 
                                        disabled={invalid || submitting}
                                         variant='contained' 
                                         color='secondary' 
                                         fullWidth
                                         type='submit'
                                         >
                                            Đăng nhập
                                        </Button>
                                    </Link>
                                    <div className='pt-1 text-md-center'>
                                        <Link to='/signup'>
                                            <Button>Đăng ký tài khoản</Button>
                                        </Link>
                                    </div>
                                </Form>
                            </div>
                        </Grid>
                    </Grid>
        );
    }
}

const withReduxForm = reduxForm({
    form: FORM_NAME,
    validate,
});


export default compose(withReduxForm,withStyles(style))(Login);