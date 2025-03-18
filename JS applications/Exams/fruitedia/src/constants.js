const baseUrl = 'http://localhost:3030';
export const loginUrl = baseUrl + '/users/login'
export const registerUrl = baseUrl +'/users/register'
export const logOutUrl = baseUrl +'/users/logout'
export const catalogUrl = baseUrl + '/data/fruits?sortBy=_createdOn%20desc';
export const createUrl = baseUrl + '/data/fruits'
export const detailsUrl = baseUrl + '/data/fruits'



export const mainEl = document.querySelector('main')