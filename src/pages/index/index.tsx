import React, { useEffect } from "react";
import './index.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCube, Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { fetchProductData } from "../../redux/product/slice";

// eslint-disable-next-line react-hooks/rules-of-hooks


 const Index: React.FC = () => {
  const menuList = [
    [
      {
        id: 30,
        img: '/imgs/item-box-1.png',
        name: '小米CC9',
      }, {
        id: 31,
        img: '/imgs/item-box-2.png',
        name: '小米CC9e',
      }, {
        id: 32,
        img: '/imgs/item-box-3.jpg',
        name: '小米CC9 美图定制版',
      }, {
        id: 33,
        img: '/imgs/item-box-4.jpg',
        name: '移动4G专区',
      }
    ],
    [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
  ]
  const productList = useAppSelector((s) => s.product.list)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductData(8))
  }, [])
  return (
    <>
      <div className="index">
        <div className="container">
          <div className="swiper-box">
            <div className="nav-menu">
              <ul className="menu-wrap">
                <li className="menu-item">
                  <a href="#!">手机 电话卡</a>
                  <div className="children">
                    {
                      menuList.map((item, index) => (
                        <ul key={index.toString()}>
                          {
                            item.map((subItem: any, subIndex) => (
                              <li>
                                <a href={subItem ? '/product/' + subItem.id : ''}>
                                  <img src={subItem ? subItem.img : '/imgs/item-box-1.png'} alt="" />
                                  {subItem ? subItem.name : '小米9'}
                                </a>
                              </li>
                            ))
                          }
                        </ul>
                      ))
                    }
                  </div>
                </li>
                <li className="menu-item">
                  <a href="#!">电视 盒子</a>
                </li>
                <li className="menu-item">
                  <a href="#!">笔记本 平板</a>
                </li>
                <li className="menu-item">
                  <a href="#!">家电 插线板</a>
                </li>
                <li className="menu-item">
                  <a href="#!">出行 穿戴</a>
                </li>
                <li className="menu-item">
                  <a href="#!">智能 路由器</a>
                </li>
                <li className="menu-item">
                  <a href="#!">电源 配件</a>
                </li>
                <li className="menu-item">
                  <a href="#!">生活 箱包</a>
                </li>
              </ul>
            </div>
            <Swiper
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={true}
              modules={[EffectCube, Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/39bb34167f6c178d6bb768d8872c97f8.jpg?w=2452&h=920" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/39bb34167f6c178d6bb768d8872c97f8.jpg?w=2452&h=920" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/39bb34167f6c178d6bb768d8872c97f8.jpg?w=2452&h=920" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/39bb34167f6c178d6bb768d8872c97f8.jpg?w=2452&h=920" alt="" />
              </SwiperSlide>
            </Swiper>
            
          </div>
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
            <h2>手机</h2>
            <div className="wrapper">
              <div className="banner-left">
                <a href="/product/35"><img src='/imgs/mix-alpha.jpg' alt="" /></a>
              </div>

              <div className="list-box">
                {
                  productList.map((item:any, index:any) => (
                    <div className="list" key={index.toString()}>
                      <div className="item" >
                        <span className="">新品</span>
                        <div className="item-img">
                          <img src={item.mainImage} alt="" />
                        </div>
                        <div className="item-info">
                          <h3>{item.name}</h3>
                          <p>{item.subtitle}</p>
                          <p className="price">{item.price}元</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              
              </div>
            </div>
          </div>
        </div>

        {/* <modal 
      title="提示" 
      sureText="查看购物车" 
      btnType="1" 
      modalType="middle" 
      src:showModal="showModal"
      srcubmit="goToCart"
      srcancel="showModal=false"
      >
      <template src:body>
        <p>商品添加成功！</p>
      </template>
    </modal> */}
      </div>
    </>

  )
}
export default Index