import React, { useEffect, useState } from "react";
import { getProducts } from "../../redux/App/AppAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { doc, , setDoc } from "firebase/firestore";
import { doc, updateDoc, getDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { app, db } from "../../config/firebaseConfig"
import { RequestToCart, addToCart, FailToCart } from "../../redux/Auth/AuthAction";


const Products = ({ title,searchQuery }) => {
  const { Appreducer, Authreducer } = useSelector(store => store);
  const { products ,isLoading, } = Appreducer;
  const {cart, userId, AuthLoading}=Authreducer
  console.log(cart)
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
    console.log(el)
    // el=el.qty=1
    // console.log(el)
    dispatch(RequestToCart())
    updateDoc(doc(db, "users", `${userId}`), {
      bag: arrayUnion(el)
  })
      .then(()=>{
      const query = doc(db,"users", `${userId}`)
      getDoc(query)
      .then((res)=> {

        const {bag}={
            bag:res._document.data.value.mapValue.fields.bag.arrayValue.values,
        }
        dispatch(addToCart(bag))
      })
      
      .catch((err)=> alert(err.message)) 
    }).catch((err) =>{
      dispatch(FailToCart())
      alert(err.message)
     });
  }

  useEffect(() => {
    dispatch(getProducts(options));
  }, [searchQuery]);

  if (isLoading || AuthLoading) {
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
              <button onClick={()=> HandleAddToCart(ele)} className="cart">Add To Cart</button>
            </div>
          )}
      </div>
    </div>
  );
};

export default Products;
