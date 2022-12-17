import React, { useEffect, useState } from "react";
import { getProducts } from "../../redux/App/AppAction";
import { useDispatch, useSelector } from "react-redux";

const Products = ({ title,searchQuery }) => {
  const [page, setPage] = useState(1);
  const { Appreducer } = useSelector(store => store);
  const { products } = Appreducer;
  console.log(products);
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

  return (
    <div>
      <h1>
        {title}
      </h1>
      <div className="product">
        {products.length > 0 &&
          products.map(ele =>
            <div key={ele.product_id} className="product1">
              <img src={ele.product_main_image_url} alt="" />
              <p>
                {ele.product_title}
              </p>
              <p>
                {ele.original_price===null?"₹249":ele.original_price}
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
