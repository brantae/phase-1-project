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


/*
likeList.addEventListener('click', addLikedToList(beer))
*/

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
 //.then(addLikedToList)
 

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

  card.addEventListener('click', (e) => {
    console.log('click')
    console.log(e)
    addLikedToList()
  })
  })

   
  
}

//Functionality of the like button
//Adds the beer that is liked to the list of 'Beers I like'
function addLikedToList(beer) {
  let likedBeer = document.querySelectorAll('h3')
  //let likeBeerArray = [...likedBeer]
  likedBeer.forEach(beer => {
    //prints the name, description, and volume from each card
    //console.log(beer)
    h3 = beer
  })
  let p = document.createElement('p');
    p.className = 'liked-beer'
    p.innerHTML = `${h3}`//liked beer
    likeList.appendChild(p)

}



//Adds a beer into the list when inputs are submitted in the form
  function updateList(name, description, abv) {
    
    let p = document.createElement('p');
    p.innerHTML = `•${name} <br> •${description} <br> •${abv}%`
    likeList.appendChild(p)
    
  }

  