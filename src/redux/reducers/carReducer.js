const SET_CAR = 'SET_CAR'

const initialState = {
    carItem: {}
}

export const carReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CAR:
            return {
                ...state, carItem: action.payload
            }
        
        default:
            return state

    }
}

export const actionCar = (payload) => ({
    type: SET_CAR,
    payload
})