import {
    GET_COMMENTS,
    GET_TOP_COMMENTS,
    SELECT_COMMENT,
    GET_COMMENT,
    CLEAR_COMMENTS,
    LOAD_MORE, GET_REPLIES, GET_REPLY
} from "./comments.types";

const PAGE_SIZE = 10
const INITIAL_STATE = {
    comments: [],
    commentsIds: [],
    replies: [],
    repliesIds: [],
    currentCommentsIds: [],
    selectedComment: {},
    selectedType: '',
    pageSize: 0,
};
const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state, commentsIds: action.payload,
            };
        case GET_COMMENT:
            return {
                ...state, comments: [...state.comments, action.payload],
            };
        case CLEAR_COMMENTS:
            return {...INITIAL_STATE};
        case SELECT_COMMENT:
            return {
                ...state, selectedComment: action.payload,
            };


        case GET_REPLIES:
            return {
                ...state, repliesIds:  [...state.repliesIds, ...action.payload],
            };
        case GET_REPLY:
            return {
                ...state, replies: [...state.replies, action.payload],
            };
        case LOAD_MORE:
            let pageSize = state.pageSize + PAGE_SIZE
            pageSize = pageSize > state.commentsIds.length ? state.commentsIds.length : pageSize
            const addFrom = state.currentCommentsIds.length
            const addTo = pageSize
            return {
                ...state,
                pageSize,
                currentCommentsIds: [...state.currentCommentsIds, ...state.commentsIds.slice(addFrom, addTo)],
            };
        default:
            return state;
    }
};
export default reducer;

