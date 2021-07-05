import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import sytle from './style';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { FORM_NAME } from '../../Contants/task';
import PropTypes from 'prop-types';
import renderTextField from '../FormHelper/TextField';
import { Grid } from '@material-ui/core';
import renderNumber from '../FormHelper/Number';
import renderDate from '../FormHelper/Date';
import { Form } from 'redux-form';
import DropZoneField from '../FormHelper/Imagine';
import validate from './validate';
import normalizeNumber from '../FormHelper/Number/Pricestyle';
import {bindActionCreators} from 'redux';
import *as  taskActions from'./../../Actions/task';
import { connect } from 'react-redux';

const imageIsRequired = value => (!value ? "Required" : undefined);

class AddProduct extends Component {

    state = { imageFile: [] };  
    
    handleOnDrop = (newImageFile, onChange) => {
        const imageFile = {
            file: newImageFile[0],
            name: newImageFile[0].name,
            preview: URL.createObjectURL(newImageFile[0]),
            size: newImageFile[0].size
        };

        this.setState({ imageFile: [imageFile] }, () => onChange(imageFile));
    };
    resetForm = () => this.setState({ imageFile: [] }, () => this.props.reset());


    handleSubmitForm = data => {
        const {taskActionCreators}=this.props;
        const { addTask}=taskActionCreators;
        const {id,name,price1,daygive,cout,gurantee,year,imageToUpload}=this.props;
        addTask(id,name,price1,daygive,cout,gurantee,year,imageToUpload);
    }

    render() {
        const { classes,invalid,submitting } = this.props;
        return (
            <Form>
                <Typography className={classes.tittle}>
                    Thông tin sản phẩm
                </Typography>
                <Grid container>
                    <Grid item md={12}>
                        <Field
                            className={classes.inputid}
                            id='id'
                            label='Nhập ID sản phẩm'
                            name='id'
                            component={renderTextField} />
                    </Grid>
                    <Grid item md={12}>
                        <Field
                            className={classes.inputname}
                            id='name'
                            label='Nhập tên sản phẩm'
                            name='name'
                            component={renderTextField} />
                    </Grid>
                    <Grid item md={12}>
                        <Field
                            className={classes.inputprice}
                            id='price1'
                            label='Nhập giá sản phẩm '
                            name='price1'
                            type='text'
                            normalize={normalizeNumber}
                            component={renderNumber}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <Field
                            className={classes.inputdaygive}
                            id='daygive'
                            name='daygive'
                            type='date'
                            component={renderDate} />
                    </Grid>
                    <Grid item md={12}>
                        <Field
                            className={classes.inputcout}
                            id='cout'
                            label='Nhập số lượng sản phẩm '
                            name='cout'
                            type='text'
                            normalize={normalizeNumber}
                            component={renderNumber}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <Field
                            className={classes.inputgurantee}
                            id='gurantee'
                            label='Nhập mã bảo hành '
                            name='gurantee'
                            component={renderTextField} />
                    </Grid>
                    <Grid item md={12}>
                        <Field
                            className={classes.inputcout}
                            id='year'
                            label='Nhập năm bảo hành'
                            name='year'
                            type='text'
                            component={renderNumber} />
                    </Grid>
                    <Grid item md={12}>
                        <Field
                            name='imageToUpload'
                            component={DropZoneField}
                            type='file'
                            imagefile={this.state.imageFile}
                            handleOnDrop={this.handleOnDrop}
                            validate={[imageIsRequired]}
                        />
                        <Grid item md={12}>
                            <Button
                                disabled={invalid || submitting}
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Nhập hàng
                            </Button>&nbsp;
                            <Button variant="contained" onClick={this.resetForm} >
                                Hủy Bỏ
                            </Button> 
                        </Grid>
                    </Grid>
                </Grid>
            </Form>
        );
    }
}

AddProduct.propTypes = {
    handleSubmit: PropTypes.func,
}

const withReduxForm = reduxForm({
    form: FORM_NAME,
    validate,
});

const mapStateToProps = null;

const mapDispacthToProps= dispatch =>{
    return{
        taskActionCreators:bindActionCreators(taskActions,dispatch),
        // fetchListTask:()=>dispatch(fetchListTask()),
        // filterTask:()=>dispatch(filterTask()),
    }; 
};

const withConnect = connect(
    mapStateToProps,
    mapDispacthToProps
)

export default compose(withStyles(sytle),withConnect,withReduxForm)(AddProduct);