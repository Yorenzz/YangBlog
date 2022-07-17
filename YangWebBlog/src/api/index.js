import config from "../config"

export function getText(message){
    return config({
        url: '/publictext/getText',
        method: 'POST',
        data: message
    })
}
