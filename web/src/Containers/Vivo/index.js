import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import VivoItem from '../VivoItem';
import sytle from './style';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import {bindActionCreators} from 'redux';
// import *as  taskActions from'./../../Actions/task';
import {fetchListTaskVivo} from './../../Actions/task'
import SearchBox from '../../Components/SearchBox';

class Vivo extends Component {

    renderBoard() {
        const {listTask}=this.props;
        let GridSP = null;
        GridSP = (
            <Grid container
                spacing={7}
            >
                {listTask.map((sp) => {
                    return (
                    <VivoItem key={sp.name} sp={sp}/>
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
        this.props.fetchListTaskVivo();

    }

    render() {
        const { classes } = this.props;
        return (
            <div>

                <div className={classes.tittle}>Vivo :</div>
                {/* {this.renderSeachBox()} */}
                {this.renderBoard()}
            </div>
        );
    }
}
Vivo.protoTypes ={
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
        fetchListTaskVivo :()=>dispatch(fetchListTaskVivo())
    }; 
};

export default withStyles(sytle)(connect(mapStateToProps, mapDispacthToProps,)(Vivo),);