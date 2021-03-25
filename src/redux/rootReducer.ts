import {combineReducers} from 'redux';
import storiesReducer from './Stories/stories.reducer';

const rootReducer = combineReducers({
    stories: storiesReducer
});
export default rootReducer;
