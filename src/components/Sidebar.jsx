import Navbar from 'react-bootstrap/Navbar'

import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'


export default function Sidebar() {
    return (
        <Navbar sticky='top' className='flex-column sidebar'>
            <Nav.Item>
                <h2>
                <Nav.Link as={ Link } to='/'>Home</Nav.Link>
                </h2>
            </Nav.Item>
            <br></br>
            {/* <Link to="/feed">A different way to get to FEED (no reload with this one just re-RENDER)</Link> */}
            <Nav.Item>
                <h3>
                <Nav.Link as={Link} to='/posts'>Posts</Nav.Link>
                </h3>
            </Nav.Item>
            <br></br>
            <Nav.Item>
                <h4>
                <Nav.Link as={ Link } to='/users'>Users</Nav.Link>
                </h4>
            </Nav.Item>
            <br></br>
            
        </Navbar>
    )
}