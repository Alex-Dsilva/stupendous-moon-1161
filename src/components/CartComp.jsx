import React from 'react'
import styled from 'styled-components'


// const product =[
//   {isBestSeller:false,
//     product_title:"Apple iPhone XR, 64GB, Black - Unlocked (Renewed)",
//     product_main_image_url:"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/717KHGCJ6eL._AC_UY218_.jpg",
//     app_sale_price:"224.00",
//     app_sale_price_currency:"$",
//     isPrime:false,
//     product_detail_url:"https://www.amazon.com/dp/B07P6Y7954",
//     product_id:"B07P6Y7954",
//     evaluate_rate:"4.5 out of 5 stars",
//     original_price:null
//   },
//   {isBestSeller:false,
//     product_title:"Apple iPhone XR, 64GB, Black - Unlocked (Renewed)",
//     product_main_image_url:"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/717KHGCJ6eL._AC_UY218_.jpg",
//     app_sale_price:"224.00",
//     app_sale_price_currency:"$",
//     isPrime:false,
//     product_detail_url:"https://www.amazon.com/dp/B07P6Y7954",
//     product_id:"B07P6Y7954",
//     evaluate_rate:"4.5 out of 5 stars",
//     original_price:null
//   },
//   {isBestSeller:false,
//     product_title:"Apple iPhone XR, 64GB, Black - Unlocked (Renewed)",
//     product_main_image_url:"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/717KHGCJ6eL._AC_UY218_.jpg",
//     app_sale_price:"224.00",
//     app_sale_price_currency:"$",
//     isPrime:false,
//     product_detail_url:"https://www.amazon.com/dp/B07P6Y7954",
//     product_id:"B07P6Y7954",
//     evaluate_rate:"4.5 out of 5 stars",
//     original_price:null
//   },
// ]
function CartComp({items, onAdd, onRemove, onDelete}) {
  return (
    <div >
      <Box>
        <Flex>
          <img src={items.product_main_image_url.stringValue} alt={items.product_title} />
          <p>{items.product_title.stringValue}</p> 
          <h4>{items.app_sale_price_currency.stringValue+" "+(items.app_sale_price.stringValue*items.qty)}</h4>
            <Qtycon >
              <button onClick={() => onRemove(items)} className="remove">
                -
              </button>
              <Box>{items.qty}</Box>
              <button onClick={() => onAdd(items)} className="add">
                +
              </button>
            </Qtycon>
            <h4>{items.app_sale_price_currency.stringValue+" "+(items.app_sale_price.stringValue)}</h4>

            <button onClick={()=> onDelete(items)}> Remove From the Cart</button>
            
        </Flex>
      
      </Box>
      
    </div>
  )
}

export default CartComp



const Box=styled.div`
  border: 1px solid rgb(209, 209, 209);

`

const Flex=styled.div`
  display: flex;
  justify-content:space-around;
  align-items: center;
  padding: 20px;
  >button{
        background-color: #06f;
        color: #fff;
        vertical-align: middle;
        border: none;
        padding: 10px;
        font-size: 15px;
        font-weight: 400;
        border-radius: 4px;
    }
  >img{
    height: 140px;
  }
  > p{
    width: 35%;
  }
`
const Qtycon=styled.div`
  display: flex;
  width: fit-content;
  >button{
    width: 30px;
    height: 30px;
    line-height: 32px;
    cursor: pointer;
    color: #333;
    font-size: 18px;
    display: flex;
    justify-content:center;
    align-items: center;
    display: inline-block;
    border: 1px solid #e9e9e9;
  }
  >div{
    width: 66px;
    display: flex;
    justify-content:center;
    align-items: center;
    border: 1px solid #e9e9e9;
    text-align: center;
  }
`