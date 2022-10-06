const url = "https://api.punkapi.com/v2/beers"
const container = document.querySelector('.container')
const heart = '❤️'
const likeList = document.querySelector("#list-of-beer")
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
 .then(addLikeButton)
 
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
      updateList(e.target.name.value, e.target.description.value, e.target.abv.value)
      beerForm.reset()
      
  })
}


//Renders each beer card from API
function renderBeer(beer) {
  const beerCard = `<div class='card'>
  <h3> ${beer.name} <br>
  <p> ${beer.tagline} <br>
  <p> ${beer.abv}% ABV </p>
  </p></h3>
  <img src=${beer.image_url} class='beer-pic' /> `
  
  container.innerHTML += beerCard;
}

//Adds a like button to each card
function addLikeButton() {
  let cards = document.querySelectorAll('.card')
  //console.log(cards)


  cards.forEach(card => {
  let footer = document.createElement('footer')
  let ul = document.createElement('ul')
  let li = document.createElement('li')
  let button = document.createElement('button')
  button.className = 'heart'
  button.innerText = `Add me to the list! ${heart}`


  //console.log(card)
  card.append(footer)
  footer.appendChild(ul)
  ul.appendChild(li)
  li.append(button)

//when like button is clicked, add beer detail to list
  card.addEventListener('click', () => addLikedToList())
  
})

   
  
}

//Functionality of the like button
//Adds the beer that is liked to the list of 'Beers I like'
function addLikedToList() {
  let likedBeer = document.querySelectorAll('h3')
  //console.log(likedBeer)
  let likedBeerArray = [...likedBeer] //turns node list of beer cards into accessible array
  //console.log(likedBeerArray)


  let beerDetails = likedBeerArray.map(beer => beer.innerHTML) //grabs each innerHTML from the array of beers
  //console.log(beerDetails)

  let p = document.createElement('p');
    p.className = 'liked-beer'
    p.innerHTML = `${beerDetails}` 
    likeList.appendChild(p)

}


//Adds a beer into the list when inputs are submitted in the form
  function updateList(name, description, abv) {
    let p = document.createElement('p');
    p.innerHTML = `${name} <br> ${description} <br> ${abv}%`
    likeList.appendChild(p)
    
  }

  