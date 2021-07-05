import { combineReducers } from 'redux';
import task from  './task';
import ui   from  './ui';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    task ,
    ui,
    form:formReducer
});

export default rootReducer;
