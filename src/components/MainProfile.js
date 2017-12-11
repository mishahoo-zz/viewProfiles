import React from 'react'
import { Link } from 'react-router-dom'

const MainProfile = ({user}) => (
  <div className="large-profile">
    <div className="large-image-container">
      <img className="large-image" src={`/images/${user.photo}`} alt="photo" height="300"/>
    </div>
    <h1>{user.name}</h1>
    <h3>{user.description}</h3>
    { (user.name === 'Misha') ?
      <div></div> :
      <Link className="link" to='/editProfile'>
        <button type="button">edit</button>
      </Link>
    }
  </div>
)

export default MainProfile
