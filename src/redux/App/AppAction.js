import * as types from "./AppActionTypes";
import axios from "axios";

let getProductsRequest = () => {
  return { type: types.GET_PRODUCTS_REQUEST };
};

let getProductsSuccess = (payload) => {
  return { type: types.GET_PRODUCTS_SUCCESS, payload };
};

let getProductsFailure = () => {
  return { type: types.GET_PRODUCTS_FAILURE };
};
//today deals api
const getTodayDeals = (options) => async(dispatch) => {
  dispatch(getProductsRequest());
  axios.request(options).then(function (response) {
    console.log(response.data)
    dispatch(getProductsSuccess(response.data.docs));
  }).catch(function (error) {
    console.error(error);
    alert(error.response.data.message)
  });
};

// getptoducts
const getProducts = (options) => async(dispatch) => {
  dispatch(getProductsRequest());
  // console.log(`${new URLSearchParams(options).toString()}, from get`)
  axios.get(`https://victorious-houndstooth-colt.cyclic.app/products?${new URLSearchParams(options).toString()}`).then((res) =>{
    console.log(res.data)
    dispatch(getProductsSuccess(res.data));
  }).catch( (error)=> {
    console.error(error);
    dispatch({type:types.GET_SINGLE_PRODUCTS_FAILURE, payload:error.data.message});
    alert(error.data.message)
  });
};
// getproducts by id
const getProductsByID = (id) => async(dispatch) => {
  dispatch({type:types.GET_SINGLE_PRODUCTS_REQUEST});
  axios.get(`https://victorious-houndstooth-colt.cyclic.app/products/singleProduct/${id}`).then((res) =>{
    dispatch({type:types.GET_SINGLE_PRODUCTS_SUCCESS, payload:res.data.data});
  }).catch( (error)=> {
    console.error(error);
    dispatch({type:types.GET_SINGLE_PRODUCTS_FAILURE, payload:error.data.message});
    alert(error.data.message)
  });
};

const getProductReviews = (id) => async(dispatch) => {
  dispatch({type:types.GET_SINGLE_PRODUCTS_REQUEST});
  axios.get(`https://victorious-houndstooth-colt.cyclic.app/products/productReviews/${id}`).then((res) =>{
    dispatch({type:types.GET_SINGLE_PRODUCTS_SUCCESS, payload:res.data.data});
  }).catch( (error)=> {
    console.error(error);
    dispatch({type:types.GET_SINGLE_PRODUCTS_FAILURE, payload:error.data.message});
    alert(error.data.message)
  });
};

const addToCart=(payload)=>async(dispatch)=>{
  
}


export { getTodayDeals ,getProducts,getProductsByID, addToCart};

