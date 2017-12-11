import React, { Component } from 'react';
import { Redirect } from 'react-router';
import DropZone from 'react-dropzone';

import * as axios from '../axiosCalls'

class AddProfile extends Component {

  constructor(props) {
      super(props);
      this.state = {
        redirect: false,
        photo: null
      }
    }
    componentDidMount(){}


    handleEditProfileClick(id, user) {
      axios.updateProfile(user).then(response => {
        console.log('Comment Updated');
      })
      .catch(function (error) {
        console.log(error);
      })
    }

    onSubmit(e, props) {
      e.preventDefault();
      const user = {
        photo: this.state.photo,
        name: e.target.name.value,
        description: e.target.description.value
      }
      this.handleAddUserClick(user);
      this.setState({redirect: true});
      // console.log(e.target.name.value, e.target.description.value);
    }

    onDrop(files) {
      console.log('photo files', files[0])
      this.setState({
        photo: files[0]
      });
    }

    render() {
      const { redirect } = this.state;

      if ( redirect ) {
        return <Redirect to={'/'}/>
      }

      return (
        <form onSubmit={this.onSubmit.bind(this)}>
          {this.state.photo ?
            <img src={this.state.photo.preview} alt="Smiley face" height="150" /> :
            <DropZone onDrop={this.onDrop.bind(this)}>
              <p>Add Photo</p>
            </DropZone>
          }
          <br></br>
          <label>
            Name:
            <br></br>
            <input type="text" name="name" />
          </label>
          <br></br>
          <label>
            Description:
            <br></br>
            <textarea type="text" name="description" />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default AddProfile;
