import { Button, Form, Input } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss'

const Login: React.FC = () => {
	const navigate = useNavigate()
	const onFinish = (values: any) => {
		console.log('Success:', values.username, values.password);
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	}

	const submit = () => {
		navigate('/home')
	}
	return (
    <div className="loginContent">
      <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="账号"
        name="username"
        rules={[{ required: true, message: '请输入账号!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={submit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
	
	)
}

export default Login
