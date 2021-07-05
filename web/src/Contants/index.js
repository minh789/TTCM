import MasterPage from '../Containers/MasterPage'
import CustomerInformation from '../Containers/Customer information'
import Cart from '../Containers/Cart/index';
import Login from '../Containers/Login';
import Signup from '../Containers/Signup';
import Iphone from '../Containers/Iphone';
import Samsung from '../Containers/Samsung';
import Vivo from '../Containers/Vivo';
import Manager from '../Containers/Manager';
import AddProduct from '../Containers/AddProduct';
export const API_ENDPOINT = 'http://localhost:3000';
export const ROUTES = [
    {
        path: '/',
        name: 'Trang chủ',
        exact: true,
        component: MasterPage,
    },
    {
        path: '/Customer information',
        name: 'Thông tin khách hàng',
        component: CustomerInformation,
    },
];

export const CART = [
    {
        path: '/Cart',
        name: 'Giỏ hàng ',
        component: Cart
    },
]

export const ACCOUNT = [
    {
        path: '/login',
        name: 'Đăng nhập ',
        component: Login,
    },
    {
        path: '/signup',
        name: 'Đăng kí ',
        component: Signup,
    },
]

export const PRODUCT = [
    {
        path: '/',
        name: 'Trang chủ',
        exact: true,
        component: MasterPage,
    },
    {
        path: '/iphone',
        name: 'Iphone ',
        component: Iphone,
    },
    {
        path: '/samsung',
        name: 'Samsung ',
        component: Samsung,
    },
    {
        path: '/vio',
        name: 'Vivo ',
        component: Vivo,
    },
]

export const MANAGER = [
    {
        path: '/manager',
        name: 'Quản lý sản phẩm',
        exact: true,
        component: Manager,
    },
    {
        path: '/addproduct',
        name: 'Thêm sản phẩm',
        component: AddProduct,
    },
]

export const STATUS_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    UPDATED: 202,
    }
  




export const imgBanner = [
    {
        img: 'https://www.thuengay.vn/uploads/770x433/dd5787fa0c9306323b7176ce91a4d31ff6041c4a2.jpg'
    },
    {
        img: 'https://i.ytimg.com/vi/36HnmEcKDJk/maxresdefault.jpg'
    },
    {
        img: 'https://thietkehaithanh.com/wp-content/uploads/2019/06/huong-dan-thiet-ke-banner-dien-thoai-bang-photoshop.jpg'
    },
]


export const AUTHORIZATION_KEY = 'TOKEN';
