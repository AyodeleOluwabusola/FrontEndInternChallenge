import { combineReducers } from 'redux';
import PeopleReducer from './reducers_people';



const rootReducer = combineReducers({
   people: PeopleReducer,
});

export default rootReducer;
