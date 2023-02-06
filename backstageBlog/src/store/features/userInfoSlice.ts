import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import storage from '../../utils/storage'

interface UserInfoState {
    username: string,
    token: string,
    role: string,
    UPLOAD_TOKEN: string
}

interface SetInfo {
    username: string,
    token: string,
	role:string,
}

const initialState: UserInfoState = {
	username: '',
	token: '',
	role: '',
	UPLOAD_TOKEN: '',
}

export const userInfoSlice = createSlice({
	name: 'userInfo',
	initialState,
	reducers: {
		saveInfo(state, action: PayloadAction<SetInfo>) {
			state.username = action.payload.username
			state.token = action.payload.token
			state.role = action.payload.role
			storage.setItem('XTOKEN', action.payload.token)
		},
		saveUploadToken(state, action: PayloadAction<string>) {
			state.UPLOAD_TOKEN = action.payload
			storage.setItem('UPLOAD_TOKEN', action.payload)
		},
	},
})

export const { saveInfo, saveUploadToken } = userInfoSlice.actions

// export const asyncIncrement = (payload) => (dispatch) => {
//     setTimeout(()=>{
//         dispatch(increment(payload));
//     }, 2000);
// };
// 异步

export default userInfoSlice.reducer
