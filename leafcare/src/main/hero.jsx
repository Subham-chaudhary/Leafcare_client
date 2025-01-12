import { Card, Col, Row } from "react-bootstrap";
const Hero = () => {
  return (
    <Row className="g-0">
      <Col xl={6} md={12} className="d-flex flex-column-reverse justify-content-center">
        <Row xs={1} md={22} className="g-0">
          <Col xs={12} md={6}>
            <Card className="h-100">
              <Card.Img src="https://picsum.photos/1024" />
            </Card>
          </Col>
          <Col xs={12} md={6} className="d-flex align-items-center">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Hero;
