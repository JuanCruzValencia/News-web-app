//fetch a pagina de noticias para obtener los datos
async function getNewsData() {
  const resolve = await fetch(
    "https://gnews.io/api/v4/search?q=javascript&token=17e743a1414b2b389fcf5e3237b590f7"
  );
  const data = await resolve.json();
  getData(data);
}
//Guardo en una variable el spinner mientras se cargan los datos de la API
const spinner = document.querySelector(".lds-hourglass");
//funcion que toma los datosd e la api y los muestra en unas tarjetas
function getData(data) {
  const newsContainer = document.querySelector(".main__container");
  newsContainer.innerHTML = " ";
  data.articles.map((article) => {
    const card = document.createElement("article");
    card.classList.add("article__sectionNotes");
    card.innerHTML = `<figure>
                                <img src='${article.image}' alt='${article.title}'/>
                                <figcaption>${article.publishedAt}</figcaption>
                            </figure>
                            <h4>${article.title}</h4>
                            <p>${article.description}</p>`;
    newsContainer.appendChild(card);
  });
}
//llama al spinner hasta que se cargan los datos
setTimeout(() => {
  spinner.style.display = "none";
  getNewsData();
}, 4000);

//Llamo al input para darle el evento de filtrado
const artSearch = document.getElementById("input_search");
document.getElementById("btn_search").addEventListener("click", () => {
  filterArticles(artSearch.value);
});
//funcion que filtra los articulos por la palabra ingresada en el endpoint
function filterArticles(artSearch) {
  fetch(
    `https://gnews.io/api/v4/search?q=${artSearch}&token=17e743a1414b2b389fcf5e3237b590f7`
  )
    .then((resolve) => resolve.json())
    .then((data) => {
      spinner.style.display = "inline-block";
      setTimeout(() => {
        spinner.style.display = "none";
        getData(data);
      }, 5000);
    });
}