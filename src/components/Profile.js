import React from 'react'
import { Link } from 'react-router-dom'

import { deleteProfile } from '../axiosCalls'

//deleting profile from here is not good practice
const Profile = ({profile, handleProfileClick, updateProfiles}) => (
  <div className="small-profile">
    <div onClick={() => {
      handleProfileClick(profile)
    }}>
      <Link className="link" to='/'>
        <div className="image-container">
          <img className="small-image" src={`/images/${profile.photo}`} alt="photo" height="150"/>
        </div>
        <h3>{profile.name}</h3>
      </Link>
    </div>
    {/* <button type="button" onClick={() => {
      deleteProfile(profile._id)
        .then(response => {
          console.log('profile deleted', response.data);
          updateProfiles();
        })
        .catch(function (error) {
          console.log(error);
        })
    }}>x</button> */}
  </div>
)

export default Profile
