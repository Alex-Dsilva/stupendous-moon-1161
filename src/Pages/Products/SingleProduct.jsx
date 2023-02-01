import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByID } from "../../redux/App/AppAction";

export const SingleProduct = () => {
  const {product, auth } = useSelector(store => store);
  const { products ,isLoading, } = product;
  const {cart, userId, AuthLoading}=auth
  //   console.log(Appreducer);
//   const { products, isLoading } = Appreducer;
  console.log(Appreducer);
  const dispatch = useDispatch();
  const options = {
    method: "GET",
    url: "https://amazon24.p.rapidapi.com/api/product/B0B9N6HV6B",
    params: { country: "US" },
    headers: {
      "X-RapidAPI-Key": "5c29c0f5dcmsh221befa5b77990fp148730jsna14c92afa3c0",
      "X-RapidAPI-Host": "amazon24.p.rapidapi.com"
    }
  };
  
  useEffect(()=>{
    dispatch(getProductsByID(options))
  },[])

  return (
    <div>SingleProduct</div>
  );
};
