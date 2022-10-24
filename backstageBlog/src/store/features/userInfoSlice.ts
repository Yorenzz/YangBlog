import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState: {
        count: 1,
        title: 'redux toolkit pre'
    },
    reducers: {
        increment(state, {payload}) {
            state.count = state.count + payload.step;
        },
        decrement(state) {
            state.count -= 1;
        }
    }
});

export const {increment, decrement} = userInfoSlice.actions;

// export const asyncIncrement = (payload) => (dispatch) => {
//     setTimeout(()=>{
//         dispatch(increment(payload));
//     }, 2000);
// };
// 异步

export default userInfoSlice.reducer