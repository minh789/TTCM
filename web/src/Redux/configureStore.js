import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './../Reducers';
import thunk from 'redux-thunk';
//Những bước để thiết lập __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false
    }) : compose;

//Muốn tạo store cứ chạy hàm này 
const configureStore = () => {
    const middlewares = [thunk];
    const enhancers = [applyMiddleware(...middlewares)];
    const store = createStore(rootReducer, composeEnhancers(...enhancers));
    return store;
};

export default configureStore;