import React, { Component } from 'react';
import UserService from '../services/UserService';

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }

    }

    render() {
        return (
            <div>
                <h1>HOME PAGE</h1>
            </div>
        );
    }

    componentDidMount() {
        UserService.getUsers().then((res)=>{
            this.setState({
                users: res.data
            })
        })
    }
}

export default HomePage;