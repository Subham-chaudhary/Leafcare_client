import Card from "react-bootstrap/Card";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = () => {
  const heroData = [
    {
      imageSrc: "https://picsum.photos/1024",
      title: "Card Title 1",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      imageSrc: "https://picsum.photos/1024",
      title: "Card Title 2",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      imageSrc: "https://picsum.photos/1024",
      title: "Card Title 3",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      imageSrc: "https://picsum.photos/1024",
      title: "Card Title 4",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      imageSrc: "https://picsum.photos/1024",
      title: "Card Title 5",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    }
  ];

  return (
    <>
      {heroData.map(({
        imageSrc,
        title,
        text,
      }, index) => (
        <Row className="g-0 mt-5 justify-content-center" key={title}>
          <Col xl={6} md={12} className="d-flex flex-column ">
            <Row xs={1} md={2} className="g-0">
              <Col xs={12} md={6} className={(index % 2 === 0) ? "order-md-2" : ""}>
                <Card className="h-100">
                  <Card.Img src={imageSrc} />
                </Card>
              </Col>
              <Col xs={12} md={6} className={(index % 2 === 0) ? "order-md-1" : ""}>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    {text}
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Col>
        </Row>
      ))}
    </>

  );
};

export default Hero;
