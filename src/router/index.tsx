import { Redirect } from 'react-router-dom'
import React, { lazy, Suspense } from "react"
import Home from '../pages/home/Home'



const Product = lazy(() => import('../pages/product/Product'))
const Index = lazy(() => import('../pages/index/'))
const Detail = lazy(() => import('../pages/detail/Detail'))
const Login = lazy(() => import('../pages/login/Login'))
const Register = lazy(() => import('../pages/register/Register'))
const Cart = lazy(()=>import('../pages/cart/Cart'))
const Order = lazy(()=>import('../pages/order/Order'))
const OrderPay = lazy(()=>import('../pages/orderPay/OrderPay'))
const OrderList = lazy(()=>import('../pages/orderList/OrderList'))
const SuspenseComponent = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}
const router =[
  {
    path: '/login',
    component: SuspenseComponent(Login)
  },
  {
    path: '/register',
    component: SuspenseComponent(Register)
  },
  {
    path: '/cart',
    component: SuspenseComponent(Cart)
  },
  {
    path: '/order',
    component: SuspenseComponent(Order)
  },
  {
    path: '/orderpay',
    component: SuspenseComponent(OrderPay)
  },
  {
    path: '/orderList',
    component: SuspenseComponent(OrderList)
  },
  {
    path: '/',
    component: Home,
    extra: true,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => (<Redirect to={'/index'}></Redirect>),
      },
      {
        path: '/index',
        component: SuspenseComponent(Index)
      },
      {
        path: '/product/:id',
        component: SuspenseComponent(Product)
      },
      {
        path: '/detail/:id',
        component: SuspenseComponent(Detail)
      }

    ]
  },
  
  



]
// eslint-disable-next-line import/no-anonymous-default-export
export default router
  


