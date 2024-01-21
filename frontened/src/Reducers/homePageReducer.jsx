import { GET_FAIL, GET_SUCCESS, GET_REQUEST } from '../actions';

const homePageReducer = (state, action) => {
    switch (action.type) {
        case GET_REQUEST:{
            return {...state, loading: true};
        }
        case GET_FAIL:{
            return {...state, loading: false, error: action.payload};
        }
        case GET_SUCCESS:{
            return {...state, loading: false, data: action.payload};
        }
        default: return {...state};
    }
}

export default homePageReducer;
