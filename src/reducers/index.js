import { combineReducers } from 'redux';
import PeopleReducer from './reducers_people';

import PersonReducer from './reducer_person';


const rootReducer = combineReducers({
   people: PeopleReducer,
   person:PersonReducer
});

export default rootReducer;
