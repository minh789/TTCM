import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import SamsungItem from '../SamsungItem';
import sytle from './style';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import {bindActionCreators} from 'redux';
// import *as  taskActions from'./../../Actions/task';
import {fetchListTaskSamsung} from './../../Actions/task'
import SearchBox from '../../Components/SearchBox';

class SamSung extends Component {

    renderBoard() {
        const {listTask}=this.props;
        let GridSP = null;
        GridSP = (
            <Grid container
                spacing={7}
            >
                {listTask.map((sp) => {
                    return (
                    <SamsungItem key={sp.name} sp={sp}/>
                    );
                })}
            </Grid>
        );
        return GridSP;
    }

    renderSeachBox()
    {
        let searchBox =null;
        searchBox =(
            <SearchBox/>
        );
        return searchBox;
    }

    componentDidMount(){
        // const {taskActionCreators}=this.props;
        // const { fetchListTaskRequest}=taskActionCreators;
        // fetchListTaskRequest();
        this.props.fetchListTaskSamSung();

    }

    render() {
        const { classes } = this.props;
        return (
            <div>

                <div className={classes.tittle}>SamSung :</div>
                {/* {this.renderSeachBox()} */}
                {this.renderBoard()}
            </div>
        );
    }
}
SamSung.protoTypes ={
    classes:PropTypes.object,
    // taskActionCreators:PropTypes.shape({
    //     fetchListTaskRequest:PropTypes.func,
    // }),
    fetchListTaskRequest:PropTypes.func,
    listTask:PropTypes.array,
}

const mapStateToProps = state => {
    return {
      listTask: state.task.listTask,
    };
  };

const mapDispacthToProps= dispatch =>{
    return{
        // taskActionCreators:bindActionCreators(taskActions,dispatch),
        fetchListTaskSamSung :()=>dispatch(fetchListTaskSamsung())
    }; 
};

export default withStyles(sytle)(connect(mapStateToProps, mapDispacthToProps,)(SamSung),);