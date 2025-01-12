import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Loginmodal from './modal';
function offcanvasNavbar(expand) {
    const [showLogin, setShowLogin] = useState(false);
    const [expanded, setExpanded] = useState(false);
    return (
        <> <Navbar.Offcanvas onShow={() => setExpanded(true)} onHide={() => setExpanded(false)}
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    LeafCare
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#" onClick={() => setShowLogin(true)}>Join Now</Nav.Link>
                    <NavDropdown
                        title="Our Services"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}

                    >
                        <NavDropdown.Item href="#action3">GeoSearch</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Visual Search
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Contact Us
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search plants"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
        {showLogin && (
        <Loginmodal show={showLogin} setShow={setShowLogin} />)}
        </>
    )
}
export default offcanvasNavbar