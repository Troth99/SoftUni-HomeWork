export const headerEl = document.querySelector('header');
export const mainEL = document.getElementById('content');


export const baseUrl = 'http://localhost:3030'

export const endpoints = {
    loginUrl: baseUrl + '/users/login',
    registerUrl: baseUrl + '/users/register',
    logoutUrl: baseUrl + '/users/logout',
    dashboardUrl: baseUrl + '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    createUrl: baseUrl + '/data/pets',
    petUrl: baseUrl + '/data/pets'
}