import { Modal } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../../../redux/cart/slice";
import { useAppSelector } from "../../../../redux/hooks";
import './ProductBox.scss'


interface Props {
  title:string,
  productList:any
}
export const ProductBox:React.FC<Props> = ({title, productList})=> {
  const dispatch = useDispatch()
  const [selected, setSelected] = useState(false)
  const status = useAppSelector(s=>s.login.status)
  const addCarts = (productId:any)=> {
    if(status === 0) {
      dispatch(addCart({ productId, selected }))
    }else {
      alert('先登录吧')
    }
    
  }
  const handleOk = () => {
    setSelected(false);
  };

  const handleCancel = () => {
    setSelected(false);
  };
  return (
    <>
      <h2>{title}</h2>
            <div className="wrapper">
              <div className="banner-left">
                <a href="/product/35"><img src='/imgs/mix-alpha.jpg' alt="" /></a>
              </div>

              <div className="list-box">
                {
                  productList.map((item: any, index: any) => (
                    <div className="list" key={index.toString()}>
                      <div className="item" >
                        <span className="">新品</span>
                        <div className="item-img">
                          <img src={item.mainImage} alt="" />
                        </div>
                        <div className="item-info">
                          <h3>{item.name}</h3>
                          <p>{item.subtitle}</p>
                          <p className="price" onClick={() => { addCarts(item.id) }}>{item.price}元</p>
                          <Modal title="Basic Modal" visible={selected} onOk={handleOk} onCancel={handleCancel}>
                            <p>添加购物车成功</p>
                            
                          </Modal>
                        </div>
                      </div>
                    </div>
                  ))
                }

              </div>
            </div>
    </>
  )
}