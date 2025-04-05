import { get, post } from "../api/requester.js";

export async function getAllStampLikes(stampsId){
    const result = await get(`http://localhost:3030/data/likes?where=stampsId%3D%22${stampsId}%22&distinct=_ownerId&count`)
    return result
}

export async function getLieksByUser(stampId, userId){
    const result = await get(`http://localhost:3030/data/likes?where=stampsId%3D%22${stampId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
    return Boolean(result)
}

export async function onLike(stampsId){
    const body = {
        stampsId
    }
    const liked = await post(`http://localhost:3030/data/likes`, body)
    return liked
}