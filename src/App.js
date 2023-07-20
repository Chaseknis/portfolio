import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './routes/home';
import About from './routes/About';
import Contact from './routes/Contact';
import Skills from './routes/Skills';
import Services from './routes/Services';
import Qualification from './routes/Qualification';
import Work from './routes/Work';
// import ScrollUp from './components/scrollUp';
// import Footer from './routes/Footer';

const App = () => (
  <>
    <Header />
    <main className="page_container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/qualification" element={<Qualification />} />
        <Route path="/portfolio" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    {/* <Footer /> */}
    {/* <ScrollUp /> */}
  </>
);
export default App;
