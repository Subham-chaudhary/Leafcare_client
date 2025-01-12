import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';


function body() {
  return (
    <>
    <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
     <Stack direction="horizontal" gap={3}>
     <div className="p-2">First item</div>
     <div className="p-2">Second item</div>
     <div className="p-2">Third item</div>
   </Stack>
   </>
  );
}

export default body;