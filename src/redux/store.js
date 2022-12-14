import {
    legacy_createStore,
    applyMiddleware,
    compose,
    combineReducers,
  } from "redux";
  import thunk from "redux-thunk";
  import { Authreducer } from "./Auth/AuthReducer";
  import { Appreducer } from "./App/AppReducer";
  
  const rootReducer = combineReducers({ Authreducer, Appreducer });
  const composeEnhancers =(typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||compose;
  
  export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));