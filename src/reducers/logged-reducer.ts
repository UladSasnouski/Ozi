const authReducer = (state = false, action: any) => {
    switch (action.type) {
        case 'SET_LOGOUT':
            return !state
        default:
            return state;
    }
}

export default authReducer;