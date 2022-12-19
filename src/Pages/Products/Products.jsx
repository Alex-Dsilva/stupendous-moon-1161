import React, { useEffect, useState } from "react";
import { getProducts } from "../../redux/App/AppAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Products = ({ title,searchQuery }) => {
  const { Appreducer, Authreducer } = useSelector(store => store);
  const { products ,isLoading} = Appreducer;

  const dispatch = useDispatch();
  const options = {
    method: 'GET',
    url: 'https://amazon24.p.rapidapi.com/api/product',
    params: {categoryID: 'aps', keyword:searchQuery, country: 'IN', page: '1'},
    headers: {
      'X-RapidAPI-Key': '5c29c0f5dcmsh221befa5b77990fp148730jsna14c92afa3c0',
      'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
    }
  };

  const HandleAddToCart=(el)=>{
    const {cart}=Authreducer
    console.log(cart)
    cart.push(el)
    console.log("cart", cart)
  }

  useEffect(() => {
    dispatch(getProducts(options));
  }, [searchQuery]);

  if (isLoading) {
    return (
      <div className="loading">
      </div>
    );
  }


  return (
    <div>
      <h1>
        {title}
      </h1>
      <div className="product">
        {products.length > 0 &&
          products.map((ele,index) =>
            <div key={index} className="product1">
              <div id="imgdiv" ><img style={{height:"120px"}} src={ele.product_main_image_url} alt={ele.product_title} /></div>
              <p>
                {ele.product_title}
              </p>
              <h2 className="Price">
              ₹{ele.app_sale_price===null?"249":ele.app_sale_price }      
              </h2>
              <p>
              <s>{ele.original_price===null?"₹249":ele.original_price}</s>

              </p>
              <button className="rating" disabled>
                {ele.evaluate_rate !== null ? ele.evaluate_rate : "No Reviews"}
              </button>
              <button onClick={()=> HandleAddToCart(ele.product_id)} className="cart">Add To Cart</button>
            </div>
          )}
      </div>
    </div>
  );
};

export default Products;
