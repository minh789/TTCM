import axiosService from '../Service/axiosService';
import {API_ENDPOINT} from '../Contants';
// import qs from 'query-string';

//http://localhost:3000/Product
const url ='Product';

export const getList = () =>{
    return axiosService.get(`${API_ENDPOINT}/${url}`);
};

// export const getList = (params = {}) => {
//     let queryParams = '';
//     if (Object.keys(params).length > 0) {
//       queryParams = `?${qs.stringify(params)}`;
//     }
//     return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
//   };
