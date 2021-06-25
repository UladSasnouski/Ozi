let initialstate = {
    email: "",
    id: NaN,
    name: ""
};

const loginReducer = (state = initialstate, action: any) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data
            }
        case 'LOG_OUT':
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export default loginReducer;