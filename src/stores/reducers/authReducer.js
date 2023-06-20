import { AUTHORIZE, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_SUCCESS, UNAUTHORIZE } from "../authType";

const initialState = {
    isAuthenticated: false,
    user: null,
    err: null,
    authority: false,
}
const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS: 
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                err: null,
            };
        case LOGIN_FAILURE:
        case REGISTER_FAILURE: 
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                err: action.payload,
            };
        case LOGOUT: 
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                err: null,
            };
        default: 
            return state;
    }
}

export default authReducer;