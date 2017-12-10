import React from 'react'
import { Link } from 'react-router-dom'

const Profile = ({id, photo, name, description, handleProfileClick}) => (
  <div onClick={() => handleProfileClick(id)}>
    <Link to='/'>
      <h1>{name}</h1>
    </Link>
    <h3>{description}</h3>
  </div>
)

export default Profile
