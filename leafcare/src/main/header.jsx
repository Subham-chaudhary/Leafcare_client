import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import OffcanvasNavbar from './sidebar';
import logo from '../assets/logo-leafcare-removebg.png'
import './header.css';
function header() {
    return (
        <>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" fixed='top' >
                    <Container fluid><Navbar.Brand href="#home">
                        <img
                            alt=""
                            src = {logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        LeafCare
                    </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <OffcanvasNavbar />
                    </Container>
                </Navbar>
            ))}
        </>
    )
}
export default header