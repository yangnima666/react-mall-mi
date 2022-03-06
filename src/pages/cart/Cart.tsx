import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CartLayout } from "../../component/cartLayout/CartLayout";
import { deleteCart, getCart } from "../../redux/cart/slice";
import { useAppSelector } from "../../redux/hooks";
import './Cart.scss'

const Cart: React.FC = () => {

  
  const list = useAppSelector(s=>s.cart.list)
  const cartTotalPrice = useAppSelector(s=>s.cart.cartTotalPrice)
  const dispatch = useDispatch()
  
  
  const delProduct = (productId:number)=> {
    dispatch(deleteCart(productId))
  }
  useEffect(()=> {
    dispatch(getCart())
    
  },[])
  console.log('productId',list)

  return (
    <CartLayout>
      <div className="cart">
        <div className="wrapper">
          <div className="container">
            <div className="cart-box">
              <ul className="cart-item-head"> {/*v-bind:className="{'checked':allChecked}" @click="toggleAll" */}
                <li className="col-1"><span className="checkbox" ></span>全选</li>
                <li className="col-3">商品名称</li>
                <li className="col-1">单价</li>
                <li className="col-2">数量</li>
                <li className="col-1">小计</li>
                <li className="col-1">操作</li>
              </ul>
              
              <ul className="cart-item-list"> 
              {
                list.map((item:any, index:any)=>(
                  <li className="cart-item" key={`cart-item-${index.toString()}`}>
                  <div className="item-check">{/*v-bind:className="{'checked':item.productSelected}"  @click="updateCart(item)" */}
                    <span className="checkbox" ></span>
                  </div>
                  <div className="item-name">
                    <img src={item.productMainImage} alt="" />{/*{{item.productName + ' , ' + item.productSubtitle}}*/}
                    <span>{item.productName}</span>
                  </div>
                  <div className="item-price">{item.productPrice}</div>
                  <div className="item-num">
                    <div className="num-box">
                      <a href="javascript:;">-</a>
                      <span>{item.quantity}</span>
                      <a href="javascript:;" >+</a>
                    </div>
                  </div>
                  <div className="item-total">{item.productTotalPrice}</div>
                  <div className="item-del" onClick={()=>{delProduct(item.productId)}}></div>
                </li>
                ))
              }
                
              </ul>
            </div>
            <div className="order-wrap clearfix">
              <div className="cart-tip fl">
                <a href="/#/index">继续购物</a>
                共<span>{list.length}</span>件商品，已选择<span>2</span>件
              </div>
              <div className="total fr">
                合计：<span>{cartTotalPrice}</span>元
                <a href="javascript:;" className="btn">去结算</a>
              </div>
            </div>
          </div>
        </div></div>
    </CartLayout>

  )
}
export default Cart