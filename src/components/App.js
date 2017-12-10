import React from 'react'
import Header from './Header'
import Main from './Main'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => (
  <Router>
    <header>
      <Header />
      <Main />
    </header>
  </Router>
)

export default App
