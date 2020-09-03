import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducer";
import Saga from "./saga";

// create store with saga
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(Saga);

export default store;
