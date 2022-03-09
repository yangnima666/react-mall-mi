import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CartLayout } from "../../component/cartLayout/CartLayout";
import { checkAllCart, deleteCart, getCart, putCart, unCheckAllCart } from "../../redux/cart/slice";
import { useAppSelector } from "../../redux/hooks";
import './Cart.scss'

const Cart: React.FC = () => {


  const list = useAppSelector(s => s.cart.list)//获取购物车列表
  const selectAll = useAppSelector(s => s.cart.selectedAll)
  const cartTotalPrice = useAppSelector(s => s.cart.cartTotalPrice)//获取购物车总价格
  const dispatch = useDispatch()
  const history = useHistory()
  const [isAllChecked, setAllChecked] = useState(selectAll)//控制全选
  const [selected, setSelected] = useState(false)//控制选项卡

  // const checknum = list.forEach((item: any) => item.productSelected).length;
  const isAllCheck = () => {
    if (!isAllChecked) {
      setAllChecked(!isAllChecked)
      dispatch(checkAllCart())
    } else {
      dispatch(unCheckAllCart())
    }
    setAllChecked(!isAllChecked)
    // console.log(isAllChecked)
  }
  const updataProduct = (item: any, type?: '+' | "-") => {
    //这个函数要控制选项框productSelected为true，还有控制商品数量quantity的加减
    let quantity = item.quantity
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [selected, setSelected] = useState(item.productSelected)//控制选项卡
    let id = item.productId
    if (type === '+') {
      if (quantity > item.productStock) {
        alert('我们没有那么多的库存鸭QAQ')
      }
      ++quantity
    } else if (type === '-') {
      if (quantity === 1) {
        alert('至少得选一件吧233')
        return
      }
      --quantity
    } else {

      setSelected(!item.productSelected)

      console.log(selected, new Date())
    }
    console.log(selected, new Date())
    dispatch(putCart({ quantity, selected, id }))
    
    //每次加减要控制购物车的商品数量，商品总价productTotalPrice
    //也就是说我们在这里要发送请求更新购物车，删除购物车的请求
    //于是我们在这个函数总需要穿三个参数，商品id，商品数量quantity，商品选择productSelected
  }
  const delProduct = (productId: number) => {
    dispatch(deleteCart(productId))
  }
  // console.log(selectAll)
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
  // console.log('productId', list)
  const checknum = list.filter((item: any) => item.productSelected).length;
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

                      <div className="item-check" onClick={() => { updataProduct(item) }}>
                        {
                          item.productSelected ? (<span className="checkbox checked" ></span>) : (<span className="checkbox" ></span>)
                        }

                      </div>
                      <div className="item-name">
                        <img src={item.productMainImage} alt="" />
                        <span>{item.productName}</span>
                      </div>
                      <div className="item-price">{item.productPrice}</div>
                      <div className="item-num">
                        <div className="num-box">
                          <div className="change-num" onClick={() => { updataProduct(item, "-") }}>-</div>
                          <span>{item.quantity}</span>
                          <div className="change-num " onClick={() => { updataProduct(item, "+") }}>+</div>
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
                共<span>{list.length}</span>件商品，已选择<span>{checknum}</span>件
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