import { Button, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { UserLayout } from "../../component/userLayout/UserLayout";

const Register: React.FC = () => {
  const history = useHistory()
  const onFinish = async (values: any) => {
    try {
      await axios.post('/api/user/register', {
        username: values.username,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirm,
      })
      history.push('/login')
    } catch (error: any) {
      alert('注册失败，' + error.message)
    }
    console.log('Received values of form: ', values);
  };
  return (
    <UserLayout>

      <div className="register">
        <Form


          name="register"
          onFinish={onFinish}

          scrollToFirstError
        >
          <Form.Item
            name="用户名"
            
            rules={[

              {
                required: true,
                message: '请输入用户名',
              },
            ]}
          >
            <Input placeholder="请输入用户名"/>
          </Form.Item>
          <Form.Item
            name="邮箱"
            
            rules={[
              {
                type: 'email',
                message: '请输入正确的格式',
              },
              {
                required: true,
                message: '请输入邮箱',
              },
            ]}
          >
            <Input placeholder="请输入邮箱"/>
          </Form.Item>

          <Form.Item
            name="密码"
            
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="请输入密码"/>
          </Form.Item>

          <Form.Item
            name="confirm"
            
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '请确认密码',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('两次输入的密码不一致'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="确认密码"/>
          </Form.Item>
          <Form.Item >
            <Button size="large" htmlType="submit" style={{width:320,backgroundColor:"#FF6600",color:"#fff",border:'none'}}>
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </UserLayout>


  )
}

export default Register