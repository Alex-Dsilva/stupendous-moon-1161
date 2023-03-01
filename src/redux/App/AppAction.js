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
  console.log(`${new URLSearchParams(options).toString()}, from get`)
  axios.get(`http://localhost:6351/products?${new URLSearchParams(options).toString()}`).then((res) =>{
    console.log(res.data)
    dispatch(getProductsSuccess(res.data));
  }).catch( (error)=> {
    console.error(error);
    alert(error.data.message)
  });
};
// getproducts by id
const getProductsByID = (options) => async(dispatch) => {
  dispatch(getProductsRequest());
  axios.request(options).then(function (response) {
    console.log(response.data)
    dispatch(getProductsSuccess(response.data));
  }).catch(function (error) {
    console.error(error);
  });
};


const addToCart=(payload)=>async(dispatch)=>{
  
}


export { getTodayDeals ,getProducts,getProductsByID, addToCart};

