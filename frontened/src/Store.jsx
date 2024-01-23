import { createContext, useReducer, PropTypes } from './imports.js'
import storeReducer from "./Reducers/storeReducer.jsx";

export const Store = createContext();

const userInfo = localStorage.getItem('userInfo');
const initialState = { userInfo: userInfo ? JSON.parse(userInfo) : null };

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(storeReducer, initialState);
    const body = { state, dispatch };
    return <Store.Provider value={body}>{children}</Store.Provider>
};

StoreProvider.propTypes = { children: PropTypes.node };