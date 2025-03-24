export function getToken() {
    let token = localStorage.getItem('token');
    return token
}

export function getUserId() {
    let userId = localStorage.getItem('userId')
    return userId
}

export function setUserData(data) {
    localStorage.setItem('token', data.accessToken);
    localStorage.setItem('userId', data._id)
    localStorage.setItem('email', data.email)
}

export function clearLoggedInData(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId')
    localStorage.removeItem('email')
}