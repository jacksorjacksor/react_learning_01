import React, { Component } from 'react';
import UserItem from './UserItem';
import axios from 'axios';

// Using axios:
// $ npm install axios

class Users extends Component {
    // Code that happens when the component mounts:
    // KC: cdm
    // async version:
    state = {
        users: [],
        loading: false,
    }

     async componentDidMount() { 
        this.setState({ loading : true})

        const res = await axios.get('https://api.github.com/users');
    
        this.setState({ users : res.data, loading : true})
     }

  render() {
    return (
        <div>
            {this.state.users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    )
  }
}

export default Users