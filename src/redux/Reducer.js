

const initialState = {
    title: 0
}

export default function reducer (state = initialState, action) {
    if (action.type === 'GET_PLUS') {
        return {...state, title: action.payload}
    } else if (action.type === 'GET_MINUS') {
        return {...state, title: action.payload}
    }
    return state
}