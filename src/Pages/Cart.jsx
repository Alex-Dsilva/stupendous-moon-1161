import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import  CartComp from '../components/CartComp'
import {BiChevronRight} from 'react-icons/bi'
// import { doc, , setDoc } from "firebase/firestore";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

// const product =[
//     {isBestSeller:false,
//       product_title:"Apple iPhone XR, 64GB, Black - Unlocked (Renewed)",
//       product_main_image_url:"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/717KHGCJ6eL._AC_UY218_.jpg",
//       app_sale_price:"224.00",
//       app_sale_price_currency:"$",
//       isPrime:false,
//       product_detail_url:"https://www.amazon.com/dp/B07P6Y7954",
//       product_id:"B07P6Y7956",
//       evaluate_rate:"4.5 out of 5 stars",
//       original_price:null,
//       qty:2
//     },
//     {isBestSeller:false,
//       product_title:"Apple  Black - Unlocked (Renewed)",
//       product_main_image_url:"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/717KHGCJ6eL._AC_UY218_.jpg",
//       app_sale_price:"224.00",
//       app_sale_price_currency:"$",
//       isPrime:false,
//       product_detail_url:"https://www.amazon.com/dp/B07P6Y7954",
//       product_id:"B07P6Y7952",
//       evaluate_rate:"4.5 out of 5 stars",
//       original_price:null,
//       qty:1
//     },
//     {isBestSeller:false,
//       product_title:"Apple iPhone XR, 64GB, Black - Unlocked (Renewed)",
//       product_main_image_url:"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/717KHGCJ6eL._AC_UY218_.jpg",
//       app_sale_price:"224.00",
//       app_sale_price_currency:"$",
//       isPrime:false,
//       product_detail_url:"https://www.amazon.com/dp/B07P6Y7954",
//       product_id:"B07P6Y7953",
//       evaluate_rate:"4.5 out of 5 stars",
//       original_price:null,
//       qty:1
//     },
//   ]
function Cart() {

  const {product, auth } = useSelector(store => store);
  const { products ,isLoading, } = product;
  const {cart, userId, AuthLoading}=auth

  if(AuthLoading){
    return (
      <div className="loading">
      </div>
    );
  }
 const Data=cart.map((items)=>  ({ ...items.mapValue.fields, qty:1 }))

    const [cartItems, setCartItems] = useState(Data);



    console.log(cartItems)

    const onAdd = (product) => {
        console.log(product)
        const exist = cartItems.find((x) => x.product_id === product.product_id);
        if (exist) {
          setCartItems(
            cartItems.map((x) =>
              x.product_id === product.product_id ? { ...exist, qty: exist.qty + 1 } : x
            )
          );
        } else {
          setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
      };

      const onDelete=(product) =>{
        const exist = cartItems.find((x) => x.product_id === product.product_id);
        if (exist){
            setCartItems(cartItems.filter((x) => x.product_id !== product.product_id));
        }else{
            alert("Item done not exists in your cart ")
        }
      }

      const onRemove = (product) => {
        const exist = cartItems.find((x) => x.product_id === product.product_id);
        if (exist.qty === 1) {
          setCartItems(cartItems.filter((x) => x.product_id !== product.product_id));
        } else {
          setCartItems(
            cartItems.map((x) =>
              x.product_id=== product.product_id? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
      };

      if (AuthLoading) {
        return (
          <div className="loading">
          </div>
        );
      }

  return (
    <div>
        <Head>
            <h1>Shopping Cart</h1>
        </Head>
        <Listdiv>
        <Headersdiv>
            <h4>Product Name & Detail</h4>
            <h4>Unit Price</h4>
            <h4>Quantity</h4>
            <h4>Total</h4>
        </Headersdiv>
       { cartItems.map((items, index)=>{
            return < CartComp items={items} 
            key={index}
            onAdd={onAdd}
            onRemove={onRemove}
            onDelete={onDelete}/>
            
        })}
        </Listdiv>
        <Paymentdiv>
            <Link to="/product"><p className="ContinueShopping">Continue Shopping <BiChevronRight/></p></Link>
            <h5>You have {cartItems.reduce((a,b)=>a+Number(b.qty),0)} item(s) and your total is {cartItems[0].app_sale_price_currency.stringValue}{cartItems.reduce((a,b)=>a+Number(b.app_sale_price.stringValue*b.qty),0)}</h5>
            <PayWall>
            
            <button id="Pay">Pay with OnPay</button>
            <label for="Pay">The safer, easer way to pay</label>
            </PayWall>
            
            <button>Proceed to checkout</button>
        </Paymentdiv>
    </div>
  )
}

export default Cart

const Head=styled.div`
    text-align: left;
    width: 80%;
    margin: auto;
    margin-top: 20px;
    >h1 {
        text-align: left;
    }
`

const Headersdiv=styled.div`
    display: flex;
    border: 1px solid #e9e9e9;
    align-items: center;
    >h4:first-child{
        width: 40%;
        text-align: left;
        padding-left: 25px;
    }
    >button{
        background-color: #06f;
        font-size: 20px;
        width: 30%;
        color: #fff;
        vertical-align: middle;
        padding-left: 70px;
        padding-right: 70px;
        border: none;
        height: 45px;
        margin-bottom: 20px;
        display: inline-block;
        font-size: 17px;
        font-weight: 700;
        border-radius: 4px;
    }
    >h4:nth-child(2){
        width: 10%;
        text-align: center;
        padding-left: 100px;
    }
    >h4:nth-child(3){
        width: 10%;
        padding-left: 10px;
    }
    >h4:nth-child(4){
        width: 10%;
    }
    .ContinueShopping{
        display: flex;
        text-align:left;
        width: 100%;
        align-items: center;
        padding-left: 25px;
        text-decoration: underline;
        font-size: 15px;
        color: #666666;
        > svg{
            color: #666666;
        }
    }
    >h5{
    width: 35%;
    text-align: center;
    }
`

const Listdiv=styled.div`
    margin-bottom:107px ;
`
const Paymentdiv=styled.div`
    display: flex;
    border: 1px solid #e9e9e9;
    align-items: center;
    position: fixed;
    background-color:#fff;
    width: 100%;
    bottom: 0;
    >h4:first-child{
        width: 40%;
        text-align: left;
        padding-left: 25px;
    }
    >button{
        background-color: #06f;
        font-size: 20px;
        width: 30%;
        color: #fff;
        vertical-align: middle;
        padding-left: 70px;
        padding-right: 70px;
        border: none;
        height: 45px;
        margin-bottom: 20px;
        display: inline-block;
        font-size: 17px;
        font-weight: 700;
        border-radius: 4px;
    }
    >h4:nth-child(2){
        width: 10%;
        text-align: center;
        padding-left: 50px;
    }
    >h4:nth-child(3){
        width: 10%;
        padding-left: 10px;
    }
    >h4:nth-child(4){
        width: 10%;
    }
    .ContinueShopping{
        display: flex;
        text-align:left;
        width: 100%;
        align-items: center;
        padding-left: 25px;
        text-decoration: underline;
        font-size: 15px;
        color: #666666;
        > svg{
            color: #666666;
        }
    }

    >h5{
    width: 35%;
    text-align: center;
    }
`

const PayWall=styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    width: 30%;
    padding-bottom: 20px;
    padding-right: 2%;
    >button{
        background-color: #FFD700;
        border: none;
        width: 100%;
        padding-left: 70px;
        padding-right: 70px;
        font-family: 'Times New Roman', serif;
        height: 45px;
        display: inline-block;
        font-size: 17px;
        font-weight: 700;
        border-radius: 4px;
    }
`