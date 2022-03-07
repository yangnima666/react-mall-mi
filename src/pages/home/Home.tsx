import React from "react";
import { renderRoutes } from "react-router-config";
import { RouteComponentProps } from "react-router-dom";
import { NavFooter, NavHeader } from "../../component";

const Home: React.FC<RouteComponentProps> = (props: any) => {
  const { route } = props
  return (
    <div className="home">
      <NavHeader></NavHeader>
      {/* 加载子路由 */}
         {renderRoutes(route.routes)}
      <NavFooter />
    </div>
  )
}
export default Home