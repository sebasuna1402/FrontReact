import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Layout } from './pages/_layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import ListCompanies from './pages/companies/ListCompanies'
import ListOffers from './pages/offers/ListOffers'
import Menu from './components/Menu'

// const CounterContext = React.createContext(0);
import menuJson from '../src/utils/json/categories.json'
import DebounceTime from './components/DebounceTime'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/companies" element={<ListCompanies />} />
          <Route path="/offers" element={<ListOffers />} />
          <Route path="/menu" element={<Menu data={menuJson} />} />
          <Route path="/debounce" element={<DebounceTime />} />
        </Route>
      </Routes>
      </BrowserRouter>    
  </React.StrictMode>
)

// export default CounterContext;
