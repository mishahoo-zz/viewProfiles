import React from 'react'

const MainProfile = ({photo, name, description}) => (
  <div>
    <img src={`/images/${photo}`} alt="photo" height="300"/>
    <h1>{name}</h1>
    <h3>{description}</h3>
  </div>
)

export default MainProfile
