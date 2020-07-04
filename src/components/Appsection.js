import React from 'react'
import Input from './Input'
import FetchUser from '../fetch'
import DisplayUser from './DisplayUser'


class Main extends React.Component {
    constructor(props){
        super(props)
        this.makeRequest = this.makeRequest.bind(this)

        this.state = {
            isUserFound: '',
            userInfo: ''
        }
    }

    makeRequest(value){
        let result = FetchUser(value)
        this.setState({
            isUserFound: result.avatar !== undefined,
            userInfo: result.avatar !== undefined? '': result
        })
    }

    render() {
        let content
        this.state.isUserFound === ''? content = '' : content = <DisplayUser userFound={this.state.isUserFound} userInfo={this.state.userInfo}/>
        return(
            <div style={mainSectionStyle}>
                <h1>Find GitHub user!</h1>
                <Input label="Input name of user you want to find here: " findUser={this.makeRequest}/>
                {content}
            </div>
        )
    }
}

let mainSectionStyle = {
    position: 'relative',
    margin: '10vh 30%',
    backgroundColor: '#bbb',
    height: '70vh',
    width: '40%', 
    borderRadius: '1vh',
    border: 'solid black 3px',
    textAlign: 'center'
}

export default Main