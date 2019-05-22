import React, { Component } from "react";
import '../Styles.scss'
export class Guessed extends Component {
  constructor(props) {
    super(props)
  }
  
  guessedWord = () => {
    console.log(this.props.myState.answer.split(""))
    let myGuess = this.props.myState.guess
    console.log('guess: ',this.props.myState.guess)
    return this.props.myState.answer.split("")
      .map(ltr => 
        (this.props.myState.guess.has(ltr) ? ltr : "_")       
      )
  }  
  
  //let guessed = ans.split("")
  //console.log('answer: ', guessed)
  render() {
    let gameOver =  this.props.myState.wrong  >= this.props.myState.maxW;     
    return (
    <div>
      <p>Number Wrong: {this.props.myState.wrong}</p>
      <p className='Hangman-word'>{!gameOver ? this.guessedWord() : this.props.myState.answer}</p>
      {this.guessedWord().join("") === this.props.myState.answer && <p>You Win</p>}
    </div>
    )
  }
}
export default Guessed
