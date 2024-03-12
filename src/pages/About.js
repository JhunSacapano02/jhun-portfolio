import React from 'react';
import { Container, Row, Col, Image, OverlayTrigger, Popover } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { db } from '../config/firebase'
import { getDocs, collection} from 'firebase/firestore';
import { useState, useEffect } from 'react';


export default function About() {
    const toolsCollection = collection(db, 'tools');
    const [tools1, setTools1] = useState([]);
    const [tools2, setTools2] = useState([]);
    const [tools3, setTools3] = useState([]);

    const arr1 = ['HTML', 'CSS', 'JavaScript', 'bootstrap', 'flutter', 'firebase'];
    const arr2 = ['mongo db', 'express js', 'react js', 'node js', 'wordpress', 'python'];
    const arr3 = ['figma', 'adobe xd', 'github', 'trello', 'vscode', 'sublime'];

    const fetchTools = async () => {
      try {
        const data = await getDocs(toolsCollection);
        const dataCollection = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        console.log("dataCollection", dataCollection);
        const arr1Data = dataCollection.filter(item => arr1.includes(item.name));
        const arr2Data = dataCollection.filter(item => arr2.includes(item.name));
        const arr3Data = dataCollection.filter(item => arr3.includes(item.name));
        console.log("arr1data", arr1Data);
        setTools1(arr1Data);
        setTools2(arr2Data);
        setTools3(arr3Data);
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
     fetchTools();
  },[]);


  return (
    <Container fluid>
      <Row className='py-5 justify-content-center align-items-center'>
        <Col className='col-12 col-md-11 col-lg-8'>
                    <Row>
                        <Col className='col-12'>
                          <Container className="container-for-vertical">

                                <Row className='justify-content-start align-items-center'>
                                <Col className='col-1'>
                                    <div class="vertical-container d-none d-sm-none d-md-flex flex-column align-items-center justify-content-center">
                                      <FontAwesomeIcon icon={faInfoCircle} className="icon vr-icon align-self-center" inverse />
                                    </div>                              
                                  </Col>
                                  <Col className='col-11 ps-md-2 ps-lg-5'>
                                    <p className='big-title'>
                                        About Me
                                    </p>                              
                                  </Col>
                                </Row>
                          </Container>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col className='col-12'>
                        <Container className="container-for-vertical">
                        <Row className='justify-content-start align-items-center'>
                                <Col className='col-1'>
                                  <div class="vertical-container-icon d-none d-sm-none d-md-flex flex-column align-items-center justify-content-center">
                                    <div class="vr align-self-center"></div>
                                  </div>                             
                                </Col>
                              <Col className='col-10 col-md-11 ps-md-2 ps-lg-5'>
                                <p className='white-p'>
                                    Mabuhay! My name is <strong>Jhun Anthony I. Sacapaño</strong>, a Philippine-based <strong>Software Engineer</strong> who resides in a tropical island. Back in 2018, I earned a Bachelors of Science in <strong>Information Technology</strong> specializing in <strong>Software Engineering</strong>. Graduated in 2022 with latin honor, I am also awarded as <strong>Best in Software Project</strong> showcasing a <strong>Tour Planner App for Sustainable Tourism</strong>. 
                                </p>
                                <p className='white-p'>
                                  After graduation, I was immediately employed for a year and half as an <strong>IT Officer</strong> in a government office that promotes and markets tourism enterprises and assets.
                                  During this time, I <strong>Led, Designed, and Developed</strong> two projects in a short period, including an <strong>Online Tourist Information Center</strong> and a <strong>QR-code Based Monitoring System for Tour Operators</strong>.
                                </p>
                                <p className='white-p'>
                                    Fast-forward to 2024, I decided to delve into <strong>MERN Stack Web Development</strong> and completed an intensive Full-Stack course through a <strong>Coding Bootcamp</strong>. When you can't find me in front of the screen, I would likely be on vacation. Now, I am <strong>actively seeking</strong> a full-time <strong>Software Engineering</strong> job!
                                </p>  
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
        </Col>
      </Row>
    </Container>
  );
};

