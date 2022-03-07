import { Layout, Popover } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import './UserLayout.scss'
export const UserLayout: React.FC = (props) => {
  const { Header, Footer, Sider, Content } = Layout;
  const history = useHistory()
  const content = (
    <div>
      <div style={{ cursor: "pointer" }}>中文</div>
      <div style={{ cursor: "pointer" }}>English</div>
    </div>
  )
  return <>
    <Layout>
      <Sider width={375}>
        <div className="left-banner">
          <img src="/imgs/banner-login.jpg" alt="" />
        </div>
      </Sider>
      <Layout>
        <Header className="login-header">
          <div className="header-left">
            <div className="logo">
              <div className="header-logo">
                <a href="/index"></a>
              </div>
            </div>
            <div className="title">小米账号</div>
          </div>
          <div className="header-right">
            <div className="menu">
              <a href="#!">用户协议</a>
              <a href="#!">隐私政策</a>
              <a href="#!">帮助中心</a>
              <div className="diver"></div>
              <Popover
                content={content}
                placement="bottom">
                <div className="language">中文(简体)</div>
              </Popover>
            </div>
          </div>
        </Header>
        <Content className="wrapper">
          <div className="content">
            <div className="content-header">
              <div className="tab tab-login" onClick={()=> {history.push('/login')}}>登录</div>
              <div className="tab tab-register" onClick={()=> {history.push('/register')}}>注册</div>
              </div>
            <div className="content-from">{props.children}</div>
          </div>


        </Content>
        <Footer style={{backgroundColor:"#fff",textAlign:'center',color:"#999"}}>版权所有</Footer>
      </Layout>
    </Layout>


  </>
}