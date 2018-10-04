import React from 'react'
import ReactDOM from 'react-dom'
import Main from './js/Components/Main.jsx'

import './css/style.css'

ReactDOM.render(
  <Main />,
  document.getElementById('APP') // eslint-disable-line no-undef
)

if(typeof(module.hot) !== 'undefined') { // eslint-disable-line no-undef  
  // Needed for Hot Module Replacement
  module.hot.accept() // eslint-disable-line no-undef  
}