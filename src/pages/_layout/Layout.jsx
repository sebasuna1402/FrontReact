import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

export const Layout = () => {
    return (
        <>

            <Navbar/>

            <main>
                <Outlet />
            </main>

            <h1>footer</h1>
       </>
    )
}

export default Layout