import React from 'react'

class User extends React.Component {
    constructor(props){
        super(props)
        
        this.imgMouseEnters = this.imgMouseEnters.bind(this)
        this.imgMouseLeaves = this.imgMouseLeaves.bind(this)
    }

    imgMouseLeaves(event){
        event.target.style.opacity = imgStyle.opacity
    }

    imgMouseEnters(event){
        event.target.style.opacity = '1'
    }

    render() {
        return(
            <div style={divStyle}>
               <img src={this.props.userInfo.avatar} style={imgStyle} onMouseEnter={this.imgMouseEnters} onMouseLeave={this.imgMouseLeaves}/>
               <h3>{this.props.userInfo.name}</h3>
               <p>User's repositories: {this.props.userInfo.repos}</p>
           </div>
        )
    }
}

let divStyle = {
    backgroundColor: '#0099ff',
    margin: '2%',
    textAlign: 'center',
    borderRadius: '1vh',
    boxShadow: '1vh 1vh 2vh',
    padding: '2vh 1vh'
}

let imgStyle = {
    width: '40%',
    height: 'auto',
    borderRadius: '1vh',
    opacity: '0.6',
    margin: '1vh',
    transition: 'all 1s'
}

export default User