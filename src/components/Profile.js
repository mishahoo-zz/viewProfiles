import React from 'react'
import { Link } from 'react-router-dom'

//deleting profile from here is not good practice
const Profile = ({profile, handleProfileClick, handleDeleteProfileClick}) => (
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
    { (profile.name === 'Misha') ?
      <div></div> :
      <button type="button" onClick={() => handleDeleteProfileClick(profile._id)}>remove</button>
    }
  </div>
)

export default Profile
