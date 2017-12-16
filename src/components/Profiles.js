import React from 'react'
import Profile from './Profile'

const Profiles = ({profiles, handleProfileClick, handleDeleteProfileClick}) => (
  <div>{profiles.map((profile) => {
    return <Profile
             key={profile._id}
             profile={profile}
             handleProfileClick={handleProfileClick}
             handleDeleteProfileClick={handleDeleteProfileClick}
           />
  })}</div>
)

export default Profiles
