const AUTH_TOKEN_KEY = "token";
export const setAuthToken = (token) => {
    return localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export const getAuthToken = () => {
    return localStorage.getItem(AUTH_TOKEN_KEY);
}

export const clearAuthToken = (token) => {
    return localStorage.removeItem(AUTH_TOKEN_KEY, token);
}