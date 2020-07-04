import React from 'react'

class Input extends React.Component{
    constructor(props){
        super(props)
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e){
        this.props.findUser(e.target.value)
    }

    render(){
        return(
            <div>
              <label>{this.props.label}
                  <input type="text" name="username" onChange={this.handleInput}></input>
              </label>
            </div>
        )
    }
}

export default Input