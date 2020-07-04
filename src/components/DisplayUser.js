import React from 'react'
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DisplayUser extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        let whatToDisplay
        this.props.userFound? whatToDisplay = <div>
          <img src={this.props.userInfo.avatar}/>
          <h3>{this.props.userInfo.name}</h3>
          <p>User's repositories{this.props.userInfo.repos}</p>
        </div> 
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