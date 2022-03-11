import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCube, Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './SwiperBox.scss'
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../../../../redux/hooks";


interface Props {

}
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
export const SwiperBox:React.FC = React.memo(
  ()=> {
    const history = useHistory()
    const status = useAppSelector(s=>s.login.status)
    const addCartProduct = (subItem:any)=> {
      if(status === 0) {
        history.push(`/product/${subItem.id}` )
      }
      else {
        alert('先登陆吧')
      }
      // href={subItem ? '/product/' + subItem.id : ''}
      
    }
    return (
      <>
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
                                <li key={`children-${index.toString()}-${subIndex.toString()}`}>
                                  <div className="product-item-box" onClick={()=> {addCartProduct(subItem)}} >
                                    <img src={subItem ? subItem.img : '/imgs/item-box-1.png'} alt="" />
                                    {subItem ? subItem.name : '小米9'}
                                  </div>
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
      </>
    )
  }
) 