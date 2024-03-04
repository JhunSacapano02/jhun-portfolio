import React from 'react';
import { Container, Row, Col, Card, Image, OverlayTrigger, Popover} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faInfoCircle, faTools, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { db } from '../config/firebase'
import { getDocs, collection} from 'firebase/firestore';
import { useState, useEffect } from 'react';

import { faFacebook, faLinkedin, faSquareBehance, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function About() {

//   const [tools, setTools] = useState([]);
  const toolsCollection = collection(db, 'tools');
  const [tools1, setTools1] = useState([]);
  const [tools2, setTools2] = useState([]);
  const [tools3, setTools3] = useState([]);

    const arr1 = ['HTML', 'CSS', 'JavaScript', 'bootstrap', 'flutter', 'firebase'];
    const arr2 = ['mongo db', 'express js', 'react js', 'node js', 'wordpress', 'python'];
    const arr3 = ['figma', 'adobe xd', 'github', 'trello', 'vscode', 'sublime'];

const fetchData = async () => {
  try {
    const data = await getDocs(toolsCollection);
    const dataCollection = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log("dataCollection", dataCollection);


    // Separate data into three arrays based on the 'category' property
    const arr1Data = dataCollection.filter(item => arr1.includes(item.name));
    const arr2Data = dataCollection.filter(item => arr2.includes(item.name));
    const arr3Data = dataCollection.filter(item => arr3.includes(item.name));
    console.log("arr1data", arr1Data);
    setTools1(arr1Data);
    setTools2(arr2Data);
    setTools3(arr3Data);

    // console.log('Array 1 Data:', arr1Data);
    // console.log('Array 2 Data:', arr2Data);
    // console.log('Array 3 Data:', arr3Data);

    // You can set these arrays to state or perform other actions as needed
  } catch (err) {
    console.log(err);
  }
};


const scrollContainer = (tools) => {
  return <Container fluid className="scroll imgBox">
                            <div className='tooptip'>
                                {tools.map((tool) => (
                                    <OverlayTrigger
                                    trigger="hover"
                                    key='top'
                                    placement='top'
                                    overlay={
                                      <Popover id={`popover-positioned-top`}>
                                        <Popover.Body className="p-2">                          
                                         {tool.name}
                                        </Popover.Body>
                                      </Popover>
                                    }>
                                       <Image className='grey-scroll-image' ket={tool.docId} src={tool.image} alt="certificate"/>
                                  </OverlayTrigger>
                                ))}
                            </div>
                            <div className='tooptip'>
                                {tools.map((tool) => (
                                    <OverlayTrigger
                                    trigger="hover"
                                    key='top'
                                    placement='top'
                                    overlay={
                                      <Popover id={`popover-positioned-top`}>
                                        <Popover.Body className="p-2">                          
                                         {tool.name}
                                        </Popover.Body>
                                      </Popover>
                                    }>
                                       <Image className='grey-scroll-image' ket={tool.docId} src={tool.image} alt="certificate"/>
                                  </OverlayTrigger>
                                ))}
                            </div>
                    </Container>

}


  useEffect(() => {
      fetchData();
  },[]);

  return (
    <Container fluid>
      <Row className='pt-5 justify-content-center align-items-center'>
        <Col className='col-sm-12 col-md-11 col-lg-10'>
            <Row className='justify-content-center align-items-center my-5'>
                <Col className='col-11'>
                    <Row>
                      <Container className="container-for-vertical">
                        <Col className='col-12'>
                              <Row className='justify-content-center align-items-center'>
                              <Col className='col-1'>
                                <div class="d-flex flex-column align-items-start justify-content-center">
                                    <FontAwesomeIcon icon={faInfoCircle} className="icon my-2 vr-icon" inverse />
                                  </div>                              
                                </Col>
                                <Col className='col-11 px-5'>
                                  <p className='big-title'>
                                      About Me
                                  </p>                              
                                </Col>
                              </Row>
                          </Col>
                      </Container>
                        
                    </Row>
                    <Row>
                        <Col className='col-12'>
                        <Container className="container-for-vertical">
                        <Row className='justify-content-center align-items-center'>
                                <Col className='col-1'>
                                  <div class="vertical-container d-flex flex-column align-items-start justify-content-center">
                                    <div class="vr align-self-center"></div>
                                  </div>                             
                                </Col>
                              <Col className='col-11 px-5 mb-5'>
                                <p className='white-p'>
                                    Mabuhay! My name is <strong>Jhun Anthony I. Sacapaño</strong>, a Philippine-based <strong>Software Engineer</strong> who lives in a tropical island. Back in 2018, I earned a Bachelors of Science in <strong>Information Technology</strong> specializing in <strong>Software Engineering</strong>. Graduated in 2022 with <strong>Latin Honor</strong> and awarded as <strong>Best in Software Project</strong>, showcasing an Android-based Tour Planner App designed for <strong>Sustainable Tourism</strong>. 
                                </p>
                                <p className='white-p'>
                                    After graduation, I was employed for a year and half as an <strong>IT Officer</strong> in a government office that promotes and markets tourism enterprises and assets. I have <strong>Lead, Designed, and Developed</strong> a multi-platform online information and complaint center for tourism named the <strong>Info Guide App</strong> or the Project Boracay Information Guide App (Project BIG A).
                                </p>
                                
                                <p className='white-p'>
                                    Fast-forward to 2024, I decided to delve into <strong>MERN Stack Web Development</strong> and have completed an intensive Full-Stack course through a <strong>Coding Bootcamp</strong>. When i'm not coding, you can find me designing apps instead, or maybe see me at the beach enjoying the sunset. Now, I am <strong>Actively Seeking</strong> for the perfect job!
                                </p>                        
                              </Col>
                            </Row>
                        </Container>
                            
                        </Col>
                    </Row>
                    <Row>
                    <Container className="container-for-vertical">
                        <Col className='col-12'>
                            <Row className='justify-content-center align-items-center'>
                              <Col className='col-1'>
                              <div class="d-flex flex-column align-items-start justify-content-center">
                                  <FontAwesomeIcon icon={faTools} className="icon my-2 vr-icon" inverse />
                                </div>                              
                              </Col>
                              <Col className='col-11 px-5'>
                                <p className='big-title'>
                                    Tools
                                </p>                              
                              </Col>
                            </Row>
                        </Col>
                    </Container>
                        
                    </Row>
                    <Row>
                        <Col className='col-12'>
                            <Container className="container-for-vertical">
                              <Row className='justify-content-center align-items-center'>
                                <Col className='col-1'>
                                  <div class="vertical-container d-flex flex-column align-items-start justify-content-center">
                                    <div class="vr align-self-center"></div>
                                  </div>                             
                                </Col>
                                <Col className='col-11 px-5 mb-5'>
                                  <p className='white-p'>
                                      These are the <strong>Technologies</strong> I use:
                                  </p>
                                  
                                  {scrollContainer(tools1)}
                                  {scrollContainer(tools2)}
                                  {scrollContainer(tools3)}
                                                
                                </Col>
                              </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                    <Container className="container-for-vertical">
                        <Col className='col-12'>
                            <Row className='justify-content-center align-items-center'>
                              <Col className='col-1'>
                              <div class="d-flex flex-column align-items-start justify-content-center">
                                  <FontAwesomeIcon icon={faHistory} className="icon my-2 vr-icon" inverse />
                                </div>                              
                              </Col>
                              <Col className='col-11 px-5'>
                                <p className='big-title'>
                                    Experience
                                </p>                              
                              </Col>
                            </Row>
                        </Col>
                    </Container>
                        
                    </Row>
                    {/* EXPERIENCE */}
                    <Row>
                        <Col className='col-12'>
                            <Container className="container-for-vertical">
                              <Row className='justify-content-center align-items-center'>
                                <Col className='col-1'>
                                  <div class="vertical-container d-flex flex-column align-items-start justify-content-center">
                                    <div class="vr align-self-center"></div>
                                  </div>                             
                                </Col>
                                <Col className='col-11 px-5 mb-5'>
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
                                                  <strong>Lead</strong> to design and develop tourism-innovative systems using emerging technologies, such as:<br></br>
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
                                                  <strong>Facilitate</strong> best practices in information system (document, content, and database) management.
                                              </li>
                                              <li>
                                                  <strong>Guides</strong> the development of social media branding through the implementation of design systems.
                                              </li>
                                              <li>
                                                  <strong>Aid</strong> in the organization of events and assemblies.
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
                    {/* WORKS */}
                    <Row>
                    <Container className="container-for-vertical">
                        <Col className='col-12'>
                            <Row className='justify-content-center align-items-center'>
                              <Col className='col-1'>
                              <div class="d-flex flex-column align-items-start justify-content-center">
                                  <FontAwesomeIcon icon={faProjectDiagram} className="icon my-2 vr-icon" inverse />
                                </div>                              
                              </Col>
                              <Col className='col-11 px-5'>
                                <p className='big-title'>
                                    Projects
                                </p>                              
                              </Col>
                            </Row>
                        </Col>
                    </Container>
                        
                    </Row>
                    <Row>
                        <Col className='col-12'>
                            <Container className="container-for-vertical">
                              <Row className='justify-content-center align-items-center'>
                                <Col className='col-1'>
                                  <div class="vertical-container d-flex flex-column align-items-start justify-content-center">
                                    <div class="vr align-self-center"></div>
                                  </div>                             
                                </Col>
                                <Col className='col-11 px-5 mb-5'>
                                  
                                  
                                                
                                </Col>
                              </Row>
                            </Container>
                        </Col>
                    </Row>
                    
                    

                </Col>
                <Col className='col-1 d-flex align-items-end justify-content-end'>
                <div className="d-flex flex-column align-items-end justify-content-end">
                        <FontAwesomeIcon icon={faLinkedin} className="contact-icon icon my-4" inverse />
                        <FontAwesomeIcon icon={faFacebook} className="contact-icon icon my-4" inverse />
                        <FontAwesomeIcon icon={faGithub} className="contact-icon icon my-4" inverse />
                        <FontAwesomeIcon icon={faSquareBehance} className="contact-icon icon my-4" inverse />
                    </div>
                </Col>
            </Row>
        </Col>
      </Row>
    </Container>
  );
};

