function extractEmails(text){

let email = /\s([a-z0-9][\.\_\-a-z0-9]*[a-z0-9])@([a-z0-9][\.\-a-z0-9]*[a-z0-9])\.[a-z]{2,}/g

let matchedMail = Array.from(text.matchAll(email))

for (let email of matchedMail){
    console.log(email[0]);
}


}


extractEmails(`Please contact us at: support@github.com.`)