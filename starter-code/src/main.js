var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

memoryGame.shuffleCards(); //shuffling


document.addEventListener("DOMContentLoaded", function(event) { 
  var html = '';
  var pairsClicked=document.getElementById("pairs_clicked")
  var pairsGuessed=document.getElementById("pairs_guessed")
  var card1=null; 
  var card2=null; 


  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });


// reset game
  function resetGame(cards){
    memoryGame.cards.forEach((card)=>{
      hide(card)
    })
  }

// reset cards
  function reset(){
    card1=null;
    card2=null;
  }

  // hide cards
  function hide(card){
    //card.previousElementSibling.classList.replace('front', 'back')
    card.classList.replace('front', 'back')
    card.nextElementSibling.classList.replace('back', 'front')
  }

  // show cards 
  function show(card){
    card.classList.replace('back', 'front')
    card.nextElementSibling.classList.replace('front', 'back')
  }
  
  
  
  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;
 

  // Bind the click event of each element to a function
  cards=document.querySelectorAll('.back').forEach(function(card) {

    memoryGame.shuffleCards()
    console.log("shuffled")
 
          card.onclick = function flip(evt) 
          {
              console.log(" clicked card: ", card)
                //show card

                if (!card1) {card1=card;  show(card1)}
                else {card2=card;show(card2)}

                console.log("card1 : ",card1)
                console.log("card2 : ", card2)

                if (card1 && card2)
                {       
                    console.log("both selected")               
                    console.log("------ let compare the cards")
                    console.log("card 1 name : ", card1.getAttribute("name"))
                    console.log("card 2 name : ", card2.getAttribute("name"))
                    console.log(card1.getAttribute("name")==card2.getAttribute("name"))
                    found=memoryGame.checkIfPair(card1.getAttribute("name")), card2.getAttribute("name")

                    document.getElementById("pairs_clicked").textContent=memoryGame.pairsClicked
                    console.log("number of clicks :", memoryGame.pairsClicked)
                    if (card1.getAttribute("name")==card2.getAttribute("name"))
                    {
                      memoryGame.pairsGuessed+=1
                      document.getElementById("pairs_guessed").textContent=memoryGame.pairsGuessed
                      console.log("matched !")
                      console.log("number of rigth guesses :", memoryGame.pairsGuessed )
                    }
                    else
                    {
                      console.log("hide cards")
                      hide(card1)
                      hide(card2)
                    }
                    reset()
                  }             
        }
    if (memoryGame.isFinished()){console.log("well done !"); resetGame()}

  });


});


