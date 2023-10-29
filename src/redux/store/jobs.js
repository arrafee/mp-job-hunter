import { applyMiddleware, combineReducers, createStore } from "redux";
import jobsReducer from "../reducers/jobs";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  jobs: jobsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
