import React, { Component } from 'react';
import { Redirect } from 'react-router';
// import ItemService from './ItemService';
import * as axios from '../axiosCalls'

class EditInfo extends Component {

  constructor(props) {
      super(props);
      this.state = {
        redirect: false
      }
    }
    componentDidMount(){}

    handleAddUserClick({ photo, name, description }) {
      axios.addProfile({
        photo: photo,
        name: name,
        description: description
      }).then(response => {
        console.log('user added');
        // console.log(response.data);
        this.props.handleProfileClick(response.data);
        this.props.updateProfiles();
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

    onSubmit(e, props) {
      e.preventDefault();
      const user = {
        photo: e.target.name.value,
        name: e.target.name.value,
        description: e.target.description.value
      }
      this.handleAddUserClick(user);
      this.setState({redirect: true});
      // console.log(e.target.name.value, e.target.description.value);
    }

    render() {
      const { redirect } = this.state;

      if ( redirect ) {
        return <Redirect to={'/'}/>
      }

      return (
        <form onSubmit={this.onSubmit.bind(this)}>
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

export default EditInfo;
