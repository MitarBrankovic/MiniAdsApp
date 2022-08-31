import React, { Component } from 'react';
import UserService from '../services/UserService';
import Moment from 'moment';
import Swal from 'sweetalert2';

class AllUsers extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: [],
            loggedUser: JSON.parse(localStorage.getItem('user')),
        }
        
    }

    ban(username){
        UserService.ban(username).then(()=>{
            UserService.swalSuccess('Banned successfully');
            window.location.reload()
        }).catch(error => {
            console.log(error);
        })
    }

    unban(username){
        UserService.unban(username).then(()=>{
            UserService.swalSuccess('Unbanned successfully');
            window.location.reload()
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
                <div style={{marginTop: "30px"}}>
                    <h2 style={{textAlign: "center", color: "MediumTurquoise"}}>All users</h2>
                    <div className="container-fluid mt-3">
                        <table className="table is-striped is-hoverable">
                            <thead>
                            <tr>
                                <td>Username</td>
                                <td>Fullname</td>
                                <td>Phone</td>
                                <td>Date of registration</td>
                                <td>Role</td>
                                <td></td>
                            </tr>
                            </thead>
                            <tbody>
                                 {
                                this.state.users.map(item =>{
                                    return  <tr key={item.id} style={{backgroundColor: (item.role.name === "ROLE_ADMIN") ? "PaleTurquoise" : ""}}>
                                                <th style={{fontWeight: "normal"}}>{item.username}</th>
                                                <th style={{fontWeight: "normal"}}>{item.firstName} {item.lastName}</th>
                                                <th style={{fontWeight: "normal"}}>{item.phoneNumber}</th>
                                                <th style={{fontWeight: "normal"}}>{Moment(item.dateOfRegistration).format('DD.MM.YYYY.')}</th>
                                                <th style={{fontWeight: "normal"}}>{(item.role.name === "ROLE_ADMIN") ? "Admin" : "User"}</th>
                                                {item.role.name !== "ROLE_ADMIN" ?
                                                <th style={{fontWeight: "normal"}}>{!item.banned
                                                ? <button className='button is-danger' onClick={() => this.ban(item.username)}>Ban</button>
                                                : <button className='button is-primary' onClick={() => this.unban(item.username)}>Unban</button>}</th>: null}

                                            </tr>})
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
        );
    }

    componentDidMount() {
        if(UserService.isExpired()){
            Swal.fire(
                'Error!',
                'Session expired!',
                'error'
              )
            this.props.history.push('/');
            setTimeout(function(){window.location.reload()}, 1500);
        }

        UserService.getUsers().then((res)=>{
            this.setState({
                users: res.data
            })
        })
        
    }

}

export default AllUsers;