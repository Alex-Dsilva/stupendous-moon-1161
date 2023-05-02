import * as types from "./AuthActionTypes";

const initialState = {
  name: null, //For displaying the login user name
  userId: null, //Can be user Email,Mobile Number
  phoneNumber: null, //required for order place
  address: {
    line1: null,
    line2: null,
    city: null,
    zipcode: null,
  },
  isError: false,
  AuthLoading: false,
};


const Authreducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload)
  switch (type) {
   
    case types.UPDATE_ADDRESS:
      const { name, phoneNumber, zipcode, line1, line2, city } = payload;
      return {
        ...state,
        name: name,
        phoneNumber: phoneNumber,
        address: {
          zipcode: zipcode,
          line1: line1,
          city: city,
          line2: line2,
        },
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        name: null,
        userId: null,
        phoneNumber: null,
        address: null,
        AuthLoading: false,
        isError: false
      };
    case types.LOGIN_REQUEST:
      return { ...state, AuthLoading: true };
    case types.LOGIN_SUCCESS:
      const { address: getAddress = null, phoneNumber: getPhoneNumber = null } = payload;
      return {
        ...state,
        name: payload.name,
        userId: payload.userId,
        phoneNumber: getPhoneNumber,
        address: getAddress,
        AuthLoading: false
      };
    case types.LOGIN_FAILURE:
      return { ...state, isError: true };
    case types.GOOGLE_LOGIN_REQUEST:
      return {...state, AuthLoading:true}
    case types.GOOGLE_LOGIN_SUCCESS:
      const {address:getGoogleAddress}=payload;
      return {...state, name: payload.displayName, userId: payload.uid, mobile_number:payload.phone, address:getGoogleAddress, isLoading:false}
    case types.GOOGLE_LOGIN_FAILURE:
      return {...state, AuthLoading:true}
    case types.SIGN_UP_REQUEST:
      return {...state, AuthLoading:true};
    case types.SIGN_UP_SUCCESS:
      return {...state, AuthLoading:false,name: payload.name, userId: payload.userId}
    case types.SIGN_UP_FAILURE:
      return {...state, AuthLoading:false,isError: true}

    default:
      return state;
  }
};

export {Authreducer}