import React from 'react'
import { Link } from 'react-router-dom'

const Profile = ({profile, handleProfileClick}) => (
  <div onClick={() => handleProfileClick(profile)}>
    <Link to='/'>
      <h3>{profile.name}</h3>
    </Link>
    <div>{profile.description}</div>
  </div>
)

export default Profile
