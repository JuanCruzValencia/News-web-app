//fetch a pagina de noticias

async function getNewsData(){
    const resolve = await fetch('https://gnews.io/api/v4/search?q=javascript&token=17e743a1414b2b389fcf5e3237b590f7');
    const data = await resolve.json();
    getData(data);
};

const spinner = document.querySelector('.lds-hourglass');

function getData(data){
    const newsContainer = document.querySelector('.main__container');
    newsContainer.innerHTML = ' ';
    data.articles.map(article => {
        const card = document.createElement('article');
        card.classList.add('article__sectionNotes');
        card.innerHTML = `<figure>
                                <img src='${article.image}' alt='${article.title}'/>
                                <figcaption>${article.publishedAt}</figcaption>
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
    fetch(`https://gnews.io/api/v4/search?q=${artSearch}&token=17e743a1414b2b389fcf5e3237b590f7`)
    .then(resolve => resolve.json())
    .then(data => {
        spinner.style.display = 'inline-block';
        setTimeout(()=>{
            spinner.style.display = 'none';
            getData(data);
        }, 5000)
    });
} 


