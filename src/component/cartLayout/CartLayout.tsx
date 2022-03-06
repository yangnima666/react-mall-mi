import React from "react";
import { Layout } from 'antd'
import './CartLayout.scss'
import { NavFooter } from "../navFooter";
import { useAppSelector } from "../../redux/hooks";

export const CartLayout: React.FC = (props) => {
  const { Footer, Content } = Layout;
  const data = useAppSelector(s=>s.login.data)
  
  return (
    <Layout style={{backgroundColor: "#fff"}}>
      
        <div className="order-header">
          <div className="container clearfix">
            <div className="header-logo">
              <a href="/index"></a>
            </div>
            <div className="title">
              <h2>标题<span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span></h2>
            </div>
            <div className="username">
              <a href="#!">{data.username}</a>
            </div>
          </div>
        </div>
      
      <Content>{props.children}</Content>
     <NavFooter></NavFooter>
    </Layout>
  )
}