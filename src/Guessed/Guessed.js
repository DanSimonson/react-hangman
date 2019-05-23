import React, { Component } from "react";
import '../Styles.scss'
import styled, { keyframes } from 'styled-components';
import { bounce, tada } from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;
const tadaAnimation = keyframes`${tada}`
const BouncyP = styled.p`
  animation: 1.5s ${bounceAnimation};
  font-size:2rem;
  color: green;
  text-shadow: 1px 1px 2px black, 0 0 25px green, 0 0 5px darkgreen;
`;
const H_Style = styled.p`
  animation: 1.5s ${tadaAnimation};
  text-align: center;
  color: green;
  letter-spacing: 1em;
  margin: 0.4em -1em 0.2em 0;
  font-size: 1rem;
  text-shadow: 1px 1px 2px black, 0 0 25px green, 0 0 5px darkgreen;
`;
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
  
  render() {
    let gameOver =  this.props.myState.wrong  >= this.props.myState.maxW;     
    return (
    <div>
      <H_Style>Number Wrong: {this.props.myState.wrong} </H_Style>
      <H_Style className='Hangman-word' >{!gameOver ? this.guessedWord() : this.props.myState.answer}</H_Style>
      {this.guessedWord().join("") === this.props.myState.answer && <BouncyP>You Win</BouncyP>}
    </div>
    )
  }
}
export default Guessed
