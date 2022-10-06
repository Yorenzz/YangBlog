const localStorageKey='Token'

export const getToken=()=>{
    return localStorage.getItem(localStorageKey)
}

export const handleUserResponse=(token: string)=>{
    localStorage.setItem(localStorageKey,token)
}

export const logout=()=>{
    localStorage.removeItem(localStorageKey)
}
