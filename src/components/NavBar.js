import CartWidget from "./CartWidget";
import Nav from 'react-bootstrap/Nav';
import './NavBar.css'

const NavBar = () => {
    return (
        <Nav className='NavBar' defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/home">Productos</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Sucursales</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2">Contacto</Nav.Link>
          </Nav.Item>
          <CartWidget />
        </Nav>
        
      );
}

export default NavBar;