import {
    GET_COMMENTS,
    SELECT_COMMENT,
    GET_COMMENT,
} from "./comments.types";

const INITIAL_STATE = {
    comments: [],
    commentsIds: [],
};
const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state, commentsIds: action.payload,
            };
        case GET_COMMENT:
            if (action.payload.type !== 'comment')
                return state
            return {
                ...state, comments: [...state.comments, action.payload],
            };
        case SELECT_COMMENT:
            return {
                ...state, selectedComment: action.payload,
            };
        default:
            return state;
    }
};
export default reducer;

