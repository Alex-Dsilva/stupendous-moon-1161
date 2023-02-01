import React, { useEffect, useState } from "react";
import { getProducts } from "../../redux/App/AppAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { doc, , setDoc } from "firebase/firestore";
import { doc, updateDoc, getDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { app, db } from "../../config/firebaseConfig"
import { RequestToCart, addToCart, FailToCart } from "../../redux/Auth/AuthAction";


const Products = ({ title,searchQuery }) => {
  const {product, auth } = useSelector(store => store);
  const { products ,isLoading, } = product;
  const {cart, userId, AuthLoading}=auth
  console.log(auth)  
  const dispatch = useDispatch();
  const options = {
    method: 'GET',
    url: 'https://amazon23.p.rapidapi.com/product-search',
    params: {query: searchQuery , country: 'IN'},
    headers: {
      'X-RapidAPI-Key': '5c29c0f5dcmsh221befa5b77990fp148730jsna14c92afa3c0',
      'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
    }
  };

  const HandleAddToCart=(el)=>{
    console.log(el)
    el=el.qty=1
    console.log(el)
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
    console.log(options)
    dispatch(getProducts(options));
  }, [searchQuery]);

  if (isLoading ) {
    return (
      <div className="loading">
      </div>
    );
  }


  return (
    <div id="pro">
      <h1 className="title">
        {title}
      </h1>
      <div className="product">
        {products && products.length > 0 &&
          products.map((ele,index) =>
            <div key={index} className="product1">
              <div id="imgdiv" ><img style={{height:"120px"}} src={ele.thumbnail} alt={ele.title} /></div>
              <p>
                {ele.title}
              </p>
              <h2 className="Price">
              ₹{ele.price.current_price===null?"249":ele.price.current_price }      
              </h2>
              <p>
              <s>{ele.price.before_price===null?"₹1249":ele.price.before_price}</s>

              </p>
              <button className="rating" disabled>
                {ele.reviews.rating !== null ? ele.reviews.rating  : "No Reviews"}
              </button>
              <button onClick={()=> HandleAddToCart(ele)} className="cart">Add To Cart</button>
            </div>
          )}
      </div>
    </div>
  );
};

export default Products;
