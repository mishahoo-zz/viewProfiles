import React from 'react'
import Profile from './Profile'

const Profiles = ({profiles, handleProfileClick}) => (
  <div>{profiles.map((profile) => {
    return <Profile
             key={profile._id}
             id={profile._id}
             photo={profile.photo}
             name={profile.name}
             description={profile.description}
             handleProfileClick={handleProfileClick}
           />
  })}</div>
)

export default Profiles
