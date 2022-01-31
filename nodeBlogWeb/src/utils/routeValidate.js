const localStorageKey='Token'

export const getToken=()=>{
    return localStorage.getItem(localStorageKey)
}

export const handleUserResponse=(token)=>{
    localStorage.setItem(localStorageKey,token)
}

export const logout= async ()=>{
    localStorage.removeItem(localStorageKey)
}
