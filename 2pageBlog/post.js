document.addEventListener('DOMContentLoaded', async function() {
    const params = new URLSearchParams(document.location.search);
    const id = parseInt(params.get("id"));
    const body = document.body;
    const commentContainer = document.createElement('div')
    const header = document.createElement('h1');
    const post = document.createElement('p');

    commentContainer.classList.add('comment-container');
    body.append(commentContainer)


    async function getArticle() {
        const response = await fetch(`https://gorest.co.in/public-api/posts/${id} `, {
                method: "GET",
            }).then((response) => {
                return response.json();
            })
            .then((data) => {
                return data
            });
        makeArticle(response.data)
    }

    async function getComment() {
        const comment = await fetch(`https://gorest.co.in/public-api/comments?post_id=${id}`, {
                method: "GET",
            }).then((response) => {
                return response.json();
            })
            .then((data) => {
                return data
            })
        makeComment(comment.data)
    }


    function makeArticle(articleList) {
        header.textContent = articleList.title
        post.textContent = articleList.body
        body.appendChild(post);
        body.appendChild(header);
    }



    function makeComment(commentList) {
        for (user of commentList) {
            const commentList = document.createElement('ul');
            const nameUser = document.createElement('li')
            nameUser.textContent = user.name;
            const emailUser = document.createElement('li')
            emailUser.textContent = user.email;
            const commentUser = document.createElement('li')
            commentUser.textContent = user.body;
            commentList.append(nameUser, emailUser, commentUser);
            console.log(commentContainer)
            commentContainer.append(commentList)

        }
    }
    getArticle()
    getComment()

})