import { creatingElements } from "./utils.js";
const basePostUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts'
const commentUrl = 'http://localhost:3030/jsonstore/collections/myboard/comments'
export function showComments(e) {
    e.preventDefault()
    let titleEl = document.querySelector('.topic-title');
    titleEl.style.display = 'none';

    let topicBorder = document.querySelector('.new-topic-border')
    topicBorder.style.display = 'none'

    const themseContent = document.querySelector('.theme-content')
    themseContent.style.display = 'block'
    let answerComment = document.querySelector('.answer-comment')
    answerComment.style.display = 'block'


    let userPostId;
    if (e.target.tagName === 'a') {
        userPostId.e.target.dataset.id
    } else {
        userPostId = e.target.parentElement.getAttribute('dataset.id')
    }
    loadClickedComments(userPostId)
}

async function loadClickedComments(userPostId) {
    const forlmEL = document.querySelectorAll('form')[1]
    forlmEL.setAttribute('dataset.id', userPostId)
    try {
        const response = await fetch(`${basePostUrl}/${userPostId}`)

        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }

        const post = await response.json()
        console.log(post)


        let themseContent = document.querySelector('.theme-content')
        themseContent.replaceChildren()

        let themeTitleDiv = creatingElements('div', '', themseContent, { 'class': ' theme-title' });
        let themeNameWrapper = creatingElements('div', '', themeTitleDiv, { 'class': ' theme-name-wapper' });
        let divThemeName = creatingElements('div', '', themeNameWrapper, { 'class': 'theme-name' });
        creatingElements('h2', post.title, divThemeName, {});

        let divComment = creatingElements('div', '', themseContent, { "class": 'comment' });
        let divHeader = creatingElements('div', '', divComment, { "class": 'header' });
        creatingElements('img', '', divHeader, { "src": './static/profile.png', 'alt': 'avatar' })
        let pEl = creatingElements('p', '', divHeader, {})
        pEl.innerHTML = `<span>${post.username}</span> posted on <time>${post.createdDate}</time>`;
        creatingElements('p', post.content, divHeader, { 'class': 'post-content' })

        let comments = await getAllComments(userPostId)
        for (const comment of comments) {
            let userCommentDiv = creatingElements('div', '', divComment, { 'id': 'user-comment' })
            let topicNameWrapperDiv = creatingElements('div', '', userCommentDiv, { 'class': 'topic-name-wrapper' });
            let topicNameDiv = creatingElements('div', '', topicNameWrapperDiv, { 'class': 'topic-name' })
            let pEl = creatingElements('p', '', topicNameDiv, {})
            pEl.innerHTML = `<strong>${comment.username}</strong> commented on <time>${comment.createdDate}</time>`
            let divContentPost = creatingElements('div', '', topicNameDiv, { 'class': 'post-content' })
            creatingElements('p', comment.text, divContentPost, {})

        }

    } catch (error) {
        alert(error.message)
    }
}


export async function creatingComments(e) {
    e.preventDefault()
    let formElement = document.querySelectorAll("form")[1];
    const userPostId = formElement.getAttribute('dataset.id')
    const newFormData = new FormData(formElement)
    const comment = newFormData.get('postText');
    const userName = newFormData.get('username')
    const createdDate = new Date()
    try {

        if (!comment) {
            throw new Error('Comment must be filled')
        }
        if (!userName) {
            throw new Error('Current username must be filled')
        }

        const response = await fetch(commentUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: comment, username: userName, postId: userPostId, createdDate })
        })
        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }

        loadClickedComments(userPostId)
        formElement.reset()
    } catch (error) {
        alert(error.message)
    }
}

async function getAllComments(userPostId) {

    try {
        const response = await fetch(commentUrl);

        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }
        const dataComments = await response.json()
        const commentsValues = Object.values(dataComments).filter(comment => comment.postId === userPostId)
        return commentsValues

    } catch (error) {
        alert(error.message)
    }
}