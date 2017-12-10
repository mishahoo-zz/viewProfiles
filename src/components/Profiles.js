import React from 'react'
import Profile from './Profile'

const Profiles = ({profiles, handleProfileClick, updateProfiles}) => (
  <div>{profiles.map((profile) => {
    return <Profile
             key={profile._id}
             profile={profile}
             handleProfileClick={handleProfileClick}
             updateProfiles={updateProfiles}
           />
  })}</div>
)

export default Profiles
