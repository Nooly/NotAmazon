import { createContext, useReducer, PropTypes } from './imports.js'
import storeReducer from "./Reducers/storeReducer.jsx";

export const Store = createContext();

const userInfo = localStorage.getItem('userInfo');
const cartInfo = localStorage.getItem('cartItems');
const shippingAdress = localStorage.getItem('shippingAddress');
const paymentMethod = localStorage.getItem('paymentMethod');

const initialState = {
    userInfo: userInfo ? JSON.parse(userInfo) : null,
    cart: {
        cartItems: cartInfo ? JSON.parse(cartInfo) : [],
        shippingAddress: shippingAdress ? JSON.parse(shippingAdress) : {},
        paymentMethod: paymentMethod ? paymentMethod : ""
    }
};

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(storeReducer, initialState);
    const body = { state, dispatch };
    return <Store.Provider value={body}>{children}</Store.Provider>
};

StoreProvider.propTypes = { children: PropTypes.node };