import { combineReducers } from 'redux';
import { reducer as users } from 'pages/Users/reducer'; 

export const reducers = combineReducers({
    users
});