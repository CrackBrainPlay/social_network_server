import { applyMiddleware, combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import sideReducer from './sideReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import { thunk } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sideBar: sideReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;