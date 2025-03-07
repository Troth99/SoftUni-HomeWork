import { creatingElements } from "./utils.js"
import { showComments } from "./details.js";

const basePostUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts'

export async function showHomePage(e){
    e?.preventDefault()
    let titleEl = document.querySelector('.topic-title');
    titleEl.style.display = 'block';
     let topicBorder = document.querySelector('.new-topic-border')
    topicBorder.style.display = 'block'
    
 
    let topicDivElement = document.getElementsByClassName('theme-content')[0];
    topicDivElement.style.display = 'none';

    let answerComment = document.querySelector('.answer-comment')
    answerComment.style.display = 'none'
  
    await loadPosts()
}

export function onCancel(e) {
    e.preventDefault()
    const formEl = document.querySelector('form')
    formEl.reset()
   
}

export async function createPost(e) {
    e.preventDefault()
    let formEl = document.querySelector('form')
    let newFormData = new FormData(formEl)
    let title = newFormData.get('topicName').trim();
    let username = newFormData.get('username').trim();
    let content = newFormData.get('postText').trim();
    let createdDate = new Date()

    try {

        if (!title) {
            throw new Error('Title must be filled')
        }
        else if (!username) {
            throw new Error('Username must be filled')
        }
        else if (!content) {
            throw new Error('Post must be filled')
        }

        const response = await fetch(basePostUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, username, content, createdDate })
        })
        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.message);
        }
        const data = await response.json()


        formEl.reset()
        await loadPosts()
    } catch (error) {
        alert(error.message)
    }


}


async function loadPosts() {
    let divTitleName = document.querySelector('.topic-title')
    divTitleName.replaceChildren();

    try {
        const response = await fetch(basePostUrl);

        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }

        const posts = await response.json()
        const postValues = Object.values(posts)

        for (const post of postValues) {
            const postId = post._id

            let topicContainerDIvEl = creatingElements('div', '', divTitleName, {'class': 'topic-container'})
            let topicNameWrapper = creatingElements('div', '', topicContainerDIvEl, {'class': 'topic-name-wrapper'});
            let topicNameDiv = creatingElements('div', '', topicNameWrapper, {'class': 'topic-name'});
            let anchorHref = creatingElements('a', '', topicNameDiv, {'href': '#', 'class' : 'normal', 'dataset.id': postId});
            anchorHref.addEventListener('click', showComments)
            let h2El = creatingElements('h2', post.title, anchorHref, {});
            let divColums = creatingElements('div', '', topicNameDiv, {'class': 'columns'});
            let divForColums = creatingElements('div', '', divColums, {});
            let pElDate = creatingElements('p', 'Date: ', divForColums, {});
            creatingElements('time', post.createdDate, pElDate, {})
            let divNickName = creatingElements('div', '', divForColums, {'class': 'colnick-name'});
            let pElUsername = creatingElements('p', 'Username: ' , divNickName, {})
            creatingElements('span', post.username , pElUsername, {})
        }
        
    
    } catch (error) {
        alert(error.message)
    }
}