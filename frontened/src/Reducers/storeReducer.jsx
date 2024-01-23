import { USER_SIGNIN, USER_SIGNUP } from '../actions.jsx';

const storeReducer = (state, action) => {
    switch (action.type) {
        case USER_SIGNIN: {
            return { ...state, userInfo: action.payload };
        }
        case USER_SIGNUP: {
            return { ...state, userInfo: action.payload };
        }
        default: return { ...state };
    }
}

export default storeReducer;