import { Container } from 'react-bootstrap';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';


export default function Home(){
    

    return (
        <>
        <Container fluid className='hero-section' id='hero'>
            <Hero />
        </Container>
        <Container fluid className='section' id='about'>
            <About />
        </Container>
        <Container fluid className='section' id='experience'>
            <Experience />
        </Container>
        <Container fluid className='section' id='projects'>
            <Projects />
        </Container>
        <Container fluid className='section' id='contact'>
            <Contact />
        </Container>
        </>
    )
}