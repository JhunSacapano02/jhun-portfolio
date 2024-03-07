import React from 'react';
import { Container, Row, Col, Card, Image, OverlayTrigger, Popover, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { db } from '../config/firebase'
import { getDocs, collection} from 'firebase/firestore';
import { useState, useEffect } from 'react';

export default function Projects() {
  const [openCollapse, setOpenCollapse] = useState(null);

  const handleDivClick = (index) => {
    setOpenCollapse(index === openCollapse ? null : index);
  };

  const logos = [
    {
      'name': 'flutter',
      'image': 'https://firebasestorage.googleapis.com/v0/b/sacapano-portfolio.appspot.com/o/tools%2Fflutterweb.png?alt=media&token=accac6ef-fe76-4a1a-a5b3-1d933e5aaae9'
    },
    {
      'name': 'adobe xd',
      'image': 'https://firebasestorage.googleapis.com/v0/b/sacapano-portfolio.appspot.com/o/tools%2Fadobexd.png?alt=media&token=3f6de173-b18f-4d55-a96c-4d7a8b0d9973'
    },
    {
      'name': 'vscode',
      'image': 'https://firebasestorage.googleapis.com/v0/b/sacapano-portfolio.appspot.com/o/tools%2Fvscode.png?alt=media&token=abbea04b-3e8f-412b-8366-50842f2d8841'
    },
    {
      'name': 'boostrap',
      'image': 'https://firebasestorage.googleapis.com/v0/b/sacapano-portfolio.appspot.com/o/tools%2Fbootstrap.png?alt=media&token=297b489d-cc97-463b-916d-33c3a35ecc10'
    },
    {
      'name': 'css',
      'image': 'https://firebasestorage.googleapis.com/v0/b/sacapano-portfolio.appspot.com/o/tools%2Fcss.png?alt=media&token=2d4e108b-da86-4c96-a852-40487c4391da'
    },
    {
      'name': 'express js',
      'image': 'https://firebasestorage.googleapis.com/v0/b/sacapano-portfolio.appspot.com/o/tools%2Fexpressjs.png?alt=media&token=0e32290a-3cb9-4d14-8d47-5c0dae7e074a'
    },
    {
      'name': 'figma',
      'image': 'https://firebasestorage.googleapis.com/v0/b/sacapano-portfolio.appspot.com/o/tools%2Ffigma.png?alt=media&token=755bbef7-9077-4172-9a31-ead3ee717b94'
    },
    {
      'name': 'firebase',
      'image': 'https://firebasestorage.googleapis.com/v0/b/sacapano-portfolio.appspot.com/o/tools%2Ffirebase.png?alt=media&token=83bfd316-4e58-4c74-a497-0c1b1f9f5864'
    },
    {
      'name': 'github',
      'image': 'https://firebasestorage.googleapis.com/v0/b/sacapano-portfolio.appspot.com/o/tools%2Fgithub.png?alt=media&token=3fc56afb-cb76-42a9-bc04-ba9946ee86ae'
    },
    {
      'name': 'html',
      'image': 'https://firebasestorage.googleapis.com/v0/b/sacapano-portfolio.appspot.com/o/tools%2Fhtml.png?alt=media&token=6a3111ce-9a80-4441-9a23-57e6cce2a897'
    },
    {
      'name': 'javascript',
      'image': 'https://firebasestorage.googleapis.com/v0/b/sacapano-portfolio.appspot.com/o/tools%2Fjavascript.png?alt=media&token=32023233-592d-4584-9e66-c8be4bd2288d'
    },
    {
      'name': 'mongodb',
      'image': 'https://firebasestorage.googleapis.com/v0/b/sacapano-portfolio.appspot.com/o/tools%2Fmongodb.png?alt=media&token=c145c4c8-a57f-4ddc-a4d1-70c42a4c732c'
    },
    {
      'name': 'node js',
      'image': 'https://firebasestorage.googleapis.com/v0/b/sacapano-portfolio.appspot.com/o/tools%2Fnodejs.png?alt=media&token=1fdbd19b-c69e-4ca0-966a-6ef0f3cb9722'
    },
    {
      'name': 'python',
      'image': 'https://firebasestorage.googleapis.com/v0/b/sacapano-portfolio.appspot.com/o/tools%2Fpython.png?alt=media&token=c1112165-b330-4f17-8e73-703c98062fd3'
    },
    {
      'name': 'react js',
      'image': 'https://firebasestorage.googleapis.com/v0/b/sacapano-portfolio.appspot.com/o/tools%2Freactjs.png?alt=media&token=5da40bd7-7722-465f-8808-d3eddf2105c4'
    },
    {
      'name': 'sublime',
      'image': 'https://firebasestorage.googleapis.com/v0/b/sacapano-portfolio.appspot.com/o/tools%2Fsublime.png?alt=media&token=9d11e2c1-41cf-4552-b1f4-5b4d7b3035d5'
    },
    {
      'name': 'trello',
      'image': 'https://firebasestorage.googleapis.com/v0/b/sacapano-portfolio.appspot.com/o/tools%2Ftrello.png?alt=media&token=8c291031-c1db-44e5-abd9-7c4693ee0c84'
    },
    {
      'name': 'wordpress',
      'image': 'https://firebasestorage.googleapis.com/v0/b/sacapano-portfolio.appspot.com/o/tools%2Fwordpress.png?alt=media&token=3b9e1cf2-4503-437d-ad80-565cb8eeedad'
    },
  ];

  const getLogoImage = (toolName) => {
    const tool = logos.find((logo) => logo.name.toLowerCase() === toolName.toLowerCase());
    return tool ? tool.image : null;
  };


  const projectsCollection = collection(db, 'projects');
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const data = await getDocs(projectsCollection);
      const dataCollection = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setProjects(dataCollection);
      console.log(dataCollection);
      console.log("name", dataCollection[0].title)
    } catch (err) {
      console.log(err);

    }
  };



  useEffect(() => {
      fetchProjects();
  },[]);


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
                                      <FontAwesomeIcon icon={faProjectDiagram} className="icon vr-icon align-self-center" inverse />
                                    </div>                              
                                  </Col>
                                  <Col className='col-11 ps-md-2 ps-lg-5'>
                                    <p className='big-title'>
                                        Projects
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
                              {projects.map((project , index) => (
                              <Row key={project.docId} className='justify-content-center align-items-top pb-4 mb-4'>
                                <Col className="col-12 col-md-6">
                                    <Image className='project-img my-4 my-sm-4 my-lg-0' key={project.docId} src={project.image} alt="certificate" />
                                </Col>
                                
                                <Col className="col-12 col-md-6 white-p d-flex flex-column flex-md-row">
                                    <div onClick={() => handleDivClick(index)} className='w-100'>
                                      <Row className='justify-content-start align-items-start'>
                                        <Col className='col-9 col-md-11'>
                                        <strong className='title-w text-uppercase my-0'>{project.title}</strong>
                                        </Col>
                                        <Col className='col-3 col-md-1'>
                                        <a href={project.website} target="_blank" rel="noopener noreferrer" className="icon-link">
                                        <FontAwesomeIcon icon={faSquareArrowUpRight} className="icon" size='small' inverse/>
                                        </a>
                                        </Col>
                                      </Row>
                                      
                                      {project.tools && project.tools.map((tool, index) => (
                                              <img key={index} src={getLogoImage(tool)} alt={tool} className="tool-logo" />
                                      ))}
                                      <br></br>
                                      
                                      <hr></hr>
                                      
                                      {project.description}
                                      <Collapse in={index === openCollapse}>
                                        <div>
                                          {project.summary}
                                        </div>
                                      </Collapse>
                                      
                                    </div>
                                </Col>
                              </Row>
                              ))}
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

