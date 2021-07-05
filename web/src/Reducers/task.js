import *as taskConstants from './../Contants/task'

const initialState = {
    listTask: [],
    numberCart: 0,
    Carts: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case taskConstants.FETCH_TASK: {
            return {
                ...state,
                listTask: [],
            };
        }

        case taskConstants.FETCH_TASK_SUCCESS: {
            const {data}=action.payload;
            return {
                ...state,
                listTask: data,
            };
        }

        case taskConstants.FETCH_TASK_FAILED: {
            return {
                ...state,
                listTask: [],
            };
        }

        case taskConstants.ADD_TASK: {
            return {
                ...state,
            };
        }

        case taskConstants.ADD_TASK_SUCCESS: {
            const { data } = action.payload;
        
             return {
                ...state,
                listTask: [data].concat(state.listTask),
            };
        }

        case taskConstants.ADD_TASK_FAILED: {
            return {
                ...state,
            };
        }

        case taskConstants.FILTER_TASK_SUCCESS: {
            const {data}=action.payload;
            return {
                ...state,
                listTask:data,
            };
        }

        case taskConstants.GET_NUMBER_CART:
            return {
                ...state
            }



        case taskConstants.ADD_CART: {
            if (state.numberCart === 0) {
                let cart = {
                    id: action.payload.id,
                    quantity: 1,
                    name: action.payload.name,
                    img: action.payload.img,
                    price: action.payload.price,
                    guarantee: action.payload.guarantee,
                    warranty_code: action.payload.warranty_code
                }
                state.Carts.push(cart);
            }
            else {
                let check = false;
                state.Carts.map((item, key) => {
                    if (item.id === action.payload.id) {
                        state.Carts[key].quantity++;
                        check = true;
                    }
                    return state.Carts;
                });
                if (!check) {
                    let _cart = {
                        id: action.payload.id,
                        quantity: 1,
                        name: action.payload.name,
                        img: action.payload.img,
                        price: action.payload.price,
                        guarantee: action.payload.guarantee,
                        warranty_code: action.payload.warranty_code
                    }
                    state.Carts.push(_cart);
                }
            }
            return {
                ...state,
                numberCart: state.numberCart + 1
            }
        }

        case taskConstants.DECREASE_QUANTITY:
            let quantity = state.Carts[action.payload].quantity;
            if (quantity > 1) {
                state.numberCart--
                state.Carts[action.payload].quantity--
            }

            return {
                ...state,
                quantity: state.Carts[action.payload].quantity

            }

        case taskConstants.INCREASE_QUANTITY:
            let quantity__ = state.Carts[action.payload].quantity;
            if(quantity__ < 10)
            {
            state.numberCart++
            state.Carts[action.payload].quantity++
            }
            return {
                ...state,
                quantity: state.Carts[action.payload].quantity
            }

        case taskConstants.DELETE_CART:
            let quantity_ = state.Carts[action.payload].quantity;
            return {
                ...state,
                numberCart: state.numberCart - quantity_,
                Carts: state.Carts.filter(item => {
                    return item.id !== state.Carts[action.payload].id
                })
            }

        default:
            return state;
    }
};

export default reducer;