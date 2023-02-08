import {
    legacy_createStore,
    applyMiddleware,
    compose,
    combineReducers,
  } from "redux";
  import { Authreducer } from "./Auth/AuthReducer";
  import { Appreducer } from "./App/AppReducer";
import thunk from "redux-thunk";
import CartReducer from "./Cart/CartReducer";
  
  const rootReducer = combineReducers({
    auth: Authreducer,
    product: Appreducer,
    cart:CartReducer
  }
    );
  // const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose;
  
  export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));