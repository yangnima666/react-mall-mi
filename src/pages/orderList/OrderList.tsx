import React from "react"
import { CartLayout } from "../../component/cartLayout/CartLayout";
import './OrderList.scss'
const OrderList: React.FC = () => {
  
  return (
    <CartLayout title={"订单列表"} hasSubTitle={false}>
      {/* 获取订单列表未开发 */}
      <div className="order-list">
        <div className="img">
          <img src="/imgs/icon-no-data.png" alt="" />
        </div>
        <div className="tip">这里是空的~~</div>

      </div>
    </CartLayout>

  )
}

export default OrderList