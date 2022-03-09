import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { UserLayout } from "../../component/userLayout/UserLayout";
import { useAppSelector } from "../../redux/hooks";
import { login } from "../../redux/login/slice";
import './Login.scss'

const Login: React.FC = () => {

  const status = useAppSelector(s => s.login.status)
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    if (status === 0) {
      history.push('/index')
    }
  }, [status])

  const onFinish = (values: any) => {

    dispatch(login({
      username: values.username,
      password: values.password
    }))
  };
  return (
    <UserLayout>
      <div className="login">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item

            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              size="large"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox style={{ color: '#999' }}>已阅读并同意小米帐号 用户协议和隐私政策</Checkbox>
            </Form.Item>


          </Form.Item>

          <Form.Item>
            <Button size="large" htmlType="submit" className="login-form-button">
              提交
            </Button>

          </Form.Item>
        </Form>
      </div>

    </UserLayout>




  )
}
export default Login