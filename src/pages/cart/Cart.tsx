import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CartLayout } from "../../component/cartLayout/CartLayout";
import { deleteCart, getCart } from "../../redux/cart/slice";
import { useAppSelector } from "../../redux/hooks";
import './Cart.scss'

const Cart: React.FC = () => {


  const list = useAppSelector(s => s.cart.list)//获取购物车列表
  const cartTotalPrice = useAppSelector(s => s.cart.cartTotalPrice)//获取购物车总价格
  const dispatch = useDispatch()
  const history = useHistory()
  const [isAllChecked, setAllChecked] = useState(true)


  const isAllCheck = () => {
    setAllChecked(!isAllChecked)
  }
  const delProduct = (productId: number) => {
    dispatch(deleteCart(productId))
  }

  const goToOrder = () => {
    if (list.length >= 1) {
      history.push('/order')
    } else {
      alert('购物车是空的233')
    }


  }
  useEffect(() => {
    dispatch(getCart())

  }, [])
  console.log('productId', list)

  return (
    <CartLayout title={'我的购物车'} hasSubTitle={true}>
      <div className="cart">
        <div className="wrapper">
          <div className="container">
            <div className="cart-box">
              <ul className="cart-item-head">
                <li className="col-1" onClick={isAllCheck}>{isAllChecked ? (<span className="checkbox checked" ></span>) : (<span className="checkbox" ></span>)}全选</li>
                <li className="col-3">商品名称</li>
                <li className="col-1">单价</li>
                <li className="col-2">数量</li>
                <li className="col-1">小计</li>
                <li className="col-1">操作</li>
              </ul>

              <ul className="cart-item-list">
                {
                  list.map((item: any, index: any) => (
                    <li className="cart-item" key={`cart-item-${index.toString()}`}>

                      <div className="item-check" >
                        {
                          (item.productSelected) ? (<span className="checkbox checked" ></span>) : (<span className="checkbox" ></span>)
                        }

                      </div>
                      <div className="item-name">
                        <img src={item.productMainImage} alt="" />
                        <span>{item.productName}</span>
                      </div>
                      <div className="item-price">{item.productPrice}</div>
                      <div className="item-num">
                        <div className="num-box">
                          <div className="change-num" >-</div>
                          <span>{item.quantity}</span>
                          <div className="change-num ">+</div>
                        </div>
                      </div>
                      <div className="item-total">{item.productTotalPrice}</div>
                      <div className="item-del" onClick={() => { delProduct(item.productId) }}></div>
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
                <div className="btn" onClick={goToOrder}>去结算</div>
              </div>
            </div>
          </div>
        </div></div>
    </CartLayout>

  )
}
export default Cart