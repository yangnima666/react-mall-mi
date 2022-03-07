
import { Cascader, Col, Input, Modal, Row} from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CartLayout } from "../../component/cartLayout/CartLayout";
import { getCart } from "../../redux/cart/slice";
import { useAppSelector } from "../../redux/hooks";
import { AddOrder } from "../../redux/order/slice";
import './Order.scss'

const options = [
  {
    value: '广东省',
    label: '广东省',
    children: [
      {
        value: '广州市',
        label: '广州市',
        children: [
          {
            value: '天河区',
            label: '天河区',
          },
        ],
      },
    ],
  },
  {
    value: '江西省',
    label: '江西省',
    children: [
      {
        value: '南昌市',
        label: '南昌市',
        children: [
          {
            value: '西湖区',
            label: '西湖区',
          },
        ],
      },
    ],
  },
];

const Order: React.FC = () => {
  
  const history = useHistory()
  const list = useAppSelector(s => s.cart.list)
  const orderList = useAppSelector(s=>s.order.orderList)
  const dispatch = useDispatch()
  const cartTotalPrice = useAppSelector(s => s.cart.cartTotalPrice)
  const shippingId = useAppSelector(s=>s.order.shippingId)
  const [isModalVisible, setIsModalVisible] = useState(false);

  //提交
  const submitOrder = ()=> {
    dispatch(AddOrder(shippingId))
    history.push('/orderpay')
  }
  //控制订单显示
  const showModal = () => {
    setIsModalVisible(true);
  };
//控制弹窗显示
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    dispatch(getCart())
    
  }, [])
  console.log(orderList)
  return (
    <CartLayout title={'确认订单'} hasSubTitle={false}>
      <div className="order">
        <div className="wrapper">
          <div className="container">
            <div className="order-box">
              <div className="item-address">
                <h2 className="addr-title">收货地址</h2>
                <div className="addr-list clearfix">
                  <div className="addr-info" >
                    <h2>名字</h2>
                    <div className="phone">名字</div>
                    <div className="street">名字</div>
                    <div className="action">
                      <a href="#!" className="fl" >
                      </a>
                      <a href="#!" className="fr" >
                      </a>
                    </div>
                  </div>
                  <div className="addr-add" onClick={showModal}>
                    <div className="icon-add"></div>
                    <div>添加新地址</div>
                  </div>
                  <Modal title="添加收货地址" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

                    <Row style={{marginBottom:10}}>
                      <Col span={10} style={{marginRight:10}}><Input placeholder="姓名" allowClear /></Col>
                      <Col span={10}><Input placeholder="电话" allowClear /></Col>
                    </Row>
                    <Cascader style={{marginBottom:10}} options={options}  placeholder="请选择地区" />
                    <TextArea rows={4} style={{marginBottom:10}} placeholder="详细地址"/>
                    <Col  span={8}><Input placeholder="邮编" allowClear /></Col>
                  </Modal>
                </div>
              </div>
              <div className="item-good">
                <h2>商品</h2>
                <ul>
                  {
                    list.map((item: any, index: any) => (
                      <li >
                        <div className="good-name">
                          <img src={item.productMainImage} alt="" />
                          <span>{item.productName + ' ' + item.productSubtitle}</span>
                        </div>
                        <div className="good-price">{item.productPrice * item.quantity}元</div>
                        <div className="good-total">{item.productTotalPrice}元</div>
                      </li>
                    ))
                  }

                </ul>
              </div>
              <div className="item-shipping">
                <h2>配送方式</h2>
                <span>包邮</span>
              </div>
              <div className="item-invoice">
                <h2>发票</h2>
                <a href="#!">电子发票</a>
                <a href="#!">个人</a>
              </div>
              <div className="detail">
                <div className="item">
                  <span className="item-name">商品件数：</span>
                  <span className="item-val">{list.length}件</span>
                </div>
                <div className="item">
                  <span className="item-name">商品总价：</span>
                  <span className="item-val">{cartTotalPrice}元</span>
                </div>
                <div className="item">
                  <span className="item-name">优惠活动：</span>
                  <span className="item-val">0元</span>
                </div>
                <div className="item">
                  <span className="item-name">运费：</span>
                  <span className="item-val">0元</span>
                </div>
                <div className="item-total">
                  <span className="item-name">应付总额：</span>
                  <span className="item-val">{cartTotalPrice}元</span>
                </div>
              </div>
              <div className="btn-group">
                <a href="/cart" className="btn btn-default btn-large">返回购物车</a>
                <div className="btn btn-large" onClick={submitOrder}>去结算</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </CartLayout>

  )
}

export default Order