import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Layout } from './pages/_layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import ListCompanies from './pages/companies/ListCompanies'
import { QueryClient, QueryClientProvider } from 'react-query'
import ListOffers from './pages/offers/ListOffers'

// const CounterContext = React.createContext(0);
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/companies" element={<ListCompanies />} />
          <Route path="/offers" element={<ListOffers />} />
        </Route>
      </Routes>
      </BrowserRouter>
    
  </React.StrictMode>
  </QueryClientProvider>,
)

// export default CounterContext;
