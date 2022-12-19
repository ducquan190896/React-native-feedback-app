import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import FeedbackReducer from "./reducers/FeedbackReducer";

const initialState ={};
const rootReducers = combineReducers({
    FB: FeedbackReducer
});

const middleware = [thunk]
const store = createStore(
    rootReducers, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;