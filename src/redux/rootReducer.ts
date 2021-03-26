import {combineReducers} from 'redux';
import storiesReducer from './Stories/stories.reducer';
import commentsReducer from './Comments/comments.reducer';

const rootReducer = combineReducers({
    stories: storiesReducer,
    comments: commentsReducer,
});
export default rootReducer;
