import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import style from './style';

class SearchBox extends Component {
    constructor(props) {
        super(props);

        //Timer
        this.typingTimeout = null;

        //Event
        this.onFieldChange = this.onFieldChange.bind(this);

        //State
        this.state = { searchValue: '' };
    }


    /**
    * Called on the change of the textbox.
    * @param  {[Object]} event [Event object.]
    */
    onFieldChange(event) {
        // Clears the previously set timer.
        clearTimeout(this.typingTimeout);

        // Reset the timer, to make the http call after 475MS (this.callSearch is a method which will call the search API. Don't forget to bind it in constructor.)
        this.typingTimeout = setTimeout(this.callSearch, 475);

        // Setting value of the search box to a state.
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        const {classes }=this.props;
        return (
            <div className={classes.root}>
                <TextField
                    className={classes.text}
                    type="text"
                    name="searchValue"
                    value={this.state.searchValue}
                    placeholder="User Name or Email"
                    onChange={this.onFieldChange}
                />
            </div>
        );
    }
}

export default withStyles(style)(SearchBox);