import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import './ProductParam.scss'

interface Props {
  productInfo: any
}
 const ProductParamComponent: React.FC<Props> = ({productInfo}) => {
  const history = useHistory()

  const buy = (id:string) => {
    history.push(`/detail/${id}`)
  }
  return (
    <div className="nav-bar" >
      <div className="container">
        <div className="pro-title">
          {productInfo.name}
        </div>
        <div className="pro-param">
          <a href="#!">概述</a><span>|</span>
          <a href="#!">参数</a><span>|</span>
          <a href="#!">用户评价</a>
          <button className="btn" onClick={()=>{buy(productInfo.id)}}>立即购买</button>
        </div>
      </div>
    </div>
  )
}
 export const ProductParam= memo(ProductParamComponent)