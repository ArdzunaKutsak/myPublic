document.addEventListener('DOMContentLoaded', function() {
    const main = document.getElementsByTagName('main')[0];
    const nav = document.querySelector('.link-pages');
    const params = new URLSearchParams(document.location.search);
    let page = parseInt(params.get("page"));

    if (!page)
        page = 1;

    function linkList(articleList) {
        for (article of articleList) {
            const link = document.createElement('a');
            link.textContent = article.title;
            link.classList.add('link')
            link.href = `post.html?id=${article.id}`;
            link.target = 'new'
            main.appendChild(link)

        }
    }

    async function getResponse() {
        const response = await fetch(`https://gorest.co.in/public-api/posts?page=${page}`, {
                method: "GET",
            }).then((response) => {
                return response.json();
            })
            .then((data) => {
                return data
            });
        linkList(response.data);


    }

    function pageNavigation() {
        for (let i = page - 5; i < page + 5; i++) {
            if (i <= 0) continue;
            const pageLink = document.createElement('a');
            pageLink.textContent = i;
            pageLink.href = `index.html?page=${i}`;
            nav.appendChild(pageLink)
        }
    }
    getResponse()
    pageNavigation()
})