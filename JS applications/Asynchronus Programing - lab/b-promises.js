
//Promise е обект в JavaScript, който представлява асинхронна операция. Той обещава (promise) да върне резултат в бъдеще – успех (resolved) или грешка (rejected).
function proposal() {

    const promise = new Promise(function (resolve, reject) {
        console.log('Will you marry me?')

        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve('Yess!')
            } else {
                reject('No, its not you, its me!')
            }
        }, 3500);
    })

    return promise
}

// const promise = proposal()

// promise.then((result) => {
//     console.log(result)
// }).catch(function (error) {
//     console.log(error)
// })

//Promise.all

const firstProposal = proposal();
const secondProposal = proposal();
const thirdProposal = proposal();
const fourthProposal = proposal();

//resolve only if all promises resolves;

const groupedProposal = Promise.all([
    firstProposal,
    secondProposal,
    thirdProposal,
    fourthProposal
])
groupedProposal.then(function (result) {
    console.log(result)
}).catch(function (err) {
    console.log(err)
}).finally(function () {
    console.log('I da padnem i da biem...')
})



