import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMobile, faAt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col} from 'react-bootstrap';



export default function Footer() {
  return (
    <footer bgColor='light' className='text-center text-muted'>
      <section className='d-flex justify-content-center p-4 border-bottom'>
        <div>
          
          <a href='https://www.linkedin.com/in/jhun-sacapano' target="blank" className='me-4 text-reset'>
            <FontAwesomeIcon icon={faLinkedin} size="lg"/>
          </a>
          <a href='https://www.facebook.com/jhunsacapano02/' target="blank" className='me-4 text-reset'>
            <FontAwesomeIcon icon={faFacebook} size="lg"/>
          </a>
          <a href='https://github.com/JhunSacapano02' target="blank" className='me-4 text-reset'  >
            <FontAwesomeIcon icon={faGithub} size="lg"/>
          </a>

        </div>
      </section>

      <section className='mb-4'>
        <Container fluid className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md={3} lg={4} xl={3} className='mx-auto mb-4'>
              <h6 className=' title text-uppercase fw-bold mb-4'>
                Jhun Anthony I. Sacapaño
              </h6>
              <p>
                Designed in Figma and coded in <strong>Visual Studio Code</strong>. This portfolio is built with <strong>React js</strong> framework with <strong>Bootstrap</strong> plugin, and integrated with <strong>Firebase Cloud Services</strong>.             </p>
            </Col>

            <Col md={4} lg={3} xl={3} className='mx-auto mb-md-0 mb-4'>
              <h6 className='title text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <FontAwesomeIcon icon={faLocationDot} />    Boracay Isand, Malay, Aklan 5608
              </p>
              <p>
                <FontAwesomeIcon icon={faAt} />     jhunsacapano02@example.com
              </p>
              <p>
                <FontAwesomeIcon icon={faMobile} />     + 63 921 663 7266
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright Jhun Anthony Sacapaño
      </div>
    </footer>
  );
}