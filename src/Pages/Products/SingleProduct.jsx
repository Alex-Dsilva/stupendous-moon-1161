import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByID } from "../../redux/App/AppAction";

export const SingleProduct = () => {
  const { Appreducer } = useSelector(store => store);
  //   console.log(Appreducer);
//   const { products, isLoading } = Appreducer;
  console.log(Appreducer);
  const dispatch = useDispatch();
  const options = {
    method: "GET",
    url: "https://amazon24.p.rapidapi.com/api/product/B0B9N6HV6B",
    params: { country: "US" },
    headers: {
      "X-RapidAPI-Key": "191cfb01c9mshabc871ac0ebaa17p1b1493jsn024c4f6cba86",
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
