import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import IphoneItem from '../IphoneItem';
import sytle from './style';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import {bindActionCreators} from 'redux';
// import *as  taskActions from'./../../Actions/task';
import {fetchListTaskIphone} from './../../Actions/task'
import SearchBox from '../../Components/SearchBox';

class Iphone extends Component {

    renderBoard() {
        const {listTask}=this.props;
        let GridSP = null;
        GridSP = (
            <Grid container
                spacing={7}
            >
                {listTask.map((sp) => {
                    return (
                    <IphoneItem key={sp.name} sp={sp}/>
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
        this.props.fetchListTaskIphone();

    }

    render() {
        const { classes } = this.props;
        return (
            <div>

                <div className={classes.tittle}>Iphone :</div>
                {/* {this.renderSeachBox()} */}
                {this.renderBoard()}
            </div>
        );
    }
}
Iphone.protoTypes ={
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
        fetchListTaskIphone :()=>dispatch(fetchListTaskIphone())
    }; 
};

export default withStyles(sytle)(connect(mapStateToProps, mapDispacthToProps,)(Iphone),);