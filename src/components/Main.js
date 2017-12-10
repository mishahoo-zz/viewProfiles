import React from 'react'
import { Switch, Route } from 'react-router-dom'
import EditInfo from './EditInfo'
import Profiles from './Profiles'

// The Main component renders one of the provided
// Routes (provided that one matches).
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/add' component={EditInfo}/>
      <Route exact path='/' component={Profiles}/>
    </Switch>
  </main>
)

export default Main
