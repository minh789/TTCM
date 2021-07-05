import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import TaskItem from '../TaskItem';
import sytle from './style';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import *as  taskActions from'./../../Actions/task';
// import {fetchListTask,filterTask} from './../../Actions/task'
import SearchBox from '../../Components/SearchBox';

class TaskBoard extends Component {

    renderBoard() {
        const {listTask}=this.props;
        let GridSP = null;
        GridSP = (
            <Grid container
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

    handleFilter = e =>{
      const {value} =e.target;
      const {taskActionCreators}=this.props;
      const { filterTask}=taskActionCreators;
      filterTask(value);
    }
    renderSeachBox()
    {
        let searchBox =null;
        searchBox =(
            <SearchBox handleChange={this.handleFilter}/>
        );
        return searchBox;
    }

    componentDidMount(){
        const {taskActionCreators}=this.props;
        const { fetchListTask}=taskActionCreators;
        fetchListTask();
        // this.props.fetchListTask();

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
    fetchListTask:PropTypes.func,
    listTask:PropTypes.array,
}

const mapStateToProps = state => {
    return {
      listTask: state.task.listTask,
    };
  };

const mapDispacthToProps= dispatch =>{
    return{
        taskActionCreators:bindActionCreators(taskActions,dispatch),
        // fetchListTask:()=>dispatch(fetchListTask()),
        // filterTask:()=>dispatch(filterTask()),
    }; 
};

export default withStyles(sytle)(connect(mapStateToProps, mapDispacthToProps,)(TaskBoard),);