import Apiservice from "../../services/Apiservice";
import { clearAuthToken, setAuthToken } from "../../services/Tokenservice";
import { AUTHORIZE, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_SUCCESS, UNAUTHORIZE } from "../authType";

export const register = (data) => {
    return (dispatch) => {
        Apiservice.post("/auth/register/student", data)
            .then((res) => {
                const token = res.data.data.token;
                setAuthToken(token);
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: res.data.data
                });
                switch (res.data.data.role.name) {
                    case "admin":
                        window.location.assign("http://localhost:3000/admin/");
                    case "instructor":
                        window.location.assign("http://localhost:3000/instructor/");
                    case "student": 
                        window.location.assign("http://localhost:3000/student/");
                    default:
                        break;
                }
            }).catch((err) => {
                dispatch({
                    type: REGISTER_FAILURE,
                    payload: err.response.data.msg,
                })
            })
    }
}
export const login = (credential) => {
    return (dispatch) => {
        Apiservice.post("/auth/login", credential)
            .then((res) => {
                const token = res.data.data.token;
                setAuthToken(token);
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data.data,
                });
                switch (res.data.data.role.name) {
                    case "admin":
                        window.location.assign("http://localhost:3000/admin/");
                        break;
                    case "instructor":
                        window.location.assign("http://localhost:3000/instructor/");
                        break;
                    case "student": 
                        window.location.assign("http://localhost:3000/student/");
                        break;
                    default:
                        break;
                }
            }).catch((err) => {
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: err.response.data.msg,
                })
            })
    }
}
export const logout = () => {
    return (dispatch) => {
        Apiservice.get("/auth/logout")
            .then(res => {
                dispatch({
                    type: LOGOUT,
                })
                clearAuthToken();
                window.location.assign("http://localhost:3000");
            }).catch(err => console.log(err))
    }
}


