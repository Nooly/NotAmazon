import { USER_SIGNIN, USER_SIGNUP, USER_SIGNOUT, ADD_TO_CART, REMOVE_FROM_CART, SAVE_SHIPPING_ADDRESS, SAVE_PAYMENT_METHOD } from '../actions.jsx';

const storeReducer = (state, action) => {
    switch (action.type) {
        case USER_SIGNIN: {
            return { ...state, userInfo: action.payload };
        }
        case USER_SIGNUP: {
            return { ...state, userInfo: action.payload };
        }
        case USER_SIGNOUT: {
            return { ...state, userInfo: null, cart: { cartItems: [], shippingAdress: {}, paymentMethod: "" } };
        }
        case ADD_TO_CART: {

            const newItem = action.payload;

            const existingItem = state.cart.cartItems.find(

                (item) => item._id === newItem._id

            );

            const cartItems = existingItem

                ? state.cart.cartItems.map((item) =>

                    item._id === existingItem._id ? newItem : item

                ) //סינטקס מוזר אבל הוא מחזיר את כל המערך, עם החלפה של את האייטם הישן בחדש

                : [...state.cart.cartItems, newItem];

            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            return { ...state, cart: { ...state.cart, cartItems } };
        }
        case REMOVE_FROM_CART: {
            const item = action.payload;
            const cartItems = state.cart.cartItems.filter((p) => p._id != item._id);

            localStorage.setItem("cartItems", JSON.stringify(cartItems)); // turn to function because doubleo
            return { ...state, cart: { ...state.cart, cartItems } };
        }
        case SAVE_SHIPPING_ADDRESS: {
            const shippingAdress = action.payload;
            localStorage.setItem("shippingAddress", JSON.stringify(shippingAdress));
            return { ...state, cart: { ...state.cart, shippingAddress: action.payload } }
        }
        case SAVE_PAYMENT_METHOD: {
            return { ...state, cart: { ...state.cart, paymentMethod: action.payload } }
        }
        default: return { ...state };
    }
}

export default storeReducer;