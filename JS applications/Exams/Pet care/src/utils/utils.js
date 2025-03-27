export function getToken() {
    let token = localStorage.getItem('token');
    return token
}

export function setUserData(data) {
    localStorage.setItem('token', data.accessToken);
    localStorage.setItem('email', data.email);
    localStorage.setItem('userId', data._id)
}

export function getUserId() {
    let userId = localStorage.getItem('userId');
    return userId
}

export function inputValidation(e) {
    e.preventDefault();
    const inputsData = new FormData(e.currentTarget);
    const inputs = Object.fromEntries(inputsData);

    return inputs;
}

export function clearStoredData() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId')
    localStorage.removeItem('email')
}