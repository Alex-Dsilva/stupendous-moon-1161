import * as types from "./AppActionTypes";
import axios from "axios";


// getHomenew
const getNew = () => async(dispatch) => {
  dispatch({ type: types.GET_NEW_REQUEST });
  axios.get(`https://victorious-houndstooth-colt.cyclic.app/products?search=newarrival`).then((res) =>{
    console.log(res.data)
    dispatch({ type: types.GET_NEW_SUCCESS, payload:res.data });
  }).catch( (error)=> {
    console.error(error);
    dispatch({type:types.GET_NEW_FAILURE, payload:error.data.message});
    alert(error.data.message)
  });
};

const getbest = () => async(dispatch) => {
  dispatch({ type: types.GET_BEST_REQUEST });
  axios.get(`https://victorious-houndstooth-colt.cyclic.app/products?search=bestselling`).then((res) =>{
    console.log(res.data)
    dispatch({ type: types.GET_BEST_SUCCESS, payload:res.data });
  }).catch( (error)=> {
    console.error(error);
    dispatch({type:types.GET_BEST_FAILURE, payload:error.data});
    alert(error.data)
  });
};

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
    console.log(res.data)
    dispatch({type: types.UPDATE_REVIEWS_SUCCESS, payload: res.data});
  } catch (error) {
    console.error(error);
    dispatch({type: types.UPDATE_REVIEWS_FAILURE, payload: error.response.data.message? error.response.data.message:error.message});
  }
};

const getProductQuestions = (id) => async(dispatch) => {
  dispatch({type:types.GET_QUESTION_REQUEST});
  axios.get(`https://victorious-houndstooth-colt.cyclic.app/question/${id}`).then((res) =>{
    dispatch({type:types.GET_QUESTION_SUCCESS, payload:res.data.question});
  }).catch( (error)=> {
    console.error(error);
    dispatch({type:types.GET_QUESTION_FAILURE, payload:error.data.message});
  });
};


const postProductQuestions = ({id, data}) => async(dispatch) => {
  dispatch({type: types.ADD_QUESTION_REQUEST});
  try {
    const res = await axios.post(`https://victorious-houndstooth-colt.cyclic.app/question/${id}`, data);
    dispatch({type: types.ADD_QUESTION_SUCCESS, payload: res.data.question});
  } catch (error) {
    console.error(error);
    dispatch({type: types.ADD_QUESTION_FAILURE, payload: error.response.data.message});
  }
};



// Cart 

const getCart=(payload)=>async(dispatch)=>{
  dispatch({type: types.REQUEST_GET_CART});
    axios.get(`https://victorious-houndstooth-colt.cyclic.app/cart/cart/${payload}`).then((res) =>{
    console.log("datsdatsdtdksyad",res.data.cart[0].items) 
    dispatch({type:types.SUCCESS_GET_CART, payload:res.data.cart[0].items});
    }).catch( (error)=> {
      console.error(error);
      dispatch({type:types.FAILURE_GET_CART, payload:error.data});
    });
}


const addToCart=(payload)=>async(dispatch)=>{
  console.log(payload)
  dispatch({type: types.REQUEST_ADD_CART});
  try {
    const res = await axios.post(`https://victorious-houndstooth-colt.cyclic.app/cart/add-to-cart/${payload.userId}`, payload.obj);
    console.log(res.data.cart.items)
    dispatch({type: types.SUCCESS_ADD_CART, payload: res.data.cart.items});
  } catch (error) {
    console.error(error);
    dispatch({type: types.FAILURE_ADD_CART, payload: error.response.data.message});
  }
}

const modifyCartQty=(payload)=>async(dispatch)=>{
  dispatch({type: types.REQUEST_MODIFY_ITEM_QUANTITY})
  try {
    const res = await axios.delete(`https://victorious-houndstooth-colt.cyclic.app/cart/${payload.userId}/${payload.id}`, payload.obj)
    dispatch({type: types.SUCCESS_MODIFY_ITEM_QUANTITY, payload: res.data.cart.items});
  } catch (error) {
    console.log(error)
    dispatch({type: types.FAILURE_MODIFY_ITEM_QUANTITY, payload: error.response.data.message});
  }
}

const removeitemCart=(payload)=>async(dispatch)=>{
  dispatch({type: types.REQUEST_REMOVE_CART})
  try {
    const res = await axios.delete(`https://victorious-houndstooth-colt.cyclic.app/cart/${payload.userId}/${payload.id}`)
    dispatch({type: types.SUCCESS_REMOVE_CART, payload: res.data.cart.items});
  } catch (error) {
    console.log(error)
    dispatch({type: types.FAILURE_REMOVE_CART, payload: error.response.data.message});
  }
}

const deleteCart=(payload)=>async(dispatch)=>{
  
}


// Wishlist

const getWishlist=(payload)=>async(dispatch)=>{
  dispatch({type: types.REQUEST_GET_WISHLIST});
  axios.get(`https://victorious-houndstooth-colt.cyclic.app/wishlist/wishlist/${payload}`).then((res) =>{ 
  dispatch({type:types.SUCCESS_GET_WISHLIST, payload:res.data.wishlist});
  }).catch( (error)=> {
    console.error(error);
    dispatch({type:types.FAILURE_GET_WISHLIST, payload:error.data});
  });
}

const addWishlist=(payload)=>async(dispatch)=>{
  
}

const removeWishlist=(payload)=>async(dispatch)=>{
  
}

const deleteWishlist=(payload)=>async(dispatch)=>{
  
}

// Admin

const addProducts=(payload)=>async(dispatch)=>{
  
}

const putProductQuestionAnswer = ({id, data}) => async(dispatch) => {
  dispatch({type: types.ANSWER_QUESTION_REQUEST});
  console.log(id,data)
  try {
    const res = await axios.put(`https://victorious-houndstooth-colt.cyclic.app/question/${id}`, data);
    dispatch({type: types.ANSWER_QUESTION_SUCCESS, payload: res.data.question});
  } catch (error) {
    console.error(error);
    dispatch({type: types.ANSWER_QUESTION_FAILURE, payload: error.response.data.message});
  }
};




export { getProducts, 
  getProductsByID, 
  getNew, getbest, 
  updateProductReviews, 
  getProductReviews,
  postProductReviews, 
  getProductQuestions, 
  postProductQuestions, 
  removeitemCart,
  putProductQuestionAnswer, 
  addToCart, getCart, modifyCartQty, getWishlist};

