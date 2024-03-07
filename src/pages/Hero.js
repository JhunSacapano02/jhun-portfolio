import { Popover, Form, Button, InputGroup, Row, Col, Image, Container, Card, Pagination, Section  } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { useState, useEffect } from 'react';
import profile from'../assets/images/profile.png';
import { db } from '../config/firebase'
import { getDocs, collection} from 'firebase/firestore';
import { useNavigate} from 'react-router-dom';

export default function Home(){
    const navigate = useNavigate();
    const [certificateList, setCertificateList] = useState([]);    
    const certificateCollection = collection(db, 'certificates');

    const fetchData = async () => {
        try {
          const data = await getDocs(certificateCollection);
          const dataCollection = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          const sortedData = dataCollection.sort((a, b) => new Date(b.issue) - new Date(a.issue));

          setCertificateList(sortedData);
          console.log(dataCollection);
        } catch (err) {
          console.log(err);

        }
      };
    
    useEffect(() => {
      // to save request credit comment this
        fetchData();
    },[]);


    return (
        <>
        <Container fluid id='animated-container'></Container>
        <Row className='justify-content-center align-items-center'>
            <Col className='col-md-11 col-lg-12'>
                <Container fluid className="content-container">
                    <p className='title'>JUNIOR FULL STACK</p>
                    <p id='massive-text'>WEB DEV</p>
                    <Row className='d-flex justify-content-center'>
                        <Col className='intro' lg={10}>
                          <Row className='justify-content-between align-items-center'>
                            <Col className='col-4'>
                              <p className='sub-title mt-5 text-start'>Hi! I'm <strong>Jhun Anthony Sacapaño</strong>.<br></br>I <strong>Empathize</strong>, <strong>Innovate</strong>, <strong>Assess</strong>, & <strong>Repeat</strong>.</p>
                              </Col>
                              <Col className='col-4'>
                              <p className='sub-title mt-5 text-end'>A <strong>Software Engineer</strong> specializing in creating experiences through code and beyond.</p>
                            </Col>
                          </Row>
                        </Col>
                    </Row>
                </Container>
                
            </Col>
        </Row>
        <Image id='profile' src={profile} alt="My Photo"/>
        <Container fluid id='scroll-container'>
            <Container fluid className="scroll imgBox">
                <div className='tooptip'>
                {certificateList.map((certificate) => (
                    <OverlayTrigger
                    trigger="hover"
                    key='top'
                    placement='top'
                    overlay={
                      <Popover id={`popover-positioned-top`}>
                        <Popover.Header as="h3">{certificate.type}</Popover.Header>
                        <Popover.Body>                          
                          <strong>{certificate.name}</strong> | {certificate.time} hours<br/>
                          issued by <strong>{certificate.issuer}</strong><br/>
                          on {certificate.issue}
                          <br/><br/>
                          <Image ket={certificate.docId} src={certificate.image} alt="certificate" style={{ width: '100%' }}/>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Image ket={certificate.docId} src={certificate.image} alt="certificate"/>
                  </OverlayTrigger>

                ))}
                </div>
                <div className='tooptip'>
                {certificateList.map((certificate) => (
                    <OverlayTrigger
                    trigger="hover"
                    key='top'
                    placement='top'
                    overlay={
                      <Popover id={`popover-positioned-top`}>
                        <Popover.Header as="h3">{certificate.type}</Popover.Header>
                        <Popover.Body>                          
                          <strong>{certificate.name}</strong> | {certificate.time} hours<br/>
                          issued by <strong>{certificate.issuer}</strong><br/>
                          on {certificate.issue}
                          <br/><br/>
                          <Image ket={certificate.docId} src={certificate.image} alt="certificate" style={{ width: '100%' }}/>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Image ket={certificate.docId} src={certificate.image} alt="certificate"/>
                  </OverlayTrigger>
                ))}
                </div>
            </Container>
        </Container>
        </>
    )
}