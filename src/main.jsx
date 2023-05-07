import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Counter from './components/Counter'
import List from './components/List'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Counter number={5}/> */}
    <List/>
  </React.StrictMode>,
)
