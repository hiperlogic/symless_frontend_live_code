import React, {Component} from 'react';

export default class ServerStatus extends Component {
    render(){
        return (
            <div classname="ConnectPanel">
                <button onClick={this.props.action} enabled={!this.props.status}>Connect</button>
                <button onClick={this.props.action} enabled={this.props.status}>Disonnect</button>
            </div>
        )
    }
}