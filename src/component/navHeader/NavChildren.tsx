import React from "react";
import { LiItem } from "./LiItem";
import './NavHeader.scss'


interface Props {
  productList: any
}
export const NavChildren: React.FC<Props> = ({ productList }) => {
  return (
    <div className="children">
      {
        productList.map((item: any, index: any) => (
          <LiItem
            name={item.name}
            price={item.price}
            mainImage={item.mainImage}
            key={index.toString()}
          ></LiItem>
        ))
      }
    </div>
  )
}