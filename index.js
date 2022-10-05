const url = "https://api.punkapi.com/v2/beers"
const container = document.querySelector('.container')
const heart = '❤️'
const likeList = document.querySelector("#liked")
//console.log(likeList)
let form = document.querySelector("#form-abv")
const beerForm = document.querySelector('form')
//console.log(beerForm)

getAllBeers()
formEventListener()
addNewBeer()

function getAllBeers() {
  return fetch(url)
 .then((res) => res.json())
 .then(function(data) {
  //console.log(data)
     data.forEach((beer) => {
      //console.log(beer)
      renderBeer(beer)
      
     })
     
 })
 .then(addLikeButtons);
}


//Tells user to input a valid whole number
function formEventListener() {
form.addEventListener('invalid', function(e) {
  //console.log(e)
  
  if(e.target.type = 'invalid') {
    e.target.setCustomValidity('Please input a valid number.');
  }
  }
)

}

//Inputs new beer into list from the form
function addNewBeer() {
  beerForm.addEventListener('submit', (e) => {
      e.preventDefault()
      console.log('')
      updateList(e.target.name.value, e.target.description.value, e.target.abv.value)
      beerForm.reset()
      
  })
}

//Adds like buttons to each beer card
function addLikeButtons() {
  
  let button = document.querySelectorAll('.try')
  //console.log(button)
    button.forEach((btn) =>
   {
    
    btn.addEventListener('click', (e) => {
    console.log('click')
    console.log(e)
    console.log(btn)
    updateList(name, description, abv)


    
    })
  })

  
}


//Renders each beer card from API
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

//Adds a beer from the cards into the list of liked beers when heart is clicked
  function updateList(name, description, abv) {
    
    let p = document.createElement('p');
    
    p.innerHTML = `•${name} <br> •${description} <br> •${abv}%`
    likeList.appendChild(p)
    
  }

