const url = "https://api.punkapi.com/v2/beers"
const container = document.querySelector('.container')
const heart = '❤️'
const likeList = document.querySelector("#list-of-beer")
//console.log(likeList)
let form = document.querySelector("#form-abv")
const beerForm = document.querySelector('form')
//console.log(beerForm)
let beers = []


getAllBeers()
formEventListener()
addNewBeer()


function getAllBeers() {
  return fetch(url)
 .then((res) => res.json())
 .then(function(data) {
  //console.log(data)
     beers = data
     data.forEach((beer) => {
      //console.log(beer)
      renderBeer(beer)
     
     })
    })
 }



//Tells user to input a valid whole number
function formEventListener() {
form.addEventListener('invalid', function(e) {
  //console.log(e)
  
  if(e.target.type = 'invalid') {
    e.target.setCustomValidity('Please input a valid number.');
        }
     })
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
    const cardDiv = document.createElement('div')
    const h3 = document.createElement('h3')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const img = document.createElement('img')
    const btn = document.createElement('button')
    cardDiv.className = 'card'
    
    h3.innerText = beer.name
    p1.innerHTML = beer.tagline
    p2.innerHTML = beer.abv + '% ABV'
    img.src = beer.image_url
    img.className = 'beer-pic'
    btn.className = 'heart'
    btn.innerText = `Add me to the list! ${heart}`
    btn.name = beer.name
    btn.tag = beer.tagline
    btn.abv = beer.abv
  
    container.append(cardDiv)
    cardDiv.append(h3)
    cardDiv.append(p1)
    cardDiv.append(p2)
    cardDiv.append(img)
    cardDiv.append(btn)

//Adds a like button to each card
  btn.addEventListener('click', likeButtonFunction) 
}

//Functionality of the like button
//Adds the beer that is liked to the list of 'Beers I like'

function likeButtonFunction(e) {
    console.log(e)
    //grab beer details from click event
    const likedBeerName = e.target.name
    const likedBeerTag = e.target.tag
    const likedBeerAbv = e.target.abv
    //console.log(likedBeerTag)

    //find beer detail from event and set to variable using empty array
    const beerNameFind = beers.find(b => b.name === likedBeerName)
    const beerTagFind = beers.find(b => b.tagline === likedBeerTag)
    const beerAbvFind = beers.find(b => b.abv === likedBeerAbv)
    //console.log(beerTagFind.tagline)
    const list = document.querySelector("#list-of-beer")
    
    //create p elements for the liked beer details
    let beerName = document.createElement('p')
    let beerTag = document.createElement('p')
    let beerAbv = document.createElement('p')
    beerName.innerHTML = `-${beerNameFind.name}`
    beerTag.innerHTML = `-${beerTagFind.tagline}`
    beerAbv.innerHTML = `-${beerAbvFind.abv} %`
    list.append(beerName, beerTag, beerAbv)
        
    
}

//Adds a beer into the list when inputs are submitted in the form
  function updateList(name, description, abv) {
    let p = document.createElement('p');
    p.innerHTML = `-${name} <br> -${description} <br> -${abv}%`
    likeList.appendChild(p)
    
  }

  