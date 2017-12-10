import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import EditInfo from './EditInfo'
import Profiles from './Profiles'
import MainProfile from './MainProfile'

import * as axios from '../axiosCalls'

// The Main component renders one of the provided
// Routes (provided that one matches).
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      photo: '',
      name: '',
      description: '',
      profiles: []
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
        console.log('from server route First time', response.data);
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.getProfiles()
      .then(response => {
        this.setState({
          profiles: response.data
         });
        // console.log('should be all users', response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  handleProfileClick(id) {
    console.log('handleProfileClick')
    axios.getProfile(id)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          description: response.data.description
         });
        console.log('from server route!!', response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  render() {

    const MyProfile = (props) => {
      return (
        <MainProfile
          photo={this.state.photo}
          name={this.state.name}
          description={this.state.description}
        />
      )
    }

    const MyProfiles = (props) => {
      return (
        <Profiles
          profiles={this.state.profiles}
          handleProfileClick={this.handleProfileClick.bind(this)}
        />
      )
    }

    return (
      <main>
        <Switch>
          <Route exact path='/' component={MyProfile}/>
          <Route path='/all' component={MyProfiles}/>
          <Route path='/updateUser' component={EditInfo}/>
        </Switch>
      </main>
    )
  }
}

export default Main
