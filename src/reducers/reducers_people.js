import { FETCH_PEOPLEDATA } from "../actions/index";

export default function(state= [], action) {
    console.log('Action is here:',action);
    switch(action.type){
        case FETCH_PEOPLEDATA:
            
            return ([action.payload.data, ...state])
    }
    return state;
}