function attachEvents() {

    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments'

    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const btnViewPosts = document.getElementById('btnViewPost')
    
    const postTitleEl = document.getElementById('post-title');
    const postsEl = document.getElementById('posts')
    const postBodyEl = document.getElementById('post-body');
    const commentsEl = document.getElementById('post-comments')

    btnLoadPosts.addEventListener('click', postRequests)
    btnViewPosts.addEventListener('click', gettingData)

  
    async function postRequests(e) {
        try {
            const response = await fetch(postsUrl);
            const data = await response.json()
            let entries = Object.entries(data)

            for (const element of entries) {
                const optionEL = document.createElement('option')
                optionEL.value = element[0];
                optionEL.textContent = element[1].title
                postsEl.appendChild(optionEL)
            }
        } catch (err) {
            throw new Error('Error')
        }
    }
   
    async function gettingData() {
        const selectedPostId = postsEl.value;
    
        try {
            const responseFromPost = await fetch(postsUrl);
            const dataFromPost = await responseFromPost.json();
    
            const responseFromComments = await fetch(commentsUrl);
            const dataFromComments = await responseFromComments.json();
    
       
            const selectedPost = dataFromPost[selectedPostId];

            postTitleEl.textContent = selectedPost.title;
            postBodyEl.textContent = selectedPost.body;
            commentsEl.innerHTML = '';
    
            const comments = Object.values(dataFromComments).filter(comment => comment.postId === selectedPostId);
    
                comments.forEach(comment => {
                    const li = document.createElement('li');
                    li.textContent = comment.text;
                    commentsEl.appendChild(li);
                });
           
    
        } catch (error) {
            console.error(error);
        }
    }
    
}

attachEvents();