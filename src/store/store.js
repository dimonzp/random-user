import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./users/reducer";

const reducers = combineReducers({
  usersPage: usersReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
