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
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { Form } from 'redux-form';
import renderTextField from '../FormHelper/TextField';
import renderNumber from '../FormHelper/Number';
import { FORM_NAME } from '../../Contants/task';
import { compose } from 'redux';
import validate from './validate';
import { reduxForm, Field } from 'redux-form';
import CheckboxWithLabelAndError from '../FormHelper/CheckBox';

const required= value => (!value ? "Không được bỏ trống" : undefined);

class Signup extends Component {
    render() {
        const { classes,invalid,submitting } = this.props;
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
                        <Form className={classes.form} noValidate>
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

                            <Field
                                id='confirmPassword'
                                name='confirmpassword'
                                label='Xác nhận lại mật khẩu'
                                type='password'
                                component={renderNumber}
                                className={classes.textField}
                                fullWidth
                                margin='normal'
                            />
                            <Field
                                color="primary"
                                name="agreeToTerms"
                                classes={{checked: classes.checked, checkboxError: classes.checkboxAgreeError}}
                                component={CheckboxWithLabelAndError}
                                label='Tôi đã đọc chính sách và đồng ý điều khoản'
                                className={classes.fullWidth}
                                validate={[required]}
                            />
                          <Link className={classes.none} to='./login'>
                                <Button  disabled={invalid || submitting} variant='contained' color='secondary' fullWidth type='submit'>
                                    Đăng ký tài khoản
                                </Button>
                            </Link>
                            <div className='pt-1 text-md-center'>
                                <Link to='/login'>
                                    <Button>Đã có tài khoản</Button>
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
    validate
});

export default compose(withReduxForm, withStyles(style))(Signup);