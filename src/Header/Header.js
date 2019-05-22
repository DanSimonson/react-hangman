import React from 'react'

function Header(props) {
  console.log('props: ', props)
  return (
    <div>
      <h1>Hangman</h1>
      <img src={props.myImages[props.wrongAnswers]} alt='img' />  
    </div>
  )
}

export default Header
