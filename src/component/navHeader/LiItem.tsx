import React from "react";
import  './NavHeader.scss'

interface Props {
  name: string,
  price: string,
  mainImage: string
}
export const LiItem: React.FC<Props> = ({ name, price, mainImage }) => {
  return (
    <li>
      <a href='/#/product/' target="_blank">
        <div className="pro-img">
          <img src={mainImage} alt="" />
        </div>
        <div className="pro-name">{name}</div>
        <div className="pro-price">{price}</div>
      </a>
    </li>
  )
}