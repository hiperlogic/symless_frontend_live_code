import React, {Component} from 'react';
import axios from 'axios';

import ServerStatus from './ChatApp/ServerStatus';
import UsersList from './ChatApp/UsersList';
import GroupsList from './ChatApp/GroupsList';
import ChatWindow from './ChatApp/ChatWindow';


export default class MainChat extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            server_connected: false
        };
        this.connect_server = this.connect_server.bind(this);
    }

    connect_server(username){
        // Use Axios to request the server for connection
        axios.post('http://localhost:3030/connect', {username})
        .then(res => {this.setState({...this.state, username, server_connected: res.data})});
    }

    render(){
        return (
            <div className="ChatApp">
                <h1>Hello Chat</h1>
                    <ServerStatus action={this.connect_server} status={this.state.server_connected} />
                    <UsersList />
                    <GroupsList />
                    <ChatWindow />
            </div>
            )
    }
}