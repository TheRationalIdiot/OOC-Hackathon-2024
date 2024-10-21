import { Navbar, Nav } from 'react-bootstrap';
import { FaHome, FaMap, FaUser } from 'react-icons/fa';

const BottomNavBar = () => (
  <Navbar fixed="bottom" className="justify-content-center" bg="dark" variant="dark">
    <Nav>
      <Nav.Link href="/"><FaHome /> Home</Nav.Link>
      <Nav.Link href="/map"><FaMap /> Map</Nav.Link>
      <Nav.Link href="/profile"><FaUser /> Profile</Nav.Link>
    </Nav>
  </Navbar>
);
export default BottomNavBar;