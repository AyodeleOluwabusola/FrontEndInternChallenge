import { FETCH_PERSON } from "../actions/index";

//import {FETCH_PEOPLE} from '../actions/index';

export default function (state = [], action) {
    console.log('Action is here:', action);
    switch (action.type) {
        case FETCH_PERSON :

            return ([...state, action.payload.data,])

    }
    return state;
}