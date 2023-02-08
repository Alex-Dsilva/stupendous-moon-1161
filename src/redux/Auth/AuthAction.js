import * as types from "./AuthActionTypes";

export const requestremovecart = (payload) => {
  return {type: types.REQUEST_REMOVE_CART};
};
export const successremovecart = (payload) => {
  return {type: types.SUCCESS_REMOVE_CART ,payload};
};

export const failureremovecart = () => {
  return {type: types.FAILURE_REMOVE_CART};
};



export const modifyItemQuantity = (payload) => {
  return {
    type: types.MODIFY_ITEM_QUANTITY,
    payload,
};
};

export const modifyItemSize = (payload) => {
  return {
    type: types.MODIFY_ITEM_SIZE,
    payload,
  };
};

export const RequestToCart = () => {
  return {type: types.REQUEST_ADD_CART};
};

export const addToCart = (payload) => {
  return {type: types.SUCCESS_ADD_CART,payload};
};

export const FailToCart = () => {
  return {type: types.FAILURE_ADD_CART};
};


export const setCartEmpty = () => {
  return {
    type: types.MAKE_CART_EMPTY,
  };
};

export const updateAddress = (payload) => {
  return {
    type: types.UPDATE_ADDRESS,
    payload,
  };
};


//----------------------- Login Signup actions

export const signuprequest=()=>{
  return { type: types.SIGN_UP_REQUEST}
}

export const signupsuccess=(payload)=>{
  return { type: types.SIGN_UP_SUCCESS, payload}
}

export const signupfailure=()=>{
  return { type: types.SIGN_UP_FAILURE}
}

export const loginrequest = () => {
  return { type: types.EMAIL_LOGIN_REQUEST };
};

export const loginsuccess = (payload) => {
  return { type: types.EMAIL_LOGIN_SUCCESS, payload };
};

export const loginfailure = () => {
  return { type: types.EMAIL_LOGIN_FAILURE };
};

export const googleloginrequest = () => {
  return { type: types.GOOGLE_LOGIN_REQUEST };
};

export const googleloginsuccess = (payload) => {
  return { type: types.GOOGLE_LOGIN_SUCCESS, payload };
};

export const google_login_failure = () => {
  return { type: types.GOOGLE_LOGIN_FAILURE };
};

