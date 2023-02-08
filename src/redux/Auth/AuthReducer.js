import * as types from "./AuthActionTypes";

const initialState = {
  name: null, //For displaying the login user name
  userId: null, //Can be user Email,Mobile Number
  mobile_number: null, //required for order place
  cart: [], //Array of objects products->(image,brand,title,price,MRP,size,qty=1)
  address: {
    pincode: null,
    locality: null,
    city: null,
    state: null,
  }, //For order placing
  isError: false,
  AuthLoading: false,
};

//set Default item Quantity as 1;
initialState.cart.map((items) => (items["item_quantity"] = 1));
//set Cart item id
initialState.cart.map((items) => (items["id"] = items.product_base_href));

const Authreducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(type)
  switch (type) {
    case types.REMOVE_CART_ITEM:
      const updatedCart = state.cart.filter(
        (item) => item.product_base_href !== payload
      );
      console.log("updatedCart:", updatedCart);
      return { ...state, cart: updatedCart };

    case types.MODIFY_ITEM_QUANTITY:
      const updatedQuantity = state.cart.map((item) => {
        if (item.product_base_href === payload.id) {
          item.item_quantity = payload.quantity;
        }
        return item;
      });
      return { ...state, cart: updatedQuantity };

    case types.MODIFY_ITEM_SIZE:
      const updatedSize = state.cart.map((item) => {
        if (item.product_base_href === payload.id) {
          item.selected_size = payload.size;
        }
        return item;
      });
      return { ...state, cart: updatedSize };

      case types.REQUEST_ADD_CART:
        return { ...state, AuthLoading:true };

    case types.ADD_CART_ITEM:
      const updatedCartList = [...state.cart, payload];
      return { ...state, cart: updatedCartList, AuthLoading:false  };

    case types.REMOVE_WISHLIST_ITEM:
      const newWishList = state.wishlist.filter(
        (item) => item.product_base_href !== payload
      );
      return { ...state, wishlist: newWishList };

    case types.MAKE_CART_EMPTY:
      return { ...state, cart: [] };

    case types.UPDATE_ADDRESS:
      const { name, mobile, pincode, locality, city, state_ut } = payload;
      return {
        ...state,
        name: name,
        mobile_number: mobile,
        address: {
          pincode: pincode,
          locality: locality,
          city: city,
          state: state_ut,
        },
      };

    case "EMAIL_LOGIN_REQUEST":
        return {...state, AuthLoading:true};

    case "EMAIL_LOGIN_SUCCESS":
      const {address:getAddress}=payload;
      return { ...state, name: payload.displayName, userId: payload.uid,cart:payload.bag, mobile_number:payload.phone,address:getAddress, AuthLoading:false  };

    case "EMAIL_LOGIN_FAILURE":
      return {...state, isError:true}

    case "GOOGLE_LOGIN_REQUEST":
      return {...state, AuthLoading:true}

    case "GOOGLE_LOGIN_SUCCESS":
      const {address:getGoogleAddress}=payload;
      return {...state, name: payload.displayName, userId: payload.uid, mobile_number:payload.phone, address:getGoogleAddress, isLoading:false}
    
    case "SIGN_UP_REQUEST":
      return {...state, AuthLoading:true}
    
    case "SIGN_UP_SUCCESS":
      return {...state, AuthLoading:false,name: payload.displayName, userId: payload.uid }
   
    case "SIGN_UP_FAILURE":
      return {...state, AuthLoading:false,isError: true}
    
    default:
      return state;
  }
};

export {Authreducer}