import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    //applyMiddleware(...middleware) // desactivar Redux DevTools Extension
    composeWithDevTools(applyMiddleware(...middleware)) // activar Redux DevTools Extension
)

export default store;