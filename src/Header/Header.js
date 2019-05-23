import React from 'react'
import "../Styles.scss"
import styled, { keyframes } from 'styled-components';
import { bounce, tada } from 'react-animations';
import { AnimateOnChange } from 'react-animation'

const tadaAnimation = keyframes`${tada}`

const H_Style = styled.p`
  animation: 1.5s ${tadaAnimation};
  text-align: center;
  color: green;/*#05386b;*/
  letter-spacing: 1em;
  margin: 0.4em -1em 0.2em 0;
  font-size: 1rem;
  text-shadow: 1px 1px 2px black, 0 0 25px green, 0 0 5px darkgreen;
`;
function Header(props) {
  console.log('props: ', props)
  return (
    <div className='header'>
      <H_Style>Hangman</H_Style>
      <AnimateOnChange
          animationIn="fadeIn"
          animationOut="fadeOut"
          durationOut={500}
        >
      <img src={props.myImages[props.wrongAnswers]} alt='img' />  
      </AnimateOnChange>
    </div>
  )
}

export default Header
