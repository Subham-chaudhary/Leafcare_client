import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import OffcanvasNavbar from './sidebar';
import './header.css';
function header() {
    return (
        <>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">LeafCare</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <OffcanvasNavbar />
                    </Container>
                </Navbar>
            ))}
        </>
    )
}
export default header