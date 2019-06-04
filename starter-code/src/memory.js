class MemoryGame {
  
  constructor(card){ //a constructor function that returns an object
    this.cards = cards;
    this.pickedCards={};//where we will be storing the cards the user have clicked so we can compare them
    this.pairsClicked=0; //where will be adding every time a user choose a pair.
    this.pairsGuessed=0; //where will be adding every time a user guess a pair.
  
  }

    shuffleCards() 
    {
      let l=cards.length;
      for (let i=l-1; i>=0; i--)
      {
        let j=Math.floor(Math.random()*(i+1));
        [ cards[j], cards[i] ] = [ cards[i], cards[j] ]
      }
      //return cards
    } 
    
    checkIfPair(card1Name, card2Name) {
      this.pairsClicked+=1
      var res=false; 
      if (card1Name==card2Name)
      {
        this.pairsGuessed+=1;
        res=true
      }
      else{res=false}
      return res
    }
    
    isFinished() {
      let nbPairs=this.cards.length/2;
      var res=false
      if (this.pairsGuessed==nbPairs){res= true}
      else {res=false}
      return res
    }
  }