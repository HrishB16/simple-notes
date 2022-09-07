import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Home';
import { Link } from "react-router-dom";

function Navbarmain() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>iNotes</Navbar.Brand>
         <Nav className='me-auto'>
            <Nav ><Link className="navlink" to="/">Home</Link></Nav>
            <Nav ><Link className="navlink" to="/lists">Lists</Link></Nav>
         </Nav>
          
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarmain;