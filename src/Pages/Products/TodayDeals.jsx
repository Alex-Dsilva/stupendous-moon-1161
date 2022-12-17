import React, { useEffect, useState } from "react";
import "./Products.css";
import { getProducts, getTodayDeals } from "../../redux/App/AppAction";
import { useDispatch, useSelector } from "react-redux";
const TodayDeals = ({ title }) => {
  const {Appreducer}=useSelector((store)=>store);
  const {products}=Appreducer
  console.log(products);
  const dispatch=useDispatch()

  const options = {
    method: 'GET',
    url: 'https://amazon24.p.rapidapi.com/api/todaydeals',
    headers: {
      'X-RapidAPI-Key': '191cfb01c9mshabc871ac0ebaa17p1b1493jsn024c4f6cba86',
      'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
    }
  };

  useEffect(() => {
    dispatch(getTodayDeals(options))
  }, []);

  return (
    <div>
      <h1>
        {title}
      </h1>
      <div className="product">
        {products.length > 0 &&
          products.map(ele =>
            <div key={ele.product_id} className="product1">
              <img src={ele.deal_main_image_url} alt="" />
              <p>
                {ele.deal_title}
              </p>
              <p>
                $ {ele.app_sale_range.max}
              </p>
              {/* <button className="rating" disabled>
                {ele.evaluate_rate}
              </button> */}
              <button onClick={(e)=>(e.target.innerHTML==="Added to Cart")} className="cart">Add To Cart</button>
            </div>
          )}
      </div>
    </div>
  );
};

export default TodayDeals;
