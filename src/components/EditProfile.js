import React, { Component } from 'react';
import { Redirect } from 'react-router';
import DropZone from 'react-dropzone';

import * as axios from '../axiosCalls'

class EditProfile extends Component {

  constructor(props) {
      super(props);
      this.state = {
        redirect: false,
        photo: null
      }
    }
    componentDidMount(){}


    handleEditProfileClick(id, user) {
      axios.updateProfile(id, user).then(response => {
        console.log('Profile Updated');
        // console.log('after edit', response.data)
        this.props.handleProfileClick(response.data);
        this.props.updateProfiles();
      }).catch(function (error) {
        console.log(error);
      })
    }

    onSubmit(e, props) {
      e.preventDefault();
      const id = this.props.user._id
      const user = {
        photo: this.state.photo,
        name: e.target.name.value,
        description: e.target.description.value
      }
      this.handleEditProfileClick(id, user);
      this.setState({redirect: true});
      console.log('from onSubmit', user);
    }

    onDrop(files) {
      console.log('photo files', files[0])
      this.setState({
        photo: files[0]
      });
    }

    render() {
      const user = this.props.user;
      const { redirect } = this.state;

      if ( redirect ) {
        return <Redirect to={'/'}/>
      }

      return (
        <form onSubmit={this.onSubmit.bind(this)}>
          {this.state.photo ?
            <img src={this.state.photo.preview} alt="Smiley face" height="150" /> :
            <DropZone onDrop={this.onDrop.bind(this)}>
              <p>Update Photo</p>
            </DropZone>
          }
          <br></br>
          <label>
            Update Name:
            <br></br>
            <input type="text" name="name" placeholder={user.name} />
          </label>
          <br></br>
          <label>
            Update Description:
            <br></br>
            <textarea type="text" name="description" placeholder={user.description} />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default EditProfile;
