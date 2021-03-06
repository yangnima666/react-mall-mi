import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCart } from "../../redux/cart/slice";
import { useAppSelector } from '../../redux/hooks'
import { logout } from "../../redux/login/slice";
import { fetchProductData } from "../../redux/product/slice";

import './NavHeader.scss'

 export const NavHeader: React.FC = () => {
  const productList = useAppSelector(state => state.product.list)
  
  const data = useAppSelector(s => s.login.data)
  let status = useAppSelector(s => s.login.status)
  const list = useAppSelector(s=>s.cart.list)
  const dispatch = useDispatch()
  const history = useHistory()
  const goToCart = ()=> {
    if(status===0) {
      history.push("/cart")
    }else {
      alert('先登陆吧')
    }
    
  }
  const logOut = () => {
    dispatch(logout())
    status = 1
    alert('退出成功')
    history.push('/index')
  }
  useEffect(() => {
    // dispatch(fetchProductData(6))
    if(status===0) {
      dispatch(getCart())
    }
    
  }, [])
  
  return (
    <div className="header">
      <div className="nav-topbar">
        <div className="container">
          <div className="topbar-menu">
            <a href="#!">小米商城</a>
            <a href="#!">MUI</a>
            <a href="#!">云服务</a>
            <a href="#!">协议规则</a>
          </div>
          <div className="topbar-user">

            {
              status ?
                <>
                  <a href="/login">登录</a>
                  <a href="/register">注册</a>
                </>
                : (<>
                  <a href="#!">{data.username}</a>
                  <a  onClick={logOut}>退出</a>
                  <a href="/orderList">我的订单</a>
                </>)
            }
            <div className="my-cart" onClick={goToCart}><span className="icon-cart"></span>购物车({list.length})</div>
          </div>
        </div>
      </div>
      <div className="nav-header">
        <div className="container">
          <div className="header-logo">
            <a href="/index"></a>
          </div>
          <div className="header-menu">
            <div className="item-menu">
              <span>小米手机</span>
              <div className="children">
                    <ul>
                  {
                    productList.slice(0,6).map((item: any, index: any) => (
                      <li className="product" key={`product-${index.toString()}`}>
                        <a href={`/product/${item.id}`}>
                          <div className="pro-img">
                            <img src={item.mainImage} alt="" />
                          </div>
                          <div className="pro-name">{item.name}</div>
                          <div className="pro-price">{item.price}元</div>
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="item-menu">
              <span>RedMi红米</span>
            </div>
            <div className="item-menu">
              <span>电视</span>
              <div className="children">
                <ul>
                  <li className="product">
                    <a href="#!" target="_blank">
                      <div className="pro-img">
                        <img src="/imgs/nav-img/nav-3-1.jpg" alt="" />
                      </div>
                      <div className="pro-name">小米壁画电视 65英寸</div>
                      <div className="pro-price">6999元</div>
                    </a>
                  </li>
                  <li className="product">
                    <a href="#!" target="_blank">
                      <div className="pro-img">
                        <img src="/imgs/nav-img/nav-3-2.jpg" alt="" />
                      </div>
                      <div className="pro-name">小米全面屏电视E55A</div>
                      <div className="pro-price">1999元</div>
                    </a>
                  </li>
                  <li className="product">
                    <a href="#!" target="_blank">
                      <div className="pro-img">
                        <img src="/imgs/nav-img/nav-3-3.png" alt="" />
                      </div>
                      <div className="pro-name">小米电视4A 32英寸</div>
                      <div className="pro-price">699元</div>
                    </a>
                  </li>
                  <li className="product">
                    <a href="#!" target="_blank">
                      <div className="pro-img">
                        <img src="/imgs/nav-img/nav-3-4.jpg" alt="" />
                      </div>
                      <div className="pro-name">小米电视4A 55英寸</div>
                      <div className="pro-price">1799元</div>
                    </a>
                  </li>
                  <li className="product">
                    <a href="#!" target="_blank">
                      <div className="pro-img">
                        <img src="/imgs/nav-img/nav-3-5.jpg" alt="" />
                      </div>
                      <div className="pro-name">小米电视4A 65英寸</div>
                      <div className="pro-price">2699元</div>
                    </a>
                  </li>
                  <li className="product">
                    <a href="#!" target="_blank">
                      <div className="pro-img">
                        <img src="/imgs/nav-img/nav-3-6.png" alt="" />
                      </div>
                      <div className="pro-name">查看全部</div>
                      <div className="pro-price">查看全部</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header-search">
            <div className="wrapper-input">
              <input type="text" name="keyword" />
              <div className="search"></div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
} 
// export const NavHeader = React.memo(NavHeaderComponent) 