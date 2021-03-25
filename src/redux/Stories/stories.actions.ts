import {
    CLEAR_STORIES,
    GET_NEW_STORIES,
    GET_STORY,
    GET_TOP_STORIES,
    LOAD_MORE,
    SELECT_STORY,
    SELECT_TYPE
} from './stories.types';
import hackerNewsApi from "../../apis/hacker-news.api";


export const selectType = (type: string) => {
    // console.log(selectType)
    return {type: SELECT_TYPE, payload: type};
}
export const selectStory = (story: any) => {
    return {type: SELECT_STORY, payload: story};
}
export const clearStories = () => {
    return {type: CLEAR_STORIES};
}
export const loadMore = () => {
    return {type: LOAD_MORE};
}
export const getStory = (id: string) => async (dispatch: any) => {
    const response = await hackerNewsApi.get(`/item/${id}.json`);
    dispatch({type: GET_STORY, payload: response.data});
}

export const getNewStories = () => async (dispatch: any) => {
    const response = await hackerNewsApi.get("/newstories.json");
    dispatch({type: GET_NEW_STORIES, payload: response.data});
}
export const getTopStories = () => async (dispatch: any) => {
    const response = await hackerNewsApi.get("/topstories.json");
    dispatch({type: GET_TOP_STORIES, payload: response.data});
}
