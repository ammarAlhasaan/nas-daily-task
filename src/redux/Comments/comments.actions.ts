import {
    GET_COMMENTS,
    GET_COMMENT,
} from './comments.types';
import hackerNewsApi from "../../apis/hacker-news.api";


export const getComment = (id: string) => async (dispatch: any) => {
    const response = await hackerNewsApi.get(`/item/${id}.json`);
    dispatch({type: GET_COMMENT, payload: response.data});
}
export const getComments = (comments: []) => async (dispatch: any) => {
    dispatch({type: GET_COMMENTS, payload: comments});
}
