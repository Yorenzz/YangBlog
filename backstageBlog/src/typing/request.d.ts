export interface RequestInterface{
    url: string,
    method: string,
    data?: object,
    params?: object
}

export interface Result<T = any> {
    code: number,
    msg: string,
    data: T,
}
