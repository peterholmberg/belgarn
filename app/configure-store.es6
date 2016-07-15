import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reduxReset from 'redux-reset';
import rootReducer from './reducers';

const createStoreWithMiddleware = compose(
   applyMiddleware(thunkMiddleware),
)(createStore);

export default function configureStore() {
   return createStoreWithMiddleware(rootReducer);
}