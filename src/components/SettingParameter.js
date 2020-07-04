import React from 'React'

class SettingParameter extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <label>{this.props.parameter}</label>
            //<input type="checkbox" isChecked
        )
    }


}