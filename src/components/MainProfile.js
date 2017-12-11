import React from 'react'
import { Link } from 'react-router-dom'

const MainProfile = ({user}) => (
  <div>
    {/* {console.log('user in main profile', user)} */}
    <img src={`/images/${user.photo}`} alt="photo" height="300"/>
    <h1>{user.name}</h1>
    <h3>{user.description}</h3>
    <Link to='/editProfile'>
      <button type="button">edit</button>
    </Link>
  </div>
)

export default MainProfile
