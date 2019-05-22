import React, { Component } from "react";
import "./Hangman.scss";
import "../Styles.scss"
import Guessed from "../Guessed/Guessed";
import Buttons from "../Buttons/Buttons"
import Header from "../Header/Header"
import img0 from '../Assets/Images/h1.png'
import img1 from '../Assets/Images/h2.png'
import img2 from '../Assets/Images/h3.png'
import img3 from '../Assets/Images/h4.png'
import img4 from '../Assets/Images/h5.png'
import img5 from '../Assets/Images/h6.png'
import img6 from '../Assets/Images/hh.png'
import Words, { randomWord } from '../Assets/Words/Words'

class Hangman extends Component {
  static defaultProps = {
    images: [img0, img1, img2, img3, img4, img5, img6]
  }

  constructor(props) {
    super(props)
    this.state = {
      maxW: 6,
      wrong: 0,
      guess: new Set(),
      answer: randomWord(),
      images: [img0, img1, img2, img3, img4, img5, img6]

    }
  }
  generateButtons = () => {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guess.has(ltr)}
      >
        {ltr}
      </button>
    ))
  }
  handleGuess = (evt) => {
    let ltr = evt.target.value;
    this.setState(prevState => ({
      guess: prevState.guess.add(ltr),
      wrong: prevState.wrong + (prevState.answer.includes(ltr) ? 0 : 1)
    }))
  }
  restart= () => {
    this.setState({
      wrong: 0,
      guess: new Set(),
      answer: randomWord()
    })
  }

  render() {
    let gameState = this.generateButtons();
    let gameOver =  this.state.wrong  >= this.state.maxW;
    console.log('wrong: ', this.state.wrong)
    console.log('maxW: ', this.state.maxW)
    console.log('answer: ', this.state.answer)
    console.log('gameOver: ', gameOver)
    return (
      <div className='hangman'>
        <Header
        wrongAnswers={this.state.wrong}
        myImages={this.state.images}        
        />
        <Guessed  myState={this.state}/>
        {!gameOver && <p className='Hangman-btns'>{this.generateButtons()}</p>}
        <Buttons myState={this.state} triggerRestart={this.restart}/>
      </div>
    )
  }
}
export default Hangman