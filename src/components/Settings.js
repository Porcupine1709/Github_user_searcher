import React from 'react';


class Settings extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        let rendersettings = this.props.render
        let result
        if(rendersettings){
            result = <div></div>
        }
    }
}