import {
    legacy_createStore,
    applyMiddleware,
    compose,
    combineReducers,
  } from "redux";
  import { Authreducer } from "./Auth/AuthReducer";
  import { Appreducer } from "./App/AppReducer";
import thunk from "redux-thunk";
  
  const rootReducer = combineReducers({
    auth: Authreducer,
    product: Appreducer
  }
    );
  // const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose;
  
  export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));