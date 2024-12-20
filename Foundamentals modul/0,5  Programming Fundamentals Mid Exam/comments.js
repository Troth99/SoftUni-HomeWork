function solve(input) {
    const users = new Set();
    const articles = new Set();
    const articleComments = {};

    for (const line of input) {
        if (line.startsWith("user ")) {
        
            const username = line.split("user ")[1];
            users.add(username);
        } else if (line.startsWith("article ")) {
      
            const articleName = line.split("article ")[1];
            articles.add(articleName);
        } else {
 
            const [userInfo, commentInfo] = line.split(": ");
            const [username, articleName] = userInfo.split(" posts on ");

            if (users.has(username) && articles.has(articleName)) {
                const [commentTitle, commentContent] = commentInfo.split(", ");

                if (!articleComments[articleName]) {
                    articleComments[articleName] = [];
                }

                articleComments[articleName].push({
                    username,
                    title: commentTitle,
                    content: commentContent,
                });
            }
        }
    }


    const sortedArticles = Object.keys(articleComments).sort(
        (a, b) => articleComments[b].length - articleComments[a].length
    );


    const result = [];

    for (const article of sortedArticles) {
        result.push(`Comments on ${article}`);

        const sortedComments = articleComments[article].sort((a, b) =>
            a.username.localeCompare(b.username)
        );

        for (const { username, title, content } of sortedComments) {
            result.push(`--- From user ${username}: ${title} - ${content}`);
        }
    }

    console.log(result.join("\n"));
}




solve(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 
    'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 
    'uSeR4 posts on Movies: I also like movies, I really do', 
    'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much'])