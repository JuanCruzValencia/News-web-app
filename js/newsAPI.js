//fetch a pagina de noticias

async function getNewsData(){
    const resolve = await fetch('https://newsapi.org/v2/everything?q=Apple&from=2022-08-22&sortBy=popularity&apiKey=685dcb3b459241c7afde8894cf2fa3d3');
    const data = await resolve.json();
    getData(data);
};

const spinner = document.querySelector('.lds-hourglass');

function getData(data){
    const newsContainer = document.querySelector('.main__container');
    newsContainer.innerHTML = ' ';
    data.articles.map(article => {
        const card = document.createElement('article');
        card.classList.add('section__notes');
        card.innerHTML = `<figure>
                                <img src='${article.urlToImage}' alt='${article.author}'/>
                                <figcaption>${article.author}</figcaption>
                            </figure>
                            <h4>${article.title}</h4>
                            <p>${article.description}</p>`
        newsContainer.appendChild(card);
    });
}

setTimeout(()=>{
    spinner.style.display = 'none';
    getNewsData();
}, 4000)

//Filtrando articulos 
const artSearch = document.getElementById('input_search');
document.getElementById('btn_search').addEventListener('click', () =>{
    filterArticles(artSearch.value);
});

function filterArticles(artSearch){
    fetch(`https://newsapi.org/v2/everything?q=${artSearch}&from=2022-08-22&sortBy=popularity&apiKey=685dcb3b459241c7afde8894cf2fa3d3`)
    .then(resolve => resolve.json())
    .then(data => {
        spinner.style.display = 'inline-block';
        setTimeout(()=>{
            spinner.style.display = 'none';
            getData(data);
        }, 5000)
    });
} 


