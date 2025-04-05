import { del, get, post, put } from "../api/requester.js"
import { baseStampUrl, stampUrl } from "../constants/constants.js"
import { page } from "../constants/lib.js"


export async function getAllCollectionData(){

    const result = get(stampUrl)
    return result
}

export async function getStampById(id){
    const result = get(`${baseStampUrl}/${id}`)
    return result
}

export async function createStampHandler(e){
    e.preventDefault()
    const stampFormData = new FormData(e.currentTarget)
    const data = Object.fromEntries(stampFormData)

    const imageUrl = stampFormData.get('image-url-input')
    const name = stampFormData.get('name-input')
    const year = stampFormData.get('year-input');
    const learnMore = stampFormData.get('more-info-textarea')
    
    const input = [
        imageUrl,
        name,
        year,
        learnMore
    ]

    const isEmpty = input.some(val => val === '')

    if(isEmpty){
        return alert('Please fill all fields!')
    }

    const body = {
        name,
        imageUrl,
        year,
        learnMore
    }

    const result = await post(baseStampUrl, body)
    console.log(result)
    page.redirect('/collection')
}

export async function editHandler(e, stampId){
    e.preventDefault()
    const stampFormData = new FormData(e.currentTarget)
    const imageUrl = stampFormData.get('image-url-input')
    const name = stampFormData.get('name-input')
    const year = stampFormData.get('year-input');
    const learnMore = stampFormData.get('more-info-textarea')
    
    const input = [
        imageUrl,
        name,
        year,
        learnMore
    ]

    const isEmpty = input.some(val => val === '')

    if(isEmpty){
        return alert('Please fill all fields!')
    }

    const body = {
        name,
        imageUrl,
        year,
        learnMore
    }

    const result = await put(`${baseStampUrl}/${stampId}`, body)
    console.log(result)
    page.redirect(`/details/${stampId}`)
}

export async function deleteStamp(e, stampId){

    const confimed = confirm('Are you sure u want to delete the stamp ?')

    if(!confimed){
        return
    }
    await del(`${baseStampUrl}/${stampId}`)
    page.redirect('/collection')
}
