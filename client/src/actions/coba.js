import { COBA, PROFILE_ERROR } from "./types"
import axios from "axios";

export const cobaAction = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');

        dispatch({
            type: COBA,
            payload: res.data 
        })
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        })
    }
}
