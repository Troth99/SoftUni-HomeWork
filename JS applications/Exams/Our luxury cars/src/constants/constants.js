export const mainEl = document.getElementById('main-element');
export const header = document.querySelector('header')

const baseUrl = 'http://localhost:3030'

export const loginUrl = baseUrl + '/users/login'
export const logoutUrl = baseUrl + '/users/logout'
export const registerUrl = baseUrl + '/users/register'
export const allCarsUrl = baseUrl + '/data/cars?sortBy=_createdOn%20desc'
export const carUrl = baseUrl + '/data/cars'