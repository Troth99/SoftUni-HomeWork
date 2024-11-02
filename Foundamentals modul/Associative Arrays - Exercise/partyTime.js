function partyTIme(arr){


    let guests = []

    let currentGuest = arr.shift()

    while (currentGuest !== `PARTY`){
     guests.push(currentGuest)
    currentGuest = arr.shift()
    }


if (currentGuest === `PARTY`){

    for (let invitedGuest of arr){


      let index = guests.indexOf(invitedGuest)
      if (index !== -1){
        guests.splice(index, 1)
      }
    }
}

let notCommingVIPs = []
let notCommingRegular = []

for (let guest of guests){
    if (guest[0] >= `0` && guest[0] <= `9`){
        notCommingVIPs.push(guest)
    }else {
        notCommingRegular.push(guest)
    }
}

console.log(guests.length);

for (let i = 0; i < notCommingVIPs.length; i++) {
    console.log(notCommingVIPs[i]);
}


for (let i = 0; i < notCommingRegular.length; i++) {
    console.log(notCommingRegular[i]);
}


}


partyTIme(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
    ]
    
    
    )