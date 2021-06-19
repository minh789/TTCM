import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import style from './style';
import SearchIcon from '@material-ui/icons/Search';

class SearchBox extends Component {
    render() {
      const { classes, textChange, value } = this.props;
      return (
        <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />    
        </div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            className={classes.textField}
            onChange={textChange}
            margin="normal"
            placeholder="Tìm kiếm tên sản phẩm "
            value={value}
          />
        </form>
        </div>
      );
    }
  }
  
export default withStyles(style)(SearchBox);