import React, { useEffect, useState } from "react";
import { getProducts } from "../../redux/App/AppAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Products = ({ title, searchQuery }) => {
  const { Appreducer } = useSelector(store => store);
  //   console.log(Appreducer);
  const navigate=useNavigate();
  const { products ,isLoading } = Appreducer;
  console.log(Appreducer)
  const dispatch = useDispatch();
  const options = {
    method: "GET",
    url: "https://amazon24.p.rapidapi.com/api/product",
    params: {
      categoryID: "aps",
      keyword: searchQuery,
      country: "IN",
      page: "1"
    },
    headers: {
      "X-RapidAPI-Key": "191cfb01c9mshabc871ac0ebaa17p1b1493jsn024c4f6cba86",
      "X-RapidAPI-Host": "amazon24.p.rapidapi.com"
    }
  };

  useEffect(() => {
    dispatch(getProducts(options));
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
      </div>
    );
  }

  const handleNavigate=(id)=>{
    navigate(`/${id}`)
  }

  return (
    <div>
      <h1>
        {title}
      </h1>
      <div className="product">
        {products.length > 0 &&
          products.map(ele =>
            <div onClick={()=>handleNavigate(ele.product_id)} key={ele.product_id} className="product1">
              <img src={ele.product_main_image_url} alt="" />
              <p>
                {ele.product_title}
              </p>
              <p>
                {ele.original_price === null ? "₹249" : ele.original_price}
              </p>
              <button className="rating" disabled>
                {ele.evaluate_rate !== null ? ele.evaluate_rate : "No Reviews"}
              </button>
              <button className="cart">Add To Cart</button>
            </div>
          )}
      </div>
    </div>
  );
};

export default Products;
