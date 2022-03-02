import React from "react";
import { renderRoutes } from "react-router-config";
import { RouteComponentProps } from "react-router-dom";
import { NavFooter, NavHeader } from "../../component";

// import router from "../../router";

const Home: React.FC<RouteComponentProps> = (props: any) => {

  const { route } = props
  return (
    <div className="home">
      <NavHeader></NavHeader>
      {renderRoutes(route.routes)}
      <NavFooter />
    </div>
  )

}
export default Home