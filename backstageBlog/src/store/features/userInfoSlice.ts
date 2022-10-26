import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import storage from "../../utils/storage";

interface UserInfoState {
    username: string,
    token: string,
    loginTime: number,
}

interface SetInfo {
    username: string,
    token: string,
}

const initialState: UserInfoState = {
    username: '',
    token: '',
    loginTime: 0,
}

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        saveInfo(state, action: PayloadAction<SetInfo>) {
            state.username = action.payload.username;
            state.token = action.payload.token
            state.loginTime = 1
            storage.setItem('XTOKEN', action.payload.token)
        },
        incrementLoginInTime(state){
            state.loginTime&&state.loginTime++
        },
    }
});

export const { saveInfo } = userInfoSlice.actions;

// export const asyncIncrement = (payload) => (dispatch) => {
//     setTimeout(()=>{
//         dispatch(increment(payload));
//     }, 2000);
// };
// 异步

export default userInfoSlice.reducer