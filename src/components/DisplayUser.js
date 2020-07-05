import React from 'react'
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import User from './User'

class DisplayUser extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        let whatToDisplay
        this.props.userFound? whatToDisplay = <User userInfo={this.props.userInfo}/>
        : whatToDisplay = <div>
          <h2>No matches</h2>
          <FontAwesomeIcon style={Warning} icon={faExclamationCircle}/>
        </div>
        
        return(
            <div>
                {whatToDisplay}
            </div>
        )
    }
}

let Warning = {
    color: 'tomato',
    fontSize: '15vh'
}

export default DisplayUser