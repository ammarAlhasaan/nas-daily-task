import {GET_NEW_STORIES, GET_TOP_STORIES, SELECT_STORY, SELECT_TYPE, GET_STORY, CLEAR_STORIES} from "./stories.types";

const INITIAL_STATE = {
    stories: [],
    storiesIds: [],
    selectedStory: {},
    selectedType: ''
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
        default:
            return state;
    }
};
export default reducer;

