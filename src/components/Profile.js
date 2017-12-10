import React from 'react'
import { Link } from 'react-router-dom'

import { deleteProfile } from '../axiosCalls'

const Profile = ({profile, handleProfileClick, updateProfiles}) => (
  <div>
    <div onClick={() => {
      console.log('user id', profile._id)
      handleProfileClick(profile)
    }}>
      <Link to='/'>
        <h3>{profile.name}</h3>
      </Link>
      <div>{profile.description}</div>
    </div>
    <button type="button" onClick={() => {
      deleteProfile(profile._id)
        .then(response => {
          console.log('profile deleted', response.data);
          updateProfiles();
        })
        .catch(function (error) {
          console.log(error);
        })
    }}>delete</button>
  </div>
)

export default Profile
