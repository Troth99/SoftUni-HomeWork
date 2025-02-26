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


async function groupedProposal(){
    console.log('Before proposal');
    try {
        const result = await proposal();
        console.log(result)
        console.log('After proposal')

    }
    catch (error){
        console.log(error)
    }
}
console.log('Before Group proposal');
groupedProposal()

console.log('After Group proposal proposal')