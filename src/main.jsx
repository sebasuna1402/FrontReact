import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Counter from './components/Counter'
import List from './components/List'
import Counter2 from './components/Counter2'
import ListPhotos from './components/ListPhotos'
import { ListPhotosFromHook } from './components/ListPhotosFromHook'

const CounterContext = React.createContext(0);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterContext.Provider value={55}>
      <Counter/>
      <Counter2/>
    </CounterContext.Provider> */}
    {/* <ListPhotos/> */}
    <ListPhotosFromHook/>
  </React.StrictMode>,
)

export default CounterContext;
