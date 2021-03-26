import {
    CLEAR_COMMENTS,
    GET_COMMENTS,
    GET_COMMENT,
    LOAD_MORE,
    SELECT_COMMENT,
} from './comments.types';
import hackerNewsApi from "../../apis/hacker-news.api";


export const selectComment = (comment: any) => {
    return {type: SELECT_COMMENT, payload: comment};
}
export const clearComments = () => {
    return {type: CLEAR_COMMENTS};
}
export const loadMore = () => {
    return {type: LOAD_MORE};
}
export const getComment = (id: string) => async (dispatch: any) => {
    const response = await hackerNewsApi.get(`/item/${id}.json`);
    dispatch({type: GET_COMMENT, payload: response.data});
}
export const getComments = (comments: []) => async (dispatch: any) => {
    dispatch({type: GET_COMMENTS, payload: comments});
}
