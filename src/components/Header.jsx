import { useContext } from 'react'

import Container from 'react-bootstrap/Container'
import NavLink from 'react-bootstrap/NavLink'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import './Header.css';

import { UserContext } from '../contexts/UserContext'

function Header() {

  const { user } = useContext (UserContext)

  return (
    

    <Navbar data-bs-theme='dark' className='main-heading' sticky='top'>
      <Container>
        <Navbar.Brand class = "logo_container"><h1>The Very Best Recipies</h1></Navbar.Brand>
        {
          !user.accessToken ?
            <>
              <NavLink as={Link} to={'/'}>Home</NavLink>
              <NavLink as={Link} to={'/register'}>Register</NavLink> 
              <NavLink as={Link} to={'/posts'}>Post</NavLink>
              <NavLink as={Link} to={'/Maps'}>Maps</NavLink>
              <NavLink as={Link} to={'/login'}>Login</NavLink>
              <NavLink as={Link} to={'/logout'}>Logout</NavLink>
              
            </> :
            <NavLink as={Link} to={'/logout'}>Logout</NavLink>
        }
      </Container>
    </Navbar>
  )
}
export default Header;