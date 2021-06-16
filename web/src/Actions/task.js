import * as TaskApis from './../apis/task'
import * as taskConstants from '../Contants/task';

//Reset tất cả sản phẩm
export const fetchListTask = () => {
    return {
        type: taskConstants.FETCH_TASK,
    }
};

// Lấy sản phẩm thành công
export const fetchListTaskSuccess = (payload) => {
    return {
        type: taskConstants.FETCH_TASK_SUCCESS,
        payload
    };
};

//Lấy sản phẩm thất bại 
export const fetchListTaskFailed = (payload) => {
    return {
        type: taskConstants.FETCH_TASK_FAILED,
        payload
    };
};

/**
 * B1:fetchListTaskRequest ()
 * B2:Reset:state task =>[]
 * B3: fetchListTaskSuccess (data reponse)
 */

//Lấy tất cả sản phẩm 
export const fetchListTaskRequest = () => {
    return (dispatch) => {
        dispatch(fetchListTask());
        TaskApis.getList().then(res => {
            const {data}=res; 
            dispatch(fetchListTaskSuccess(data));
        }).catch(error => {
            dispatch(fetchListTaskFailed(error));
        });
    };
};

//Lấy số sản phẩm
export const getNumberCart = () => {
    return {
        type:taskConstants.GET_NUMBER_CART,
    };
};

// Thêm sản phẩm 
export const addCart =(payload) =>{
    return{
        type:taskConstants.ADD_CART,
        payload
    };
};

// Sửa sản phẩm 
export const updateCart = (payload) =>{
    return{
        type:taskConstants.UPDATE_CART,
        payload
    };
};

// Xóa sản phẩm 
export const deleteCart = (payload) =>{
    return{
        type:taskConstants.DELETE_CART,
        payload
    };
};


// Tăng sản phẩm 
export const increaseQuantity= (payload) =>{
    return{
        type:taskConstants.INCREASE_QUANTITY,
        payload
    };
};

// Gỉảm sản phẩm 
export const decreaseQuantity = (payload) =>{
    return{
        type:taskConstants.DECREASE_QUANTITY,
        payload
    };
};