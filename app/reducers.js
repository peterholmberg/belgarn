import {combineReducers} from 'redux';
import Immutable from 'immutable';

function appState(state = Immutable.Map({
   networkFailed: false,
   networkProgress: false,
   showNavigation: true
}), action = null) {
   switch (action.type) {
      default:
         return state;
   }
}


const rootReducer = combineReducers({
   appState
});

export default rootReducer;