import MasterPage from '../Containers/MasterPage'
// import Guarantee from '../Containers/Guarantee'
import Cart from '../Containers/Cart/index';
import Login from '../Containers/Login';
import Signup from '../Containers/Signup';
export const API_ENDPOINT ='http://localhost:3000';
export const ROUTES = [
    {
        path:'/',
        name:'Trang chủ',
        exact:true,
        component:MasterPage,
    },
    // {
    //     path:'/Guarantee',
    //     name:'Bảo hành',
    //     component:Guarantee,
    // },
];

export const CART =[
    {
        path:'/Cart',
        name:'Giỏ hàng ',
        component:Cart
    },
]

export const ACCOUNT =[
    {
        path:'/login',
        name:'Đăng nhập ',
        component:Login,
    },
    {
        path:'/signup',
        name:'Đăng kí ',
        component:Signup,
    },
]

export const imgBanner =[
    {
        img:'https://www.thuengay.vn/uploads/770x433/dd5787fa0c9306323b7176ce91a4d31ff6041c4a2.jpg'
    },
    {
        img:'https://i.ytimg.com/vi/36HnmEcKDJk/maxresdefault.jpg'
    },
    {
        img:'https://thietkehaithanh.com/wp-content/uploads/2019/06/huong-dan-thiet-ke-banner-dien-thoai-bang-photoshop.jpg'
    },
]


export const AUTHORIZATION_KEY = 'TOKEN';
