
import { Modal } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CartLayout } from "../../component/cartLayout/CartLayout";
import { useAppSelector } from "../../redux/hooks";
import './OrderPay.scss'
const OrderPay: React.FC = () => {


  const [isShowList, setIsShowList] = useState(false)
  const orderList = useAppSelector(s => s.order.orderList)
  const orderNo = useAppSelector(s => s.order.orderNo)
  const cartTotalPrice = useAppSelector(s => s.cart.cartTotalPrice)
  const show = () => {
    setIsShowList(!isShowList)
  }
  const history = useHistory()
  const [isModalVisible, setIsModalVisible] = useState(false);

  //控制支付弹窗
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    history.push('/index')
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  console.log(orderList)
  console.log(orderNo)
  return (
    <CartLayout title={"订单支付"} hasSubTitle={false}>
      <div className="orderPay"><div className="wrapper">
        <div className="container">
          <div className="order-wrap">
            <div className="item-order">
              <div className="icon-succ"></div>
              <div className="order-info">
                <h2>订单提交成功！去付款咯～</h2>
                <p>请在<span>30分</span>内完成支付, 超时后将取消订单</p>
                <p>收货信息：广东省</p>
              </div>
              <div className="order-total">
                <p>应付总额：<span>{cartTotalPrice}</span>元</p>
                {
                  isShowList ? (
                    <p>订单详情<em className="icon-down" onClick={show}></em></p>
                  ) : (<p>订单详情<em className="icon-down up" onClick={show}></em></p>)
                }

              </div>
            </div>
            {
              isShowList ? (
                <div className="item-detail">
                  <div className="item">
                    <div className="detail-title">订单号：</div>
                    <div className="detail-info theme-color">{orderNo}</div>
                  </div>
                  <div className="item">
                    <div className="detail-title">收货信息：</div>
                    <div className="detail-info">广东省</div>
                  </div>
                  <div className="item good">
                    <div className="detail-title">商品名称：</div>
                    <div className="detail-info">
                      <ul>
                        {
                          orderList.map((item: any, index: any) => (
                            <li key={`detail-list-${index.toString()}`}>
                              <img src={item.productImage} alt="" />{item.productName}
                            </li>
                          ))
                        }

                      </ul>
                    </div>
                  </div>
                  <div className="item">
                    <div className="detail-title">发票信息：</div>
                    <div className="detail-info">电子发票 个人</div>
                  </div>
                </div>
              ) : (<></>)
            }

          </div>
          <div className="item-pay">
            <h3>选择以下支付方式付款</h3>
            <div className="pay-way">
              <p>支付平台</p>
              <div className="pay pay-ali" onClick={showModal}></div>
              <div className="pay pay-wechat" onClick={showModal}></div>
              <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>支付成功...</p>
                
              </Modal>
            </div>
          </div>
        </div>
      </div></div>
    </CartLayout>

  )
}

export default OrderPay