import React, {
	ReactNode, useEffect,
} from 'react'
import { Navigate } from 'react-router-dom'
import { verify } from '../../api'
import {
	useAppSelector, useAppDispatch,
} from '../../utils/hooks'
import { saveInfo } from '../../store/features/userInfoSlice'
import { TOKEN_KEY } from '../../config'
import storage from '../../utils/storage'

const WithAuth = ({ children }: any) => {

	const dispatch = useAppDispatch()
	const token = storage.getItem(TOKEN_KEY)
	const loginTime = useAppSelector((state) => state.userInfo.loginTime)
	if(token) {
		if(!loginTime) {
			verify(token).then((res) => {
				console.log(res)
				const {
					payload, token,
				} = res
				const { username } = payload
				dispatch(saveInfo({
					username,
					token,
				}))
				return children
			}).catch((e) => {
				console.warn(e)
				return <Navigate to={'/login'}/>
			})
		} else {
			return children
		}
	} else {
		return <Navigate to={'/login'}/>
	}
}

export default WithAuth
