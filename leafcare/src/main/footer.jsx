import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="mt-auto py-3 bg-dark">
      <Container>
        <Row>
          <Col xs="12" className="text-center">
            <p className="text-light">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
