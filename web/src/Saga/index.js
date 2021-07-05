import { call, fork, put, take,takeLatest,delay,takeEvery} from 'redux-saga/effects';
import { fetchListTaskFailed, fetchListTaskSuccess, fetchListTask, addTaskSuccess, addTaskFailed } from '../Actions/task';
import { hideLoading, showLoading } from '../Actions/ui';
import { STATUS_CODE } from '../Contants';
import { addTask, getList } from './../Apis/task';
import * as taskTypes from './../Contants/task';

function* watchFecthListTaskAction() {
    while (true) {
        const action= yield take(taskTypes.FETCH_TASK);
        yield put (showLoading());
        const {params} =action.payload;
        const resp = yield call(getList,params);
        const { data, status } = resp;
        if (status === STATUS_CODE.SUCCESS) {
            yield put(fetchListTaskSuccess(data));
        }
        else {
            yield put(fetchListTaskFailed(data));
        }
        yield delay(500);
        yield put (hideLoading());
    }

}


function*filterTaskSaga({payload})
{
        yield delay(500);
        const {keyword}=payload;
        yield put(
            fetchListTask({
               q: keyword,
            })
        )
        //Cách này chỉ dùng trong store được 1 lần vì hàm put chỉ được gọi 1 lần 
        // const {keyword} =payload;
        // const list=yield select (state =>state.task.listTask) 
        // const filteredTask=list.filter(x =>
        //     x.name.trim().toLowerCase().includes(keyword.trim().toLowerCase()),
        //     );
        //     console.log(' ',filteredTask);
        //     yield put(filterTaskSuccess(filteredTask));
}

function*addTaskSaga({payload})
{
    const {id,name,price,daygive,cout,gurantee,year,imageToUpload}=payload;
    yield put (showLoading());
    const resp= yield call(addTask,{
        id,name,price,daygive,cout,gurantee,year,imageToUpload
    })
    const {data,status}=resp;
    if (status === STATUS_CODE.CREATED) {
        yield put(addTaskSuccess(data));
    }
    else {
        yield put(addTaskFailed(data));
    }
    yield delay(500);
    yield put (hideLoading());
}

function* rootSaga() {
    yield fork(watchFecthListTaskAction);
    yield takeLatest(taskTypes.FILTER_TASK,filterTaskSaga);
    yield takeEvery(taskTypes.ADD_TASK,addTaskSaga);
}

export default rootSaga;