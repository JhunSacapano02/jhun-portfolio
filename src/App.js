import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth} from './auth/authentication.js';

import { Container } from 'react-bootstrap';
import NotFound from './pages/NotFound';
import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Experience from './pages/Experience.js';
import Contact from './pages/Contact.js';

function PrivateRoute({ element, ...rest }) {
  const { userLoggedIn } = useAuth();

  return userLoggedIn ? (
    element
  ) : (
    <Navigate to="*" replace={true} />
  );
}

function App() {
  


  return (
    < AuthProvider>
      <Router>  
        <AppNavBar />
        <Container fluid className='p-0 m-0 background'> 
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<NotFound />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/experience" element={<Experience />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </Container >
        <Footer />
      </Router>
    </AuthProvider>
);
}

export default App;
