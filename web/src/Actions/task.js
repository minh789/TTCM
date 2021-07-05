import * as TaskApis from '../Apis/task'
import * as taskConstants from '../Contants/task';

//Reset tất cả sản phẩm
export const fetchListTask = (params= {}) => {
    return {
        type: taskConstants.FETCH_TASK,
        payload:{
            params,
        }
    }
};



// Lấy sản phẩm thành công
export const fetchListTaskSuccess = data => {
    return {
        type: taskConstants.FETCH_TASK_SUCCESS,
        payload:
        {
            data,
        },
    };
};

//Lấy sản phẩm thất bại 
export const fetchListTaskFailed = error => {
    return {
        type: taskConstants.FETCH_TASK_FAILED,
        payload:{
            error,
        },
    };
};
export const addTask = (id,name,price1,daygive,cout,gurantee,year,imageToUpload) => {
    return {
        type: taskConstants.ADD_TASK, 
        payload:{
            id,name,price1,daygive,cout,gurantee,year,imageToUpload
        }
    }
};



// Thêm sản phẩm thành công
export const addTaskSuccess = data => {
    return {
        type: taskConstants.ADD_TASK_SUCCESS,
        payload:
        {
            data,
        },
    };
};

//Thêm sản phẩm thất bại 
export const addTaskFailed = error => {
    return {
        type: taskConstants.ADD_TASK_FAILED,
        payload:{
            error,
        },
    };
};
export const filterTask= keyword =>({
    type:taskConstants.FILTER_TASK,
    payload:{
        keyword,
    },
});

export const filterTaskSuccess= data =>({
    type:taskConstants.FILTER_TASK_SUCCESS,
    payload:{
        data,
    },
});

/**
 * B1:fetchListTaskRequest ()
 * B2:Reset:state task =>[]
 * B3: fetchListTaskSuccess (data reponse)
 */

//Thêm tất cả sản phẩm 
// export const fetchListTaskRequest = () => {
//     return (dispatch) => {
//         dispatch(fetchListTask());
//         TaskApis.getList().then(res => {
//             const {data}=res; 
//             dispatch(fetchListTaskSuccess(data));
//         }).catch(error => {
//             dispatch(fetchListTaskFailed(error));
//         });
//     };
// };

//Lấy tất cả sản phẩm iphone
export const fetchListTaskIphone = () => {
    return (dispatch) => {
        dispatch(fetchListTask());
        TaskApis.getListIphone().then(res => {
            const {data}=res; 
            dispatch(fetchListTaskSuccess(data));
        }).catch(error => {
            dispatch(fetchListTaskFailed(error));
        });
    };
};

//Lấy tất cả sản phẩm samsung
export const fetchListTaskSamsung = () => {
    return (dispatch) => {
        dispatch(fetchListTask());
        TaskApis.getListSamsung().then(res => {
            const {data}=res; 
            dispatch(fetchListTaskSuccess(data));
        }).catch(error => {
            dispatch(fetchListTaskFailed(error));
        });
    };
};

//Lấy tất cả sản phẩm vivo
export const fetchListTaskVivo = () => {
    return (dispatch) => {
        dispatch(fetchListTask());
        TaskApis.getListVivo().then(res => {
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

