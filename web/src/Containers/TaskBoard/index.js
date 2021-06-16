import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import TaskItem from '../TaskItem';
import sytle from './style';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import {bindActionCreators} from 'redux';
// import *as  taskActions from'./../../Actions/task';
import {fetchListTaskRequest} from './../../Actions/task'
import SearchBox from '../../Components/SearchBox';

class TaskBoard extends Component {

    renderBoard() {
        const {listTask}=this.props;
        let GridSP = null;
        GridSP = (
            <Grid container
                // direction="row"
                // justify="space-around"
                // alignItems="stretch"
                spacing={7}
            >
                {listTask.map((sp) => {
                    return (
                    <TaskItem key={sp.name} sp={sp}/>
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
        this.props.fetchListTaskRequest();

    }

    render() {
        return (
            <div>
                {/* {this.renderSeachBox()} */}
                {this.renderBoard()}
            </div>
        );
    }
}
TaskBoard.protoTypes ={
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
        fetchListTaskRequest :()=>dispatch(fetchListTaskRequest())
    }; 
};

export default withStyles(sytle)(connect(mapStateToProps, mapDispacthToProps,)(TaskBoard),);