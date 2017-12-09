import React, { Component } from 'react';
// import ItemService from './ItemService';
import * as axios from './axiosCalls'

class Dashboard extends Component {

  constructor(props) {
      super(props);
      this.state = {
        id: '',
        photo: '',
        name: '',
        description: ''
      };
    }
    componentDidMount(){
      const initalID = '5a2c5d44389fbb067fde09dc'
      axios.getProfile(initalID)
        .then(response => {
          this.setState({
            id: response.data.id,
            name: response.data.name,
            description: response.data.description
           });
          console.log('from server route', response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    handleAddUserClick() {
      axios.addProfile({
        photo: 'John',
        name: 'John',
        description: 'I can fly.'
      }).then(response => {
        console.log('user added');
      })
      .catch(function (error) {
        console.log(error);
      })
    }

    handleGetProfilesClick() {
      axios.getProfiles()
      .then(response => {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
    }

    handleEditProfileClick() {
      axios.updateProfile('5a2c7ffc60443d1559557393', {
        photo: 'Sarah',
        name: 'Sarah',
        description: 'More and more stuff'
      }).then(response => {
        console.log('Comment Updated');
      })
      .catch(function (error) {
        console.log(error);
      })
    }

    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
          <h3>{this.state.description}</h3>
          <div>{this.state.id}</div>
          <button type="button" onClick={ this.handleAddUserClick }>Add Profile</button>
          <button type="button" onClick={ this.handleGetProfilesClick }>Get Profiles</button>
          <button type="button" onClick={ this.handleEditProfileClick }>Edit Profile</button>
        </div>
      );
    }
  }

export default Dashboard;
