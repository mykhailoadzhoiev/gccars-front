const SET_AUTH = 'SET_AUTH'
const SET_DATA_USER = 'SET_DATA_USER'
const SET_MINUS_COIN = 'SET_MINUS_COIN'
const SET_PLUS_COIN = 'SET_PLUS_COIN'

const initialState = {
    auth: false,
    dataUser: {}
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_AUTH:
            return {
                ...state, auth: action.payload
            }
        case SET_DATA_USER:
            return {
                ...state, dataUser: action.payload
            }
        case SET_MINUS_COIN:
            return {
                ...state, dataUser: {...state.dataUser, balance: state.dataUser.balance - action.payload}
            }
        case SET_PLUS_COIN:
            return {
                ...state, dataUser: {...state.dataUser, balance: action.payload}
            }

        default:
            return state

    }
}

export const actionAuth = (payload) => ({
    type: SET_AUTH,
    payload
})
export const actionDataUser = (payload) => ({
    type: SET_DATA_USER,
    payload
})
export const actionMinusCoin = (payload) => ({
    type: SET_MINUS_COIN,
    payload
})
export const actionPlusCoin = (payload) => ({
    type: SET_PLUS_COIN,
    payload
})
