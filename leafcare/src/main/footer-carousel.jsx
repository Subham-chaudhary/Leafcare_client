import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "../styles/footer-carousel.css"; 
const FooterCarousel = () => {
  const images = [
   
    "https://picsum.photos/id/1/400/600",
    "https://picsum.photos/id/2/400/600",
    "https://picsum.photos/id/3/400/600",
    "https://picsum.photos/id/4/400/600",
    "https://picsum.photos/id/5/400/600",
    "https://picsum.photos/id/6/400/600",
    "https://picsum.photos/id/7/400/600",
    "https://picsum.photos/id/8/400/600",
    "https://picsum.photos/id/9/400/600",
    "https://picsum.photos/id/10/400/600",
    "https://picsum.photos/id/11/400/600",
    "https://picsum.photos/id/12/400/600",
    "https://picsum.photos/id/13/400/600",
    "https://picsum.photos/id/14/400/600",
    "https://picsum.photos/id/15/400/600",
    "https://picsum.photos/id/16/400/600",
    "https://picsum.photos/id/17/400/600",
    "https://picsum.photos/id/18/400/600",
    "https://picsum.photos/id/19/400/600",
    "https://picsum.photos/id/20/400/600",

  ];

  // Utility to split images into slides
  const chunkImages = (arr, size) =>
    arr.reduce((acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc), []);

  const topImagesPerSlide = 4;
  const middleImagesPerSlide = 6;
  const bottomImagesPerSlide = 3;

  const topSlides = chunkImages(images, topImagesPerSlide);
  const middleSlides = chunkImages(images, middleImagesPerSlide);
  const bottomSlides = chunkImages(images, bottomImagesPerSlide);

  return (
    <footer className="bg-dark text-white py-5 footer ">
      <Container>
        {/* Topmost Carousel */}
        <Carousel controls={false} indicators={false} interval={4000} className="continuous-carousel" fade>
          {topSlides.map((slide, index) => (
            <Carousel.Item key={index}>
              <Row className="gy-4">
                {slide.map((img, imgIndex) => (
                  <Col xs={3} key={imgIndex} className="text-center">
                    <img src={img} alt={`Top Img ${imgIndex}`} className="img-fluid small-image" />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Middle Carousel */}
        <Carousel controls={false} indicators={false} interval={3000} className="continuous-carousel" fade>
          {middleSlides.map((slide, index) => (
            <Carousel.Item key={index}>
              <Row className="gy-4">
                {slide.map((img, imgIndex) => (
                  <Col xs={2} key={imgIndex} className="text-center">
                    <img src={img} alt={`Middle Img ${imgIndex}`} className="img-fluid medium-image" />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Bottommost Carousel */}
        <Carousel controls={false} indicators={false} interval={5000} className="continuous-carousel" fade>
          {bottomSlides.map((slide, index) => (
            <Carousel.Item key={index}>
              <Row className="gy-4">
                {slide.map((img, imgIndex) => (
                  <Col xs={4} key={imgIndex} className="text-center">
                    <img src={img} alt={`Bottom Img ${imgIndex}`} className="img-fluid large-image" />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </footer>
  );
};

export default FooterCarousel;
