import { combineReducers } from 'redux';

//reducers
import users from './users';

const Reducers = combineReducers({
    users: users
});

export default Reducers;