import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

export default function Experience() {

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
                                            Experience
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
                                  <Card className=' glass-card p-2'>
                                         <Card.Body>
                                         <Card.Text className='text-start white-p'>
                                             <strong>IT OFFICER</strong><br></br>
                                             Local Government Unit of Malay - Municipal Tourism Office<br></br>
                                             Boracay Island Satellite Office, Brgy. Balabag, Malay, Aklan<br></br>
                                             August 1, 2022 - Decemeber 31, 2023
                                         </Card.Text> 
                                         <Card.Text className='text-start white-p'>
                                             <ul>
                                              
                                               <li>
                                                   <strong>Led</strong> to design and develop tourism-innovative systems using emerging technologies, such as:<br></br>
                                                   <ul>
                                                     <li>
                                                       <strong>Info Guide App</strong> | Project BIG A<br></br>
                                                       a centralized information and complaint system for tourism related information.
                                                     </li>
                                                     <li>
                                                       <strong>KaTOUR</strong><br></br>
                                                       a QR-code based monitoring system for tour operators.
                                                     </li>
                                                   </ul>
                                               </li>
                                                <li>
                                                   <strong>Involved</strong> in the implementation of ICT-facilitated projects driven by tourism initiatives.
                                               </li>
                                               <li>
                                                   <strong>Facilitated</strong> best practices in information system (document, content, and database) management.
                                               </li>
                                               <li>
                                                   <strong>Guided</strong> the development of social media branding through the implementation of design systems.
                                               </li>
                                               <li>
                                                   <strong>Aided</strong> in the organization of events and assemblies.
                                               </li>
                                             </ul>
                                         </Card.Text> 
                                         </Card.Body>
                                       </Card>                    
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

