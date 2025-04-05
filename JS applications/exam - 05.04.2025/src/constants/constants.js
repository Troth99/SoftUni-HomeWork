export const mainEl = document.querySelector('main')
export const headerEl = document.querySelector('header')

const baseUrl = 'http://localhost:3030'
export const loginUrl = baseUrl + '/users/login'
export const logoutUrl = baseUrl + '/users/logout'
export const registerUrl = baseUrl + '/users/register'
export const stampUrl = baseUrl + '/data/stamps?sortBy=_createdOn%20desc'
export const baseStampUrl = baseUrl + '/data/stamps'
