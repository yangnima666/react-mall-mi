import React from "react";
import './NavFooter.scss'

const NavFooterComponent:React.FC = () => {
  return (
    <div className="footer">
    <div className="footer-logo">
      <img src="/imgs/logo-footer.png" alt=""/>
      <p>小米商城</p>
    </div>             
    <div className="footer-link">
      <a href="#!">主页</a><span>|</span>
      <a href="#!" target="_blank">Vue</a><span>|</span>
      <a href="#!" target="_blank">React</a><span>|</span>
      <a href="#!" target="_blank">微信小程序</a><span>|</span>
      <a href="#!" target="_blank">es6</a>
    </div>
    <div className="copyright">Copyright ©2022 <span className="domain">mi.com</span> All Rights Reserved.</div>
  </div>
  )
}
export const NavFooter = React.memo(NavFooterComponent)