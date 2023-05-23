import { COBA } from "../actions/types";

const initialState = {
    profile : [],
    loading : false
}

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type){
        case COBA:
            console.log('coba')
            return {
                ...state,
                profile: payload,
            }
        default:
            return state
    }
}