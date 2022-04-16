import {createContext, useContext, useReducer, useState} from "react";
import {getToken} from "../utils/routeValidate";
// import {fakeAuthProvider} from "./fakeAuth";

export const TokenContext=createContext(null)

// export const UPDATE_TOKEN = "UPDATE_TOKEN"
// const reducer = (state, action) => {
//     switch(action.type) {
//         case UPDATE_TOKEN:
//             return action.token
//         default:
//             return state
//     }
// }
export function useAuth(){
    return useContext(TokenContext)
}
export const AuthProvider=({children})=>{
    let [token,setToken]=useState(getToken())
    let [tokenMesNum,setTokenMesNum]=useState(0)
    let signin = (token,callback) => {
        setToken(token)
        callback()
    }
    // console.log('AuthToken',token)
    // let signin = (token, callback) => {
    //     setToken(token)
    //     //         callback()
    //     return fakeAuthProvider.signin(() => {
    //
    //     })
    // }
    // // 退出登录
    // let signout = (callback) => {
    //     return fakeAuthProvider.signout(() => {
    //         setToken(null)
    //         callback()
    //     })
    // }
    let setTokenNum=()=>{
        return setTokenMesNum(token+1)
    }
    let value = { token,tokenMesNum,setTokenNum,signin }
    return (
        <TokenContext.Provider value={value}>
            {children}
        </TokenContext.Provider>
    )
}