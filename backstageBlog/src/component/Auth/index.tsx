import React, { ReactNode, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { verify } from '../../api'
import { useAppSelector, useAppDispatch } from '../../utils/hooks'
import { saveInfo } from '../../store/features/userInfoSlice'
import { TOKEN_KEY } from '../../config'
import storage from '../../utils/storage'

const WithAuth = ({ children }: any) => {

	const dispatch = useAppDispatch()
	const token = storage.getItem(TOKEN_KEY)
	const userInfo = useAppSelector((state) => state.userInfo.username)
	const role = useAppSelector((state) => state.userInfo.role)
	if(token) {
		if(!userInfo) {
			verify(token).then((res) => {
				// console.log(res)
				const { payload, token } = res
				const { username, role } = payload
				// @ts-ignore
				window.role = role
				dispatch(saveInfo({
					username,
					token,
					role,
				}))
				return children
			}).catch((e) => {
				console.warn(e)
				return <Navigate to={'/login'}/>
			})
		} else {
			// @ts-ignore
			window.role = role
			return children
		}
	} else {
		return <Navigate to={'/login'}/>
	}
}

export default WithAuth
