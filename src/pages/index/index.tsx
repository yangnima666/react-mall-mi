import React, { useEffect} from "react";
import './index.scss'

import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { fetchProductData } from "../../redux/product/slice";

import { ProductBox, SwiperBox } from "./Component";

const Index: React.FC = () => {

  const productList = useAppSelector((s) => s.product.list)//获取商品列表
 
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchProductData(8))
  }, [])
  return (
    <>
      <div className="index">
        <div className="container">
          <SwiperBox></SwiperBox>
          <div className="ads-box">
            <a href="#!" >
              <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8a6d6d37904e22c72130e3e4ec79b41.jpg?w=632&h=340" alt="" />
            </a>
            <a href="#!" >
              <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8a6d6d37904e22c72130e3e4ec79b41.jpg?w=632&h=340" alt="" />
            </a>
            <a href="#!" >
              <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8a6d6d37904e22c72130e3e4ec79b41.jpg?w=632&h=340" alt="" />
            </a>
            <a href="#!" >
              <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8a6d6d37904e22c72130e3e4ec79b41.jpg?w=632&h=340" alt="" />
            </a>
          </div>
          <div className="banner">
            <a href="/product/30">
              <img src="/imgs/banner-1.png" alt="" />
            </a>
          </div>
        </div>
        <div className="product-box">
          <div className="container">
            <ProductBox title={"手机"} productList={productList}></ProductBox>
          </div>
        </div>
      </div>
    </>
  )
}
export default Index