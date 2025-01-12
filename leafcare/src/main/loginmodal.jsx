import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function loginmodal({show, setShow}) {

    return (
        <>
            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>LeafCare</Modal.Title>
                    <strong className='text-success p-1'>Log in</strong>

                </Modal.Header>
                <Modal.Body><Container>
                    <Row>
                        <Col>
                            <Container>
                                <img src="https://pngimg.com/d/doge_meme_PNG1.png" height={300} />
                            </Container>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Group className="mb-3 lg-4 xl-6" controlId="loginForm.Inputemail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="email"
                                        autoFocus required
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="loginForm.InputPassword">
                                    <Form.Label>Example textarea</Form.Label>
                                    <Form.Control type='password' placeholder='password' required />
                                </Form.Group>
                                <Form.Group className="mb-3 lg-4 xl-6 d-flex justify-content-between">
                                    <Button variant="secondary" type='cancel' onClick={() => setShow(false)}>
                                        Close
                                    </Button>
                                    <Button variant="success" type='submit' onSubmit={() => setShow(false)}>
                                        Login
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col>
                            <Container>
                                <img src="https://pngimg.com/d/doge_meme_PNG1.png" height={300} />
                                <p>we are here to help you</p>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                </Modal.Body>
                <Modal.Footer>
                    this is footer
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default loginmodal;   