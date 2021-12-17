import "./Header.css"
import {Navbar, Container, Nav, NavDropdown,} from 'react-bootstrap';
import CartWidget from"./CartWidget.js" 

function Header() {
    return (
    <header>
          
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                    Bardó
                </Navbar.Brand>
            </Container>
            <Container>
                <Navbar.Brand href="#home">Inicio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Panes</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Conservas</NavDropdown.Item>
                       
                        </NavDropdown>
                        <Nav.Link href="#home">Nosotros</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>   
            </Container>
        </Navbar>
        
    </header>
    )
}

export default Header
