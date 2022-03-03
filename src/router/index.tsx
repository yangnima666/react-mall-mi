import { Redirect } from 'react-router-dom'
import React, { lazy, Suspense } from "react"
import Home from '../pages/home/Home'



const Product = lazy(() => import('../pages/product/Product'))
const Index = lazy(() => import('../pages/index/'))
const Detail = lazy(()=>import ('../pages/detail/Detail'))
const SuspenseComponent = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [{ 
  path: '/',
  component:Home,
  extra:true,
  
  routes: [
    {
      path: '/',
      exact: true,
      render:()=>(<Redirect to={'/index'}></Redirect>),
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
  
  ]}
  
 
]


