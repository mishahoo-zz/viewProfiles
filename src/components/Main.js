import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import AddProfile from './AddProfile'
import EditProfile from './EditProfile'
import Profiles from './Profiles'
import MainProfile from './MainProfile'

import * as axios from '../axiosCalls'

// The Main component renders one of the provided
// Routes (provided that one matches).
const extractData = (response) => response.data

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: '',
      // photo: '',
      // name: '',
      // description: '',
      user: {},
      profiles: []
    };
  }

  componentDidMount(){
    const initalID = '5a2daea49bfec236017858cc'
    axios.getProfile(initalID)
      .then(extractData)
      // .then(this.setState.bind(this))
      .then((profile) => {
        // console.log('from inital render', profile)
        this.setState({user: profile})
        // console.log('from inital render state', this.state)
      })
      .catch(console.error)

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

  handleProfileClick(user) {
    console.log('handleProfileClick user data', user)
    this.setState({
      user: user
    });
    // axios.getProfile(id)
    //   .then(response => {
    //     this.setState({
    //       id: response.data.id,
    //       name: response.data.name,
    //       description: response.data.description
    //     });
    //     // console.log('from server route!!', response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
  }

  updateProfiles() {
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


  // deleteProfile() {
  //
  // }

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
          updateProfiles={this.updateProfiles.bind(this)}
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
