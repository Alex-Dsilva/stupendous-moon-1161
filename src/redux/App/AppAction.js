import * as types from "./AppActionTypes";
import axios from "axios";


// getptoducts
const getProducts = (options) => async(dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  axios.get(`https://victorious-houndstooth-colt.cyclic.app/products?${new URLSearchParams(options).toString()}`).then((res) =>{
    console.log(res.data)
    dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload:res.data });
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
  });
};



// const getProductReviews = (id) => async(dispatch) => {
//   dispatch({type:types.GET_REVIEWS_REQUEST});
//   axios.get(`https://victorious-houndstooth-colt.cyclic.app/products/productReviews/${id}`).then((res) =>{
//     dispatch({type:types.GET_REVIEWS_SUCCESS, payload:res.data.data});
//   }).catch( (error)=> {
//     console.error(error);
//     dispatch({type:types.GET_REVIEWS_FAILURE, payload:error.data.message});
//     alert(error.data.message)
//   });
// };

const getProductReviews = (id) => async(dispatch) => {
    dispatch({type:types.GET_REVIEWS_REQUEST});
    axios.get(`https://victorious-houndstooth-colt.cyclic.app/review/${id}`).then((res) =>{
      dispatch({type:types.GET_REVIEWS_SUCCESS, payload:res.data});
    }).catch( (error)=> {
      console.error(error);
      dispatch({type:types.GET_REVIEWS_FAILURE, payload:error.data.message});
    });
};

const postProductReviews = ({id, data}) => async(dispatch) => {
  dispatch({type: types.ADD_REVIEWS_REQUEST});
  try {
    const res = await axios.post(`https://victorious-houndstooth-colt.cyclic.app/review/${id}`, data);
    dispatch({type: types.ADD_REVIEWS_SUCCESS, payload: res.data.review});
  } catch (error) {
    console.error(error);
    dispatch({type: types.ADD_REVIEWS_FAILURE, payload: error.response.data.message});
  }
};

const updateProductReviews = ({id, data}) => async (dispatch) => {
  dispatch({type: types.UPDATE_REVIEWS_REQUEST});
  try {
    const res = await axios.put(`https://victorious-houndstooth-colt.cyclic.app/review/like-dislike/${id}`, data);
    dispatch({type: types.UPDATE_REVIEWS_SUCCESS, payload: res.data});
  } catch (error) {
    console.error(error);
    dispatch({type: types.UPDATE_REVIEWS_FAILURE, payload: error.response.data.message? error.response.data.message:error.message});
  }
};

const addToCart=(payload)=>async(dispatch)=>{
  
}


export { getProducts,getProductsByID, updateProductReviews, getProductReviews,postProductReviews, addToCart};

