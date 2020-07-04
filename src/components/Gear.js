import React from 'react';
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Gear extends React.Component {
    constructor(props){
        super(props)
        this.changeColor = this.changeColor.bind(this)

        this.state = {
            color: '#dddddd',
            IsClicked: false
        }
    }
    
    componentDidMount(){
        document.body.style.backgroundColor = '#0099ff'
    }

    changeColor(e){
        e.target.style.transition = 'all 1s'
        if(this.state.color === '#dddddd') {
            e.target.style.color = '#333333'
            this.setState({
                color: '#333333',
                IsClicked: true
            })
        } else {
            e.target.style.color = '#dddddd'
            this.setState({
                color: '#dddddd',
                IsClicked: false
            })
        }
    }

    render() {
        return(
            <FontAwesomeIcon style={gearStyle} icon={faCog} onClick={this.changeColor}/>
        )
    }
}

let gearStyle = {
    margin: '2vh', 
    fontSize: '2rem',
    color: '#ffffff',
    transition: 'all 1s',
    display: 'inline'
}

export default Gear