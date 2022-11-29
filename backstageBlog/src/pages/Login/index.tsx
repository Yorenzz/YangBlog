import { Button, Form, Input } from 'antd'
import React from 'react'
import { loginIn, verify } from '../../api'
import { useAppSelector, useAppDispatch } from '../../utils/hooks'
import { saveInfo } from '../../store/features/userInfoSlice'
import { Navigate, useNavigate } from 'react-router-dom'
import { TOKEN_KEY } from '../../config'
import storage from '../../utils/storage'
import './style.scss'

const Login: React.FC = () => {
	const dispatch = useAppDispatch()
	const token = useAppSelector((state) => state.userInfo.token)
	console.log(token)


	const navigate = useNavigate()
	const onFinish = (values: any) => {
		console.log('Success:', values.username, values.password)
		loginIn(values.username, values.password).then((res) => {

			const { username, token } = res

			dispatch(saveInfo({
				username,
				token,
			}))
			navigate('/')
			console.log(token)
		})
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	const tokenStorage = storage.getItem(TOKEN_KEY)
	const loginTime = useAppSelector((state) => state.userInfo.loginTime)
	if(tokenStorage) {
		if(!loginTime) {
			verify(tokenStorage).then((res) => {
				console.log(res)
				const { payload, token } = res
				const { username } = payload
				dispatch(saveInfo({
					username,
					token,
				}))
				return (<Navigate to={'/'}/>)
			}).catch((e) => {
				console.warn(e)
				return (<Navigate to={'/login'}/>)
			})
		} else {
			return (<Navigate to={'/'}/>)
		}
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
					rules={[{
						required: true,
						message: '请输入账号!',
					}]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="密码"
					name="password"
					rules={[{
						required: true,
						message: '请输入密码!',
					}]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item wrapperCol={{
					offset: 8,
					span: 16,
				}}>
					<Button type="primary" htmlType="submit">
          Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default Login
