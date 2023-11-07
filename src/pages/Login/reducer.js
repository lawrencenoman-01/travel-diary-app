import { produce } from "immer";
import {
    // LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    RESET_LOGIN,
} from "./constants";

export const initialState = {
    user: null,
    error: null,
};

const loginReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case RESET_LOGIN:
                draft.user = null;
                draft.error = null;
                break;

            case LOGIN_SUCCESS:
                draft.user = action.payload;
                draft.error = null;
                break;

            case LOGIN_FAILURE:
                draft.user = null;
                draft.error = action.payload;
                break;
        }
    });

export default loginReducer;