import {
    GET_NEW_STORIES,
    GET_TOP_STORIES,
    SELECT_STORY,
    SELECT_TYPE,
    GET_STORY,
    CLEAR_STORIES,
    LOAD_MORE
} from "./stories.types";

const PAGE_SIZE = 10
const INITIAL_STATE = {
    stories: [],
    storiesIds: [],
    currentStoriesIds: [],
    selectedStory: {},
    selectedType: '',
    pageSize: 0,
};
const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case GET_STORY:
            return {
                ...state, stories: [...state.stories, action.payload],
            };
        case CLEAR_STORIES:
            return {...INITIAL_STATE, selectedType: state.selectedType};
        case GET_NEW_STORIES:
            return {
                ...state, storiesIds: action.payload,
            };
        case GET_TOP_STORIES:
            return {
                ...state, storiesIds: action.payload,
            };
        case SELECT_STORY:
            return {
                ...state, selectedStory: action.payload,
            };
        case SELECT_TYPE:
            return {
                ...state, selectedType: action.payload,
            };
        case LOAD_MORE:
            let pageSize = state.pageSize + PAGE_SIZE
            pageSize = pageSize > state.storiesIds.length ? state.storiesIds.length : pageSize
            const addFrom = state.currentStoriesIds.length
            const addTo = pageSize
            return {
                ...state,
                pageSize,
                currentStoriesIds: [...state.currentStoriesIds, ...state.storiesIds.slice(addFrom, addTo)],
            };
        default:
            return state;
    }
};
export default reducer;

