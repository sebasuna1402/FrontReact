import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <NavLink
                className='link parent-item capitalize nav-link'
                to="home">Home</NavLink >
            <NavLink
                className='link parent-item capitalize nav-link'
                to="about">About</NavLink >
            <NavLink
                className='link parent-item capitalize nav-link'
                to="companies">List Companies</NavLink >
        </nav>
    )
}

export default Navbar