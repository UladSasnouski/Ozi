import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tager.dev.ozitag.com/api/',
})

let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");

export const setUserData = () => {
    return (dispatch: any) => {
        instance.get(`tager/user/profile`, { headers: { Authorization: `Bearer ${cookieValue}` } })
            .then(responce => {
                let { email, id, name } = responce.data.data;
                dispatch(setAuthUserData({ email, id, name }))
            })
        // .catch(err => {
        //     dispatch(addFail(err.message));
        // });
    };
};

export const logOut = () => {
    document.cookie = "token=$ path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.location.pathname = '/login';
    return (dispatch: any) => {
        let { email, id, name } = { email: "", id: NaN, name: "" };
        dispatch(setOut({ email, id, name }));
        dispatch(setLogOut());
    };
};

export const logIn = (initEmail: any, initPassword: any) => {
    return (dispatch: any) => {
        instance.post(`auth/user`, { "email": initEmail, "password": initPassword })
            .then(responce => {
                document.cookie = `token=${responce.data.data.accessToken}`;
                dispatch(setLogin());
                document.location.pathname = '/profile';
            })
        // .catch(err => {
        //     dispatch(addFail(err.message));
        // });
    };
};

const setAuthUserData = (todo: any) => ({
    type: 'SET_USER_DATA',
    data: {
        ...todo
    }
});

const setOut = (todo: any) => ({
    type: "LOG_OUT",
    data: {
        ...todo
    }
});

const setLogOut = () => ({
    type: "SET_LOGOUT"
})

const setLogin = () => ({
    type: "SET_LOGIN",
})