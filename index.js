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
likeButtonFunction()

function getAllBeers() {
  return fetch(url)
 .then((res) => res.json())
 .then(function(data) {
  //console.log(data)
     data.forEach((beer) => {
      //console.log(beer)
      renderBeer(beer)
     //debugger; 
     
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
    //btn.addEventListener('click', () => addLikeButton())
  
    container.append(cardDiv)
    cardDiv.append(h3)
    cardDiv.append(p1)
    cardDiv.append(p2)
    cardDiv.append(img)
    cardDiv.append(btn)


//Adds a like button to each card
  //let heartButton = document.querySelector('.heart')
  btn.addEventListener('click', () => likeButtonFunction()) //anonymous in-line function
}

//Functionality of the like button
//Adds the beer that is liked to the list of 'Beers I like'

function likeButtonFunction() {
    
    let cards = document.querySelectorAll('.card')

    cards.forEach((c, i) => {
        let name = document.getElementsByTagName('h3')[ i ].innerHTML
        console.log(name)
        const list = document.querySelector("#list-of-beer")
    
    
        let p = document.createElement('p')
        p.innerHTML = `${name}`
        list.append(p)
        
    })
}




// function addLikedToList() {
//   let likedBeer = document.querySelectorAll('h3')
//   //console.log(likedBeer)
//   let likedBeerArray = [...likedBeer] //turns node list of beer cards into accessible array
//   console.log(likedBeerArray)

//grabs each innerHTML from the array of beers
//   let beerDetails = likedBeerArray.map(beer => beer.innerText) //arrow function
//   console.log(beerDetails)

//   let p = document.createElement('p');
//     p.className = 'liked-beer'
//     p.innerHTML = `${beerDetails}` 
//     likeList.appendChild(p)

//}


//Adds a beer into the list when inputs are submitted in the form
  function updateList(name, description, abv) {
    let p = document.createElement('p');
    p.innerHTML = `${name} <br> ${description} <br> ${abv}%`
    likeList.appendChild(p)
    
  }

  