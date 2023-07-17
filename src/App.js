// import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './routes/home';
import About from './routes/About';
import Contact from './routes/Contact';
import Skills from './routes/Skills';
import Services from './routes/Services';
import Qualification from './routes/Qualification';
import Work from './routes/Work';
import Footer from './routes/Footer';

const App = () => (
  <>
    <Header />
    <main className="page_container">
      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
        </Routes> */}

      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Work />
      <Contact />
      <Footer />

    </main>
  </>
);

export default App;
