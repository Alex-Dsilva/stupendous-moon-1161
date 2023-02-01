import * as types from "./AppActionTypes"

const initialData = {
    isLoading : false,
    products : [],
    isError : false
}




const Appreducer = ( State = initialData,action )=>{
    // console.log( "products reducer", action);
    const {type,payload} = action;

    console.log(type)

    switch(type){
        case types.GET_PRODUCTS_REQUEST :
        return {...State, isLoading : true,isError : false }
        case types.GET_PRODUCTS_SUCCESS : 
        return { ...State, isLoading: false, isError: false,products : payload };
        case types.GET_PRODUCTS_FAILURE :
            return { ...State, isLoading: false, isError: true };
        default : 
        return State        

    }


}
export {Appreducer}