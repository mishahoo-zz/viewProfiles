import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import AddProfile from './AddProfile'
import EditProfile from './EditProfile'
import Profiles from './Profiles'
import MainProfile from './MainProfile'

import * as api from '../util/api'


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      profiles: []
    };
  }

  componentDidMount(){
    const name = 'Misha'
    api.getProfileByName(name)
      // .then(this.setState.bind(this))
      .then((profile) => {
        this.setState({user: profile})
      })
      .catch(console.error)

    api.getProfiles()
      .then(profiles => {
        this.setState({
          profiles: profiles
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  handleProfileClick(user) {
    this.setState({
      user: user
    });
  }

  updateProfiles() {
    api.getProfiles()
      .then(profiles => {
        this.setState({
          profiles: profiles
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  handleDeleteProfileClick(id) {
    api.deleteProfile(id)
      .then(response => {
        console.log('profile deleted', response.data);
        this.updateProfiles();
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {

    const MyMainProfile = (props) => {
      return (
        <MainProfile
          user={this.state.user}
        />
      )
    }

    const MyProfiles = (props) => {
      return (
        <Profiles
          profiles={this.state.profiles}
          handleProfileClick={this.handleProfileClick.bind(this)}
          handleDeleteProfileClick={this.handleDeleteProfileClick.bind(this)}
        />
      )
    }

    const MyAddProfile = (props) => {
      return (
        <AddProfile
          handleProfileClick={this.handleProfileClick.bind(this)}
          updateProfiles={this.updateProfiles.bind(this)}
        />
      )
    }

    const MyEditProfile = (props) => {
      return (
        <EditProfile
          user={this.state.user}
          handleProfileClick={this.handleProfileClick.bind(this)}
          updateProfiles={this.updateProfiles.bind(this)}
        />
      )
    }

    return (
      <main>
        <Switch>
          <Route exact path='/' component={MyMainProfile}/>
          <Route path='/all' component={MyProfiles}/>
          <Route path='/addProfile' component={MyAddProfile}/>
          <Route path='/editProfile' component={MyEditProfile}/>
        </Switch>
      </main>
    )
  }
}

export default Main
