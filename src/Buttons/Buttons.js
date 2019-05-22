import React, { Component } from 'react'
import '../Styles.scss'
export class Buttons extends Component {
  constructor(props){
    super(props)
    this.state = {
      test: ''
    }
  }
 

  render() {
    return (
      <div className='Hangman'>
        <div className='restartWrap'> 
        <p id='restart' onClick={this.props.triggerRestart}> restart button </p> 
        </div>       
      </div>
    )
  }
}

export default Buttons
