import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import authReducer from './reducers/auth/index';
import reducers from './reducers';

const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;