import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth} from './auth/authentication.js';

import { Container } from 'react-bootstrap';
import NotFound from './pages/NotFound';
import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
import Footer from './components/Footer';

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
        <Container fluid className='p-0 m-0'> 
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </Container >
        <Footer />
      </Router>
    </AuthProvider>
);
}

export default App;
