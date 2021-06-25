const errorReducer = (state = false, action: any) => {
    switch (action.type) {
        case 'SET_ERROR':
            return !state
        default:
            return state;
    }
}
export default errorReducer;