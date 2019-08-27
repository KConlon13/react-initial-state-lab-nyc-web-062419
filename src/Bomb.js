// your Bomb code here!
import React from 'react';


class Bomb extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render(){
        let timerMessage = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`

        return (
           <div>
               {timerMessage}
           </div> 
        )
    }
}

export default Bomb;