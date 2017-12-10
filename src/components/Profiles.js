import React from 'react'
import Profile from './Profile'

const Profiles = ({profiles, handleProfileClick}) => (
  <div>{profiles.map((profile) => {
    return <Profile
             key={profile._id}
             profile={profile}
             handleProfileClick={handleProfileClick}
           />
  })}</div>
)

export default Profiles
