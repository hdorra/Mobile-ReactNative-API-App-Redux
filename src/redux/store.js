import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import articlesReducer from './reducers/articlesReducer';

const rootReducer = combineReducers({
    artifact: articlesReducer
});

const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer,middleware);