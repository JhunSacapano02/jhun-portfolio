import { Popover, Form, Button, InputGroup, Row, Col, Image, Container, Card, Pagination, Section  } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { useState, useEffect } from 'react';
import profile from'../assets/images/profile.png';
import { db } from '../config/firebase'
import { getDocs, collection} from 'firebase/firestore';
import { useNavigate, useParams} from 'react-router-dom';
import Hero from './Hero';
import About from './About';


export default function Home(){
    

    return (
        <>
        <Container fluid className='hero-section'>
            <Hero />
        </Container>
        <Container fluid className='section'>
            <About />
        </Container>
        </>
    )
}