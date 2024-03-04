import React from 'react';
import { Container, Row, Col, Card, Image, OverlayTrigger, Popover} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { db } from '../config/firebase'
import { getDocs, collection} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { faFacebook, faLinkedin, faBehance, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function About() {

  const [tools, setTools] = useState([]);
  const toolsCollection = collection(db, 'tools');
  
  const fetchData = async () => {
    try {
      const data = await getDocs(toolsCollection);
      const dataCollection = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setTools(dataCollection);
      console.log(dataCollection);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
      fetchData();
  },[tools]);

  return (
    <Container fluid>
      <Row className='m-1 m-md-3  p-1 p-md-5'>
        <Col md={10}>
          <Card className='glass-card p-2 p-md-3 p-lg-5 h-100'>
            <Card.Body>
              <p className='label'>
                ABOUT ME
              </p>
              <Card.Text className="text-justify">
               Mabuhay! My name is <strong>Jhun Anthony I. Sacapaño</strong>, a Philippine-based <strong>Software Engineer</strong> who lives in a tropical island. Back in 2018, I took a Bachelors of Science in <strong>Information Technology</strong> specializating in <strong>Software Engineering</strong> and graduted with latin honor in June 2022. 
              </Card.Text>
              <Card.Text>
              For a year and a half after graduation, I was employed as an <strong>IT Officer</strong> in a government office assisting in the implementation and taking the lead into the development of <strong>ICT-facilitated Project</strong> driven by Tourism Initiatives.
              </Card.Text> 
              <Card.Text>
              Fastforward in 2024, I decided to delve into <strong>Web Development</strong> and completed an intensive Full-stack course through a coding bootcamp.
              </Card.Text>  
              <Card.Text>
              Now, I am focusing on these technologies:<br></br><br></br>
              <FontAwesomeIcon icon={faCaretRight}  fixedWidth /> <strong>MERN Stack Development</strong>
              <br></br>
              <FontAwesomeIcon icon={faCaretRight}  fixedWidth /> <strong>Flutter Development with Firebase Cloud Services</strong>
              <br></br>
              <FontAwesomeIcon icon={faCaretRight}  fixedWidth /> <strong>User Experience Design with Figma/Adobe XD</strong>
              <br></br>
              <FontAwesomeIcon icon={faCaretRight}  fixedWidth /> <strong>Wordpress Development</strong>
              </Card.Text> 
              <Card.Text>
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
                  <Image className='tool-image d-inline' key={tool.docId} src={tool.image} alt={tool.name} style={{ height: '65px', width: '65px' }} />
              </OverlayTrigger>
              ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={2}>
          <Card className=' glass-card p-2 p-md-3 p-lg-5 h-100'>
            <Card.Body className=' justify-content-center align-items-center text-center'>
            <Card.Text className='text-center'>
              <FontAwesomeIcon className='d-sm-inline d-md-block m-5' icon={faFacebook} size='xl' fixedWidth />
              <FontAwesomeIcon className='d-sm-inline d-md-block m-5' icon={faLinkedin} size='xl' fixedWidth />
              <FontAwesomeIcon className='d-sm-inline d-md-block m-5' icon={faGithub} size='xl' fixedWidth />
              <FontAwesomeIcon className='d-sm-inline d-md-block m-5' icon={faBehance} size='xl' fixedWidth />

            </Card.Text> 

            {/* {tools.map((tool) => (
              <Image className='image-tools' key={tool.docId} src={tool.image} alt={tool.name} style={{ height: '90px', width: '90px' }} />
              ))} */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

