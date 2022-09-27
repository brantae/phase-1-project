

const url = "https://api.punkapi.com/v2/beers"
 
const container = document.querySelector('.container')
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const heart = '❤️'




function getAllBeers() {
  return fetch(url)
 .then((res) => res.json())
 .then(function(data) {
  console.log(data)
     data.map(b => renderBeer(b))
 })
 .then(addLikeButtons);

 //
}
getAllBeers()



const likeList = document.querySelector("#liked")
//console.log(likeList)
 

let form = document.querySelector("#form-abv")
    form.addEventListener('invalid', function(e) {
      //console.log(e)
      
      if(e.target.type = 'invalid') {
        e.target.setCustomValidity('Please input a valid number.');
      }
      }
    )

      form.addEventListener('change', function (event) {
        event.target.setCustomValidity('');
      })

 


  
  

  

  const beerForm = document.querySelector('form')
  //console.log(beerForm)
 
  beerForm.addEventListener('submit', (e) => {
      e.preventDefault()
      updateList(e.target.name.value, e.target.description.value, e.target.abv.value)
      beerForm.reset()
      
  })

 
// function addLikeButtons() {
  
//   document.querySelectorAll('.try').forEach( (btn) =>
//    {
//     //console.log(btn)
//     btn.addEventListener('click', (e) => {
//     //console.log('click')
//     console.log(e)
//     updateList()
//   })
// }
// )

// }


 

 
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

    document.querySelectorAll('.try').forEach( (btn) =>
       {
        //console.log(btn)
        btn.addEventListener('click', (e) => {
        //console.log('click')
        console.log(e)
        updateList()
        
      })
     })
    }
    

  function updateList(name, description, abv) {
    let p = document.createElement('p');
    
    p.innerHTML = `${name} <br> ${description} <br> ${abv}%`
    likeList.appendChild(p)
    
    
  }

