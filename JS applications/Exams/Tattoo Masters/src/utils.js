export function getToken(){
    let token = localStorage.getItem('token')
    return token
}

export function getUserId(){
    let userId = localStorage.getItem('userId');
    return userId
}

export const baseUrl = 'http://localhost:3030'