

const url = "https://api.punkapi.com/v2/beers"
 
const container = document.querySelector('.container')
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const heart = '❤️'

const likeList = document.querySelector("#liked")
console.log(likeList)
 
getAllBeers();


window.addEventListener('scroll', () => {
    console.log(window.scrollY)
})

 
function main() {
  addLikeButtons();
  
  

  

  const beerForm = document.querySelector('form')
  //console.log(beerForm)
 
  beerForm.addEventListener('submit', (e) => {
      e.preventDefault()
      updateList(e.target.name.value, e.target.description.value, e.target.abv.value)
      beerForm.reset()
      
  })
}
 
function addLikeButtons() {
  document.querySelectorAll('.try').forEach(e => e.addEventListener('click', () => console.log("hello1234")));
}

 
function getAllBeers() {
     return fetch(url)
    .then((res) => res.json())
    .then(function(data) {
        data.map(b => renderBeer(b))
    }).then(main);
}
 
    function renderBeer(beer) {
    const beerCard = `<div class='card'>
    <h2> ${beer.name} <br>
    <p> ${beer.tagline} <br>
    <p> ${beer.abv}% ABV </p>
    </p></h2>
    <img src=${beer.image_url} class='beer-pic' />
    <footer>
    <ul>
    <li> Favorite Me!
    <button class='try'> ${heart} </button>
    </li>
    </ul>
    </footer>
    </div>
    `
    container.innerHTML += beerCard;
 
  }

  function updateList(name, description, abv) {
    let p = document.createElement('p');
    p.innerHTML = `${name} <br> ${description} <br> ${abv}`
    likeList.appendChild(p)
    
    
  }

