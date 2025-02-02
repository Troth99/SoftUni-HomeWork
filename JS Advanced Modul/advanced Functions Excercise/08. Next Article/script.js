function getArticleGenerator(articles) {


const div = document.getElementById('content');

return function showNext(){
    
    if (articles.length !== 0){
        const articleEl = document.createElement('article')
        let article = articles.shift();
        articleEl.textContent = article
        div.append(articleEl)
    }else {
        return
    }
}


}
