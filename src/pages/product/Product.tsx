import React, { useEffect, useState } from "react";
import { Pagination, Autoplay } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import './Product.scss'
import "swiper/css";
import "swiper/css/pagination";
import { ProductParam } from '../../component'
import { useAppSelector } from "../../redux/hooks";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductInfo } from "../../redux/productInfo/slice";


const Product: React.FC = () => {

  const productInfo = useAppSelector(s => s.productInfo.data)
  const location = useLocation()
  const dispatch = useDispatch()
  const productId = location.pathname.slice(9)
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const showModal = () => {
    setIsModalVisible(true);
  };


  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  useEffect(() => {
    dispatch(getProductInfo(productId))
  }, [])

  console.log('product:', productInfo)
  console.log(location.pathname.slice(9))
  return <div className="product">
    <ProductParam productInfo={productInfo}></ProductParam>
    <div className="content">
      <div className="item-bg">
        <h2>{productInfo.name}</h2>
        <h3>{productInfo.subtitle}</h3>
        <p>
          <a href="#!" id="">全球首款双频 GP</a>
          <span>|</span>
          <a href="#!" id="">骁龙845</a>
          <span>|</span>
          <a href="#!" id="">AI 变焦双摄</a>
          <span>|</span>
          <a href="#!" id="">红外人脸识别</a>
        </p>
        <div className="price">
          <span>￥<em>{productInfo.price}</em></span>
        </div>
      </div>
      <div className="item-bg-2"></div>
      <div className="item-bg-3"></div>
      <div className="item-swiper">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide><img src="/imgs/product/gallery-2.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/imgs/product/gallery-3.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/imgs/product/gallery-4.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/imgs/product/gallery-5.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/imgs/product/gallery-6.jpg" alt="" /></SwiperSlide>

        </Swiper>
        <p className="desc">小米8 AI变焦双摄拍摄</p>
      </div>
      <div className="item-video">
        <h2>60帧超慢动作摄影<br />慢慢回味每一瞬间的精彩</h2>
        <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br />更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
        <div className="video-bg" onClick={showModal}></div>
        {
          !isModalVisible ? (<div style={{display:"none"}}></div>) : (
            <div className="video-box">
              <div className="overlay"></div>
              <div className="video" >
                <span className="icon-close" onClick={handleCancel}></span>
                <video src="/imgs/product/video.mp4" controls autoPlay ></video>
              </div>
            </div>
          )
        }





      </div>
    </div>
  </div>
}
export default Product