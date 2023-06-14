// reducers.js
const initialState = {
    userRequestedPost: '',
}

const headerReducer = (state = initialState, action) => {
    console.log(action.type)
    console.log(action.payload)
    switch (action.type) {
        case 'INPUT':
            return {
                ...state,
                userRequestedPost: action.payload,
            }
        default:
            return state
    }
}
export default headerReducer
