import axiosService from '../Service/axiosService';
import {API_ENDPOINT} from '../Contants';
import qs from 'query-string';

//http://localhost:3000/Product
const  product ='Product';
const  iphone ='Iphone';
const  samsung ='Samsung';
const   vivo   = 'Vivo';
export const getList = (params ={}) =>{
    let queryparams='';
    if (Object.keys(params).length >0) {
        queryparams=`?${qs.stringify(params)}`;
    }
    return axiosService.get(`${API_ENDPOINT}/${product}${queryparams}`);
};

export const getListIphone = () =>{
    return axiosService.get(`${API_ENDPOINT}/${iphone}`);
};

export const getListSamsung = () =>{
    return axiosService.get(`${API_ENDPOINT}/${samsung}`);
};

export const getListVivo = () =>{
    return axiosService.get(`${API_ENDPOINT}/${vivo}`);
};

//http://localhost:3000/Product Method:POST

export const addTask =() =>{
    return axiosService.post(`${API_ENDPOINT}/${product}`);
}

