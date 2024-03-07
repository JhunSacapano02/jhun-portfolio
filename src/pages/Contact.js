import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [stateMessage, setStateMessage] = useState(null);

  const form = useRef();


  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ypa8jcj', 'template_uuz69s8', form.current, {
        publicKey: 'l34kwItRfZCDHUOf9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            title: "Email Sent!",
            icon: 'success',
            text: "Thank you! I'll get back to you as soon as possible."
          })
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            title: "Something Went Wrong!",
            icon: 'success',
            text: "Sorry for the incovenient, but can you email me directly to jhunsacapano02@gmail.com please."
          })
        },
      );

          // hide message after 5 seconds
        
    
    // Clears the form after sending the email
    e.target.reset();
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    
  };

    return (
        <Container fluid>
          <Row className='py-5 justify-content-center align-items-center'>
            <Col className='col-12 col-md-11 col-lg-8'>
                        <Row>
                            <Col className='col-12'>
                              <Container className="container-for-vertical">
    
                                    <Row className='justify-content-center align-items-center'>
                                    <Col className='col-1'>
                                        <div class="vertical-container d-flex flex-column align-items-center justify-content-center">
                                          <FontAwesomeIcon icon={faHistory} className="icon vr-icon align-self-center" inverse />
                                        </div>                              
                                      </Col>
                                      <Col className='col-11 ps-md-2 ps-lg-5'>
                                        <p className='big-title'>
                                            Contact Me
                                        </p>                              
                                      </Col>
                                    </Row>
                              </Container>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col className='col-12'>
                            <Container className="container-for-vertical">
                            <Row className='justify-content-center align-items-center'>
                                    <Col className='col-1'>
                                      <div class="vertical-container-icon d-flex flex-column align-items-center justify-content-center">
                                        <div class="vr align-self-center"></div>
                                      </div>                             
                                    </Col>
                                  <Col className='col-11 ps-md-2 ps-lg-5'>
                                  <div className='white-p'>
                                  <Form ref={form} onSubmit={handleSubmit}>
                                    <Form.Group controlId="formName">
                                      <Form.Label>Name</Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        name="user_name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                      />
                                    </Form.Group>
                                    <br></br>
                                    <Form.Group controlId="formEmail">
                                      <Form.Label>Email address</Form.Label>
                                      <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        name="user_email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                      />
                                    </Form.Group>
                                    <br></br>
                                    <Form.Group controlId="formMessage">
                                      <Form.Label>Message</Form.Label>
                                      <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Enter your message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                      />
                                    </Form.Group>
                                    <br></br>
                                    <Button className='black-button' type="submit">
                                     Submit
                                    </Button>
                                  </Form>
                                  </div>
                                  </Col>
                                </Row>
                            </Container>
                            </Col>
                        </Row>
            </Col>
          </Row>
        </Container>
      );
};

