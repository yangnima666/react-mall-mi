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
            name="username"
            label="username"
            rules={[

              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </UserLayout>


  )
}

export default Register