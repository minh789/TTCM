import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import sytle from './style';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import validate from './validate';
import { Form } from 'redux-form';
import { reduxForm, Field } from 'redux-form';
import { FORM_ABOUT } from '../../Contants/task';
import { compose } from 'redux';
import { Grid } from '@material-ui/core';
import renderTextField from '../FormHelper/TextField';
import normalizePhone from '../FormHelper/Number/normalizePhone';
import renderNumber from '../FormHelper/Number';


class CustomerInformation extends Component {
    render() {
        const { classes, invalid, submitting } = this.props;
        return (
            <Form >
                <Typography className={classes.tittle}>
                    Thông tin khách hàng
                </Typography>
                <Grid contaniner>
                    <Grid item md={12}>
                        <Field
                            className={classes.inputName}
                            id='name'
                            label='Họ và tên'
                            name='name'
                            component={renderTextField} />
                    </Grid>
                    <Grid item md={12}>
                        <Field
                            className={classes.inputSDT}
                            id='phone'
                            label='Số điện thoại '
                            name='phone'
                            type='text'
                            normalize={normalizePhone}
                            component={renderNumber}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <Field
                            className={classes.inputDC}
                            id='adress'
                            label='Địa chỉ'
                            name='adress'
                            component={renderTextField} />
                    </Grid>
                    <Grid item md={12}>
                        <Field
                            className={classes.inputEM}
                            id='email'
                            label='Email'
                            name='email'
                            component={renderTextField} />
                    </Grid>
                    <Grid item md={12}>
                        <Link to='/Cart' className={classes.cart}>
                            <Button
                                className={classes.confirm}
                                disabled={invalid || submitting}
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Xác nhận
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Form>
        );
    }
}
const withReduxForm = reduxForm({
    form: FORM_ABOUT,
    validate,
});

export default compose(withReduxForm, withStyles(sytle))(CustomerInformation);