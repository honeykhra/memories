import { combineReducers } from 'redux';

import posts from './posts';

export default combineReducers({

    // this is used for posts(key):posts(value)
    // As both are same we only use posts
    posts,
});