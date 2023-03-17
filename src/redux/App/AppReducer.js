import * as types from "./AppActionTypes"

const initialData = {
    isLoading : false,
    searchQuery:"",
    errorMsg:"",
    singleproduct:null,
    products : [],
    reviews:[],
    wishlist:[],
    carts: [],
    isError : false
}




const Appreducer = ( State = initialData,action )=>{
    console.log( "products reducer", action);
    const {type,payload} = action;

    console.log(type)

    switch(type){
        case types.GET_PRODUCTS_REQUEST :
            return {...State, isLoading : true,isError : false }
        case types.GET_PRODUCTS_SUCCESS : 
            return { ...State, isLoading: false, isError: false,products : payload };
        case types.GET_PRODUCTS_FAILURE :
            return { ...State, isLoading: false, errorMsg: payload, isError: true};
        case types.GET_SINGLE_PRODUCTS_REQUEST:
            return {...State, isLoading : true,isError : false }
        case types.GET_SINGLE_PRODUCTS_SUCCESS:
            return { ...State, isLoading: false, isError: false, singleproduct : payload };
        case types.GET_SINGLE_PRODUCTS_FAILURE:
            return { ...State, isLoading: false, errorMsg: payload, isError: true};
        case types.GET_REVIEWS_REQUEST:
            return {...State, isLoading : true,isError : false }
        case types.GET_REVIEWS_SUCCESS:
            return { ...State, isLoading: false, isError: false, reviews : payload };
        case types.GET_REVIEWS_SUCCESS:
            return { ...State, isLoading: false, errorMsg: payload, isError: true};
        case types.ADD_REVIEWS_REQUEST:
            return {...State, isLoading : true,isError : false }
        case types.ADD_REVIEWS_SUCCESS:
            return { ...State, isLoading: false, isError: false, reviews: [...State.reviews, payload] };
        case types.ADD_REVIEWS_FAILURE:
            return { ...State, isLoading: false, errorMsg: payload, isError: true};
        case types.UPDATE_REVIEWS_REQUEST:
            return {...State, isLoading : true,isError : false }
        case types.UPDATE_REVIEWS_SUCCESS:
            const updatedReviewIndex = State.reviews.findIndex((review) => review.id === payload.id);
            const updatedReviews = [...State.reviews];
            updatedReviews[updatedReviewIndex] = payload;
            return { ...State, isLoading: false, isError: false, reviews: updatedReviews };
        case types.UPDATE_REVIEWS_FAILURE:
            return { ...State, isLoading: false, errorMsg: payload, isError: true};
        default : 
        return State        

    }


}
export {Appreducer}